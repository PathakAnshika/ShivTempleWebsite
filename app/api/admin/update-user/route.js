import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  const db = getDB();
  const { user_id, role, status } = await req.json();

  try {
    if (role) {
      await db.execute("UPDATE users SET role=? WHERE id=?", [role, user_id]);
    }

    if (status) {
      await db.execute("UPDATE users SET status=? WHERE id=?", [status, user_id]);
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
}