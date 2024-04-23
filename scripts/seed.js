import { sql } from "@vercel/postgres";

async function createUsersTable(client) {
  try {
    const users = await client.sql`CREATE TABLE IF NOT EXISTS users (
        user_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        user_name varchar(255) NOT NULL,
        user_email TEXT NOT NULL UNIQUE,
        user_password TEXT NOT NULL
      )`;
    console.log('Created "users" table');
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function main() {
  const client = await sql.connect();

  await createUsersTable(client);

  client.release();
}

main().catch((error) => {
  console.error(error);
});
