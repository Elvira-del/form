import { sql } from "@vercel/postgres";

async function createUsersTable() {
  try {
    const users = await sql`CREATE TABLE users (
        user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
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
  await sql.connect();

  await createUsersTable();

  await sql.end();
}

main().catch((error) => {
  console.error(error);
});
