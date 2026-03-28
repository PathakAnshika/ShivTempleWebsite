import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { user_id } = await req.json();
    const db = getDB();

    const [rows] = await db.execute(
      `SELECT * FROM notifications 
       WHERE user_id IS NULL OR user_id = ?
       ORDER BY created_at DESC`,
      [user_id]
    );

    return NextResponse.json({
      success: true,
      notifications: rows,
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false });
  }
}