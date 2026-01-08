// app/api/verify-otp/route.js
import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

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

    // ✅ Latest OTP record check karo
    const [otpRows] = await db.execute(
      "SELECT * FROM otp_logins WHERE phone = ? ORDER BY created_at DESC LIMIT 1",
      [phone]
    );

    if (otpRows.length === 0 || otpRows[0].otp !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired OTP" },
        { status: 401 }
      );
    }

    // ✅ Check if user already exists with this phone
    const [userRows] = await db.execute(
      "SELECT * FROM users WHERE phone = ?",
      [phone]
    );

    let user;
    if (userRows.length === 0) {
      // ➕ New user create karo (minimal info)
      const [result] = await db.execute(
        "INSERT INTO users (phone) VALUES (?)",
        [phone]
      );

      user = {
        id: result.insertId,
        name: null,
        email: null,
        phone,
      };
    } else {
      user = userRows[0];
    }

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      created_at: user.created_at,
    };

    return NextResponse.json({
      success: true,
      message: "OTP verified",
      user: safeUser,
    });
  } catch (err) {
    console.error("verify-otp error:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
