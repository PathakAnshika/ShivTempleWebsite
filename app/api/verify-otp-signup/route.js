import { NextResponse } from "next/server";
import { getDB } from "@lib/db";

export async function POST(req) {
  try {
    const { phone, otp } = await req.json();

    if (!phone || !otp) {
      return NextResponse.json(
        { success: false, message: "Phone and OTP required" },
        { status: 400 }
      );
    }

    const db = await getDB();

    // Check OTP
    const [rows] = await db.execute(
      "SELECT * FROM otp WHERE phone = ? ORDER BY id DESC LIMIT 1",
      [phone]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "OTP not found" },
        { status: 400 }
      );
    }

    const record = rows[0];

    if (record.otp !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    if (new Date(record.expires_at) < new Date()) {
      return NextResponse.json(
        { success: false, message: "OTP expired" },
        { status: 400 }
      );
    }

    // Create user (phone only)
    await db.execute(
      "INSERT INTO users (phone, login_method) VALUES (?, ?)",
      [phone, "phone"]
    );

    const [user] = await db.execute(
      "SELECT * FROM users WHERE phone = ? ORDER BY id DESC LIMIT 1",
      [phone]
    );

    return NextResponse.json({
      success: true,
      message: "Account Created",
      user: user[0],
    });
  } catch (err) {
    console.error("verify-otp-signup error:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
