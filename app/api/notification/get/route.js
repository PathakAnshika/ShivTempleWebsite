import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email required" },
        { status: 400 }
      );
    }
console.log("USER ID:", user.id);
    const db = await getDB();

    // Fetch global + user-specific notifications
    const [rows] = await db.query(
      `
        SELECT * FROM notifications
        WHERE user_email IS NULL OR user_email = ?
        ORDER BY created_at DESC
      `,
      [email]
    );

    return NextResponse.json({ success: true, notifications: rows });
  } catch (err) {
    console.error("GET NOTIFICATIONS ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
