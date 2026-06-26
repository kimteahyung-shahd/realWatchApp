import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb, updateDb } from "../../_lib/db";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;
  const userId = Array.isArray(id) ? id[0] : id;

  if (!userId) {
    return res.status(400).json({ error: "User id is required" });
  }

  const { users } = getDb();
  const index = users.findIndex((user) => user.id === userId);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const updatedUser = { ...users[index], ...req.body };

  updateDb((data) => ({
    ...data,
    users: data.users.map((user, i) => (i === index ? updatedUser : user)),
  }));

  return res.status(200).json(updatedUser);
}
