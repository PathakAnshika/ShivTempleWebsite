import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { user_id, full_name, email, phone, membership_type } = body;

    // Validation
    if (!user_id || !full_name || !email || !phone || !membership_type) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const db = await getDB();

    // Check if already a member
    const [existing] = await db.execute(
      "SELECT id FROM membership WHERE user_id = ?",
      [user_id]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, message: "User is already a member" },
        { status: 409 }
      );
    }

    // Insert membership
    await db.execute(
      `INSERT INTO membership 
        (user_id, full_name, email, phone, membership_type) 
       VALUES (?, ?, ?, ?, ?)`,
      [user_id, full_name, email, phone, membership_type]
    );

    return NextResponse.json(
      { success: true, message: "Membership created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Membership API Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
