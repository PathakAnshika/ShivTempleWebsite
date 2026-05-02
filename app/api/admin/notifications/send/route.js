import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    // 🔹 request body
    const { title, message, type, user_id } = await req.json();

    // 🔹 insert into supabase
    const { data, error } = await supabase
      .from("notifications")
      .insert([
        {
          title,
          message,
          type,
          user_id: user_id || null, // null = all users
          is_read: false,
        },
      ]);

    // 🔹 error handle
    if (error) {
      console.error("Insert Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    // 🔹 success
    return NextResponse.json({
      success: true,
      data,
    });

  } catch (err) {
    console.error("Notification API Error:", err);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}