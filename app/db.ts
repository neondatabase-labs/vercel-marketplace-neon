import { Pool } from "pg";
import { attachDatabasePool } from "@vercel/functions";

let pool: Pool | null = null;
export function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    attachDatabasePool(pool);
  }
  return pool;
}

export async function checkDbConnection() {
  if (!process.env.DATABASE_URL) {
    return "No DATABASE_URL environment variable";
  }
  try {
    const pool = getPool();
    const result = await pool.query("SELECT version()");
    console.log("Pg version:", result);
    return "Database connected";
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return "Database not connected";
  }
}
