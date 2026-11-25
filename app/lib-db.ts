import { createClient, type Client } from "@libsql/client";

// Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in .env.local (and on your host).
// Without them, a local SQLite file (local.db) is used for development.
let client: Client | null = null;
let ready: Promise<void> | null = null;

export function getDb(): Client {
  client ??= createClient({
    url: process.env.TURSO_DATABASE_URL ?? "file:local.db",
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
  return client;
}

export function ensureSchema(): Promise<void> {
  ready ??= getDb()
    .execute("CREATE TABLE IF NOT EXISTS visitors (id INTEGER PRIMARY KEY CHECK (id = 1), total INTEGER NOT NULL DEFAULT 0)")
    .then(() => getDb().execute("INSERT OR IGNORE INTO visitors (id, total) VALUES (1, 0)"))
    .then(() => undefined)
    .catch((e) => {
      ready = null;
      throw e;
    });
  return ready;
}

export async function getTotal(): Promise<number> {
  await ensureSchema();
  const r = await getDb().execute("SELECT total FROM visitors WHERE id = 1");
  return Number(r.rows[0]?.total ?? 0);
}

export async function incrementTotal(): Promise<number> {
  await ensureSchema();
  const r = await getDb().execute("UPDATE visitors SET total = total + 1 WHERE id = 1 RETURNING total");
  return Number(r.rows[0]?.total ?? 0);
}
