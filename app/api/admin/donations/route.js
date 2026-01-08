import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const db = getDB();

    const [rows] = await db.execute(`
      SELECT 
        d.id,
        d.donor_name,
        d.email,
        d.phone,
        d.seva_type,
        d.amount,
        d.status,
        d.payment_id,
        DATE_FORMAT(d.created_at, '%d %b %Y, %h:%i %p') AS created_at
      FROM donations d
      ORDER BY d.created_at DESC
    `);

    return NextResponse.json({
      success: true,
      donations: rows,
    });
  } catch (error) {
    console.error("Admin Donations API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch donations" },
      { status: 500 }
    );
  }
}
