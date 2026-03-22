import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { userId, status } = await req.json();

    const db = getDB();

    await db.execute(
      "UPDATE users SET status = ? WHERE id = ?",
      [status, userId]
    );

    return NextResponse.json({
      success: true,
      message: "Status updated",
    });

  } catch (err) {
    console.error("Status update error:", err);

    return NextResponse.json(
      { success: false, message: "Error updating status" },
      { status: 500 }
    );
  }
}