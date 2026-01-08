import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const db = getDB();

    const [[donation]] = await db.execute(
      "SELECT IFNULL(SUM(amount),0) AS totalDonation FROM donations"
    );

    const [[users]] = await db.execute(
      "SELECT COUNT(*) AS totalUsers FROM users"
    );

    const [[today]] = await db.execute(
      `SELECT IFNULL(SUM(amount),0) AS todayDonation 
       FROM donations 
       WHERE DATE(created_at) = CURDATE()`
    );

    return NextResponse.json({
      success: true,
      data: {
        totalDonation: donation.totalDonation,
        totalUsers: users.totalUsers,
        todayDonation: today.todayDonation,
      },
    });
  } catch (err) {
    console.error("Admin dashboard error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
