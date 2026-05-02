import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/* =====================================
   GET SETTINGS
===================================== */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .eq("id", 1)
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      settings: data,
    });

  } catch (err) {
    console.error("GET Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}

/* =====================================
   SAVE SETTINGS
===================================== */
export async function POST(req) {
  try {
    const body = await req.json();

    const { error } = await supabase
      .from("settings")
      .update({
        temple_name: body.templeName,
        email: body.email,
        phone: body.phone,
        donation_enabled: body.donationEnabled,
        notifications_enabled: body.notificationsEnabled,
        dark_mode: body.darkMode,
        theme: body.theme,
        footer_text: body.footerText,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Settings saved successfully",
    });

  } catch (err) {
    console.error("POST Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}