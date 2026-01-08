import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { title, message, type, user_id } = await req.json();

    if (!title || !message) {
      return NextResponse.json(
        { success: false, message: "Title and message required" },
        { status: 400 }
      );
    }

    const db = getDB();

    await db.execute(
      `
      INSERT INTO notifications (title, message, type, user_id)
      VALUES (?, ?, ?, ?)
      `,
      [title, message, type, user_id]
    );

    return NextResponse.json({
      success: true,
      message: "Notification sent",
    });

  } catch (error) {
    console.error("Admin Notification Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
