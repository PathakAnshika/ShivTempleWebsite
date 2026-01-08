import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    // ✅ Safe JSON parsing (prevents crash if body is empty)
    let body = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email missing in request" },
        { status: 400 }
      );
    }

    // ✅ DB connection
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root@123",
      database: "devotee_db",
    });

    // ✅ Fetch user from 'users'
    const [userRows] = await connection.execute(
      "SELECT id, name, email, created_at FROM users WHERE email = ?",
      [email]
    );

    if (userRows.length === 0) {
      await connection.end();
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    const user = userRows[0];

    // ✅ Check if user has membership
    const [memberRows] = await connection.execute(
      "SELECT id, full_name, email, phone, membership_type, created_at FROM membership WHERE email = ?",
      [email]
    );

    if (memberRows.length > 0) {
      const membership = memberRows[0];
      user.is_member = true;
      user.membership_type = membership.membership_type;
      user.membership_date = membership.created_at;
      user.phone = membership.phone;
    } else {
      user.is_member = false;
    }

    await connection.end();

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
