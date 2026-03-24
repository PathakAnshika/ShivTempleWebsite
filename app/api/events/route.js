import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const db = getDB();

    const [rows] = await db.execute(`
      SELECT * FROM events ORDER BY date DESC
    `);

    return NextResponse.json({
      success: true,
      events: rows
    });

  } catch (err) {
    return NextResponse.json({ success: false });
  }
}