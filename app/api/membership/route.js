import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const body = await req.json();
    const { user_id, full_name, email, phone, membership_type } = body;

    // 🔹 validation
    if (!user_id || !full_name || !email || !phone || !membership_type) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔹 check if already member
    const { data: existing, error: checkError } = await supabase
      .from("membership")
      .select("id")
      .eq("user_id", user_id)
      .maybeSingle();

    if (checkError) throw checkError;

    if (existing) {
      return NextResponse.json(
        { success: false, message: "User is already a member" },
        { status: 409 }
      );
    }

    // 🔹 insert membership
    const { error: insertError } = await supabase
      .from("membership")
      .insert([
        {
          user_id,
          full_name,
          email,
          phone,
          membership_type,
        },
      ]);

    if (insertError) throw insertError;

    // ✅ success
    return NextResponse.json(
      { success: true, message: "Membership created successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Membership API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}