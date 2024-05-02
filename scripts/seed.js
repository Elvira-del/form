import { sql } from "@vercel/postgres";

async function createUsersTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const users = await client.sql`CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        username varchar(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
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
