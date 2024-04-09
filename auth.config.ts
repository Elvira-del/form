import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
    newUser: "/signup",
  },
  providers: [],
} satisfies NextAuthConfig;
