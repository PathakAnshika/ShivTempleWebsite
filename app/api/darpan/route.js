import { getDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    const db = getDB();

    const [rows] = await db.execute(`
      SELECT 
        CASE
          WHEN show_public = 1 THEN donor_name
          ELSE 'Anonymous Donor'
        END AS name,
        amount,
        purpose
      FROM donations
      ORDER BY created_at DESC
    `);

    return NextResponse.json(rows);

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }

}