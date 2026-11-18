import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { neon, neonConfig } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL, neonConfig());

const db = drizzle(sql);

export default db;