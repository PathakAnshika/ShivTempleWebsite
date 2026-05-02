import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    // 🔹 safe JSON parsing
    let body = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const { email } = body;

    // 🔹 validation
    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email missing in request" },
        { status: 400 }
      );
    }

    // 🔹 USER FETCH
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("id, name, email, created_at")
      .eq("email", email)
      .single();

    if (userError || !userData) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    const user = { ...userData };

    // 🔹 MEMBERSHIP CHECK
    const { data: memberData, error: memberError } = await supabase
      .from("membership")
      .select("full_name, email, phone, membership_type, created_at")
      .eq("email", email)
      .maybeSingle(); // 👈 better than single()

    if (memberData) {
      user.is_member = true;
      user.membership_type = memberData.membership_type;
      user.membership_date = memberData.created_at;
      user.phone = memberData.phone;
    } else {
      user.is_member = false;
    }

    // ✅ success response
    return NextResponse.json(
      { success: true, user },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching user data:", error);

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