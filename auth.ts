import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { User } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { object, string } from "zod";

const userSchema = object({
  email: string({ required_error: "Email is required" }).email({
    message: "Invalid email address",
  }),
  password: string({
    required_error: "Password is required",
  })
    .min(5, { message: "Must be 5 or more characters long" })
    .max(15, { message: "Must be 15 or fewer characters long" }),
}).required();

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE user_email=${email}`;
    console.log(user);
    return user.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = userSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          console.log("Credentials", email);

          if (!user) {
            console.log("User not found");
            return null;
          }

          console.log("User", user);
          return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
