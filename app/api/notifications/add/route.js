import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { user_email, title, message } = await req.json();

    // 🔹 validation
    if (!title || !message) {
      return NextResponse.json(
        { success: false, message: "Title & message required" },
        { status: 400 }
      );
    }

    let user_id = null;

    // 🔥 agar email diya hai → user_id find karo
    if (user_email) {
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("id")
        .eq("email", user_email)
        .maybeSingle();

      if (userError) throw userError;

      user_id = userData?.id || null;
    }

    // 🔹 insert notification
    const { error } = await supabase
      .from("notifications")
      .insert([
        {
          title,
          message,
          user_id, // null = sab users
          is_read: false,
          type: "general",
        },
      ]);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Notification added!",
    });

  } catch (err) {
    console.error("ADD NOTIFICATION ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: err.message,
      },
      { status: 500 }
    );
  }
}