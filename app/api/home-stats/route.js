import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { user_id } = await req.json();

    // 🔹 TOTAL OFFERINGS
    const { data: offeringsData, error: offeringsError } = await supabase
      .from("offerings")
      .select("amount")
      .eq("user_id", user_id);

    if (offeringsError) throw offeringsError;

    const totalOfferings = offeringsData.reduce(
      (sum, o) => sum + (Number(o.amount) || 0),
      0
    );

    // 🔹 SEVA COMPLETED COUNT
    const { data: sevaData, error: sevaError } = await supabase
      .from("seva_completed")
      .select("id")
      .eq("user_id", user_id);

    if (sevaError) throw sevaError;

    const sevaCompleted = sevaData.length;

    // 🔹 UPCOMING EVENTS
    const today = new Date().toISOString().split("T")[0];

    const { data: eventsData, error: eventsError } = await supabase
      .from("events")
      .select("*")
      .gte("date", today)
      .order("date", { ascending: true })
      .limit(5);

    if (eventsError) throw eventsError;

    return NextResponse.json({
      success: true,
      data: {
        totalOfferings,
        sevaCompleted,
        upcomingEvents: eventsData || [],
      },
    });

  } catch (err) {
    console.error("home-stats API error:", err);

    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}