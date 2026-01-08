import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { user_id } = await req.json();
    const db = await getDB();

    /* TOTAL OFFERINGS */
    const [offerings] = await db.execute(
      "SELECT SUM(amount) AS total FROM offerings WHERE user_id = ?",
      [user_id]
    );

    /* SEVA COMPLETED COUNT */
    const [seva] = await db.execute(
      "SELECT COUNT(*) AS sevaCount FROM seva_completed WHERE user_id = ?",
      [user_id]
    );

    /* UPCOMING EVENTS */
    const [events] = await db.execute(
      "SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC LIMIT 5"
    );

    return NextResponse.json({
      success: true,
      data: {
        totalOfferings: offerings[0]?.total || 0,
        sevaCompleted: seva[0]?.sevaCount || 0,
        upcomingEvents: events || []
      }
    });

  } catch (err) {
    console.error("home-stats API error:", err);
    return NextResponse.json({ success: false, message: err.message });
  }
}
