import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { id } = await req.json();

    const { error } = await supabase
      .from("events")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Delete Event Error:", err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}