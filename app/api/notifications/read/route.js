import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { id } = await req.json();

    const { data, error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("id", id);

    // ❌ error handle
    if (error) {
      console.error("Mark Read Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    // ✅ success
    return NextResponse.json({
      success: true,
      data,
    });

  } catch (err) {
    console.error("Server Error:", err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}