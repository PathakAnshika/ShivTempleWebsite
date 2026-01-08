import { NextResponse } from "next/server";
import { getDB } from "@/app/lib/db";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    const db = await getDB();

    // Check if email exists
    const [exist] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (exist.length > 0) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 400 }
      );
    }

    // Insert user
    await db.execute(
      "INSERT INTO users (name, email, password, login_method) VALUES (?, ?, ?, ?)",
      [name, email, password, "email"]
    );

    return NextResponse.json({
      success: true,
      message: "Registration successful",
    });
  } catch (err) {
    console.error("register-email error:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
