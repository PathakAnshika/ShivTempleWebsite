import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const db = getDB();

    const [rows] = await db.execute(`
      SELECT 
        id,
        name,
        email,
        phone,
        role,
        login_method,
        DATE_FORMAT(created_at, '%Y-%m-%d') AS created_at
      FROM users
      ORDER BY created_at DESC
    `);

    return NextResponse.json({
      success: true,
      users: rows,
    });

  } catch (error) {
    console.error("Admin Users API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
