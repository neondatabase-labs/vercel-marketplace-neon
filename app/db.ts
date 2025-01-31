import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL undefined. Check your .env file and make sure it is loaded",
  );
}
export const sql = neon(process.env.DATABASE_URL);

export async function getPgVersion() {
  const result = await sql`SELECT version()`;
  return result[0].version;
}
