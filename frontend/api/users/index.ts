import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb, updateDb } from "../_lib/db";

function filterByQuery<T extends Record<string, unknown>>(
  items: T[],
  query: VercelRequest["query"],
) {
  return items.filter((item) =>
    Object.entries(query).every(([key, value]) => {
      if (value === undefined) return true;
      const expected = Array.isArray(value) ? value[0] : value;
      return String(item[key]) === String(expected);
    }),
  );
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    const { users } = getDb();
    return res.status(200).json(filterByQuery(users, req.query));
  }

  if (req.method === "POST") {
    const newUser = {
      ...req.body,
      id: crypto.randomUUID().slice(0, 4),
    };

    updateDb((data) => ({
      ...data,
      users: [...data.users, newUser],
    }));

    return res.status(201).json(newUser);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
