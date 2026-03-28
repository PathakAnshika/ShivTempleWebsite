import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { title, message, type, user_id } = await req.json();
    const db = getDB();

    await db.execute(
      `INSERT INTO notifications (title, message, type, user_id, is_read)
       VALUES (?, ?, ?, ?, 0)`,
      [title, message, type, user_id || null]
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false });
  }
}