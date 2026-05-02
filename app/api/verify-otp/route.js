import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { phone, otp } = await req.json();

    // 🔹 validation
    if (!phone || !otp) {
      return NextResponse.json(
        { success: false, message: "Phone and OTP required" },
        { status: 400 }
      );
    }

    // 🔹 latest OTP fetch
    const { data: otpData, error: otpError } = await supabase
      .from("otp")
      .select("*")
      .eq("phone", phone)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (otpError) throw otpError;

    // ❌ invalid OTP
    if (!otpData || otpData.otp !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired OTP" },
        { status: 401 }
      );
    }

    // 🔹 OPTIONAL: expiry check (5 min)
    const createdAt = new Date(otpData.created_at);
    const now = new Date();
    const diff = (now - createdAt) / 1000; // seconds

    if (diff > 300) {
      return NextResponse.json(
        { success: false, message: "OTP expired" },
        { status: 401 }
      );
    }

    // 🔹 check user exists
    const { data: existingUser, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("phone", phone)
      .maybeSingle();

    if (userError) throw userError;

    let user = existingUser;

    // 🔥 create user if not exists
    if (!user) {
      const { data: newUser, error: insertError } = await supabase
        .from("users")
        .insert([
          {
            phone,
            login_method: "otp",
            role: "user",
          },
        ])
        .select()
        .single();

      if (insertError) throw insertError;

      user = newUser;
    }

    // 🔒 safe user
    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      created_at: user.created_at,
    };

    return NextResponse.json({
      success: true,
      message: "OTP verified",
      user: safeUser,
    });

  } catch (err) {
    console.error("verify-otp error:", err);

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