import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { title, date, location } = await req.json();

    const { data, error } = await supabase
      .from("events")
      .insert([
        {
          title,
          date,
          location,
        },
      ]);

    if (error) throw error;

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Add Event Error:", err);

    return NextResponse.json(
      { success: false, message: "Failed to add event" },
      { status: 500 }
    );
  }
}