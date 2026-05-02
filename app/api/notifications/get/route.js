import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { user_id } = await req.json();

    // 🔹 fetch notifications (global + user specific)
    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .or(`user_id.is.null,user_id.eq.${user_id}`)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      notifications: data,
    });

  } catch (err) {
    console.error("Fetch Notifications Error:", err);

    return NextResponse.json({
      success: false,
    });
  }
}