import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const db = getDB();

   const [rows] = await db.execute(`
  SELECT 
    users.id,
    users.name,
    users.email,
    users.phone,
    users.role,
    users.status,

    COALESCE(SUM(d.amount), 0) AS total_donation,

    DATE_FORMAT(users.created_at, '%Y-%m-%d') AS created_at

  FROM users
  LEFT JOIN donations d ON d.user_id = users.id

  GROUP BY users.id
  ORDER BY users.created_at DESC
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
