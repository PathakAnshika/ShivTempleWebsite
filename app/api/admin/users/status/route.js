import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { userId, status } = await req.json();

    const { data, error } = await supabase
      .from("users")
      .update({ status })
      .eq("id", userId);

    // ❌ error handle
    if (error) {
      console.error("Update Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    // ✅ success
    return NextResponse.json({
      success: true,
      message: "Status updated",
      data,
    });

  } catch (err) {
    console.error("Status update error:", err);

    return NextResponse.json(
      { success: false, message: "Error updating status" },
      { status: 500 }
    );
  }
}