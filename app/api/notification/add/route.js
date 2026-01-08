import { NextResponse } from "next/server";
import { getDB } from "@/app/api/db";

export async function POST(req) {
  try {
    const { user_email, title, message } = await req.json();

    if (!title || !message) {
      return NextResponse.json(
        { success: false, message: "Title & message required" },
        { status: 400 }
      );
    }

    const db = await getDB();

    await db.query(
      "INSERT INTO notifications (user_email, title, message) VALUES (?, ?, ?)",
      [user_email || null, title, message]
    );

    return NextResponse.json({ success: true, message: "Notification added!" });
  } catch (err) {
    console.error("ADD NOTIFICATION ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
