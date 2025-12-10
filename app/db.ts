import { Pool } from "pg";
import { attachDatabasePool } from "@vercel/functions";

let pool: Pool = new Pool({ connectionString: process.env.DATABASE_URL });
attachDatabasePool(pool);

export async function checkDbConnection() {
  if (!process.env.DATABASE_URL) {
    return "No DATABASE_URL environment variable";
  }
  try {
    await pool.query("SELECT version()");
    return "Database connected";
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return "Database not connected";
  }
}
