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
      .order("id", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (otpError) throw otpError;

    // ❌ OTP not found
    if (!otpData) {
      return NextResponse.json(
        { success: false, message: "OTP not found" },
        { status: 400 }
      );
    }

    // ❌ invalid OTP
    if (otpData.otp !== otp) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // ❌ expiry check
    if (new Date(otpData.expires_at) < new Date()) {
      return NextResponse.json(
        { success: false, message: "OTP expired" },
        { status: 400 }
      );
    }

    // 🔹 check if user already exists
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
            login_method: "phone",
            role: "user",
          },
        ])
        .select()
        .single();

      if (insertError) throw insertError;

      user = newUser;
    }

    // 🔒 safe user object
    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      created_at: user.created_at,
    };

    return NextResponse.json({
      success: true,
      message: "Account Created",
      user: safeUser,
    });

  } catch (err) {
    console.error("verify-otp-signup error:", err);

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