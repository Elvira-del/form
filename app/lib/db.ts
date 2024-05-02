"use server";

import { User } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user.", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function createUser(
  username: string,
  email: string,
  password: string,
): Promise<User> {
  try {
    const id = randomUUID();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const insertedUser =
      await sql<User>`INSERT INTO users (id, username, email, password) VALUES (${id}, ${username}, ${email}, ${hashedPassword}) ON CONFLICT (id) DO NOTHING`;

    return insertedUser.rows[0];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user.");
  }
}
