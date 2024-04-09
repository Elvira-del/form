import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        let user = credentials;
        console.log("Credentials", credentials);

        if (user) {
          console.log("User", user);
          return user;
        } else {
          console.log("Credentials error");
          return null;
        }
      },
    }),
  ],
});
