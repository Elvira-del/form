import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { getUser } from "./app/lib/db";
import bcrypt from "bcrypt";
import { object, string } from "zod";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = object({
          email: string({ required_error: "Email is required." }).email({
            message: "Invalid email address.",
          }),
          password: string({
            required_error: "Password is required.",
          }).min(5, { message: "Must be 5 or more characters long." }),
        }).safeParse(credentials);

        if (!parsedCredentials.success) {
          console.log(parsedCredentials.error.flatten());
        }

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) {
            return null;
          }

          const checkedPassword = await bcrypt.compare(password, user.password);

          if (checkedPassword) {
            return user;
          }
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
