import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password required" },
        { status: 400 }
      );
    }

    const db = getDB();

    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const user = rows[0];

    if (user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Incorrect password" },
        { status: 401 }
      );
    }

   const safeUser = {
  id: user.id,
  name: user.name,
  email: user.email,
  phone: user.phone,
  role: user.role,        
  created_at: user.created_at,
};


    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: safeUser,
    });

  } catch (err) {
    console.error("login-email error:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
