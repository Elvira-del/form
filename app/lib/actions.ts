"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { createUser } from "./db";
import { object, string } from "zod";

const FormSchema = object({
  username: string({ required_error: "Username is required." }).min(3),
  email: string({ required_error: "Email is required." }).email(),
  password: string({
    required_error: "Password is required.",
  })
    .min(5)
    .max(15),
}).required();

const SignInSchema = FormSchema.omit({ username: true });

type FormState = {
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string;
};

export async function authenticateLogin(
  prevState: FormState | string | undefined,
  formData: FormData,
) {
  try {
    const parsedFormData = SignInSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!parsedFormData.success) {
      return {
        errors: parsedFormData.error.flatten().fieldErrors,
      };
    }

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
  prevState: FormState,
  formData: FormData,
) {
  try {
    const parsedFormData = FormSchema.safeParse({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!parsedFormData.success) {
      return {
        errors: parsedFormData.error.flatten().fieldErrors,
        message: "Missing fields. Failed to create a new user.",
      };
    }

    if (parsedFormData.success) {
      const { username, email, password } = parsedFormData.data;
      const newUser = await createUser(username, email, password);

      if (newUser) {
        await signIn("credentials", parsedFormData);

        return {
          message: "Success created user!",
        };
      }
    }

    return {
      message: "Failed to create a new user.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
