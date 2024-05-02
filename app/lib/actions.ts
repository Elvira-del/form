"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { createUser } from "./db";
import { object, string } from "zod";

export async function authenticateLogin(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    console.log(error);
    throw error;
  }
}

export async function authenticateRegister(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const parsedFormData = object({
      username: string({ required_error: "Username is required." }).min(3, {
        message: "Must be 3 or more characters long.",
      }),
      email: string({ required_error: "Email is required." }).email({
        message: "Invalid email address.",
      }),
      password: string({
        required_error: "Password is required.",
      })
        .min(5, { message: "Must be 5 or more characters long." })
        .max(15, { message: "Must be 15 or fewer characters long." }),
    }).safeParse({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (parsedFormData.success) {
      const { username, email, password } = parsedFormData.data;
      const newUser = await createUser(username, email, password);

      if (newUser) {
        await signIn("credentials", parsedFormData);

        return "Success created user!";
      }
    } else {
      console.log("Zod error:", parsedFormData.error.flatten());
    }

    return "Failed to create a new user.";
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    console.log(error);
    throw error;
  }
}
