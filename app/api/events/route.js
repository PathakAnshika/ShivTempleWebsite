import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    // 🔹 fetch events from supabase
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: false });

    // ❌ error handle
    if (error) {
      console.error("Fetch Events Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    // ✅ success response
    return NextResponse.json({
      success: true,
      events: data,
    });

  } catch (err) {
    console.error("Server Error:", err);

    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}