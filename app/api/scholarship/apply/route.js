import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const db = getDB();

    await db.execute(
      `INSERT INTO scholarships 
      (user_id, name, email, phone, category, school, status)
      VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
      [
        body.user_id,
        body.name,
        body.email,
        body.phone,
        body.category,
        body.school,
      ]
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false });
  }
}