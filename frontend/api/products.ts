import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb } from "./_lib/db";

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
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { products } = getDb();
  return res.status(200).json(filterByQuery(products, req.query));
}
