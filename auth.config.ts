import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    // signIn: "/signin",
    signIn: "/",
    newUser: "/signup",
  },
  callbacks: {
    authorized({ request, auth }): boolean | Response {
      const url = request.nextUrl;
      const user = auth?.user;

      if (url.pathname.startsWith("/account")) {
        if (!!user) return true;
        return false;
      }

      if (!!user) {
        return Response.redirect(new URL("/account", url));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
