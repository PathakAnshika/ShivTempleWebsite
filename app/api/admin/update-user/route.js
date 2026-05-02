import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { user_id, role, status } = await req.json();

    // 🔥 dynamic update object
    const updateData = {};

    if (role) updateData.role = role;
    if (status) updateData.status = status;

    const { data, error } = await supabase
      .from("users")
      .update(updateData)
      .eq("id", user_id);

    // ❌ error handle
    if (error) {
      console.error("User Update Error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
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

    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
}