import initialDb from "../data/db.json";

type DbData = typeof initialDb;

let db: DbData = structuredClone(initialDb);

export function getDb() {
  return db;
}

export function updateDb(updater: (data: DbData) => DbData) {
  db = updater(db);
  return db;
}
