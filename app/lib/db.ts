import postgres from 'postgres';

if (!process.env.POSTGRES_URL) {
  throw new Error('Missing POSTGRES_URL environment variable');
}

const sql = postgres(process.env.POSTGRES_URL, {
  ssl: process.env.POSTGRES_URL.includes('localhost') ? false : 'require',
});

export default sql;
