import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { object, string } from "zod";
import bcrypt from "bcrypt";
import { getUser } from "./app/lib/db";

const CredentialsSchema = object({
  email: string({ required_error: "Email is required." }).email(),
  password: string({
    required_error: "Password is required.",
  }).min(5),
}).required();

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GitHub,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = CredentialsSchema.safeParse(credentials);

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
