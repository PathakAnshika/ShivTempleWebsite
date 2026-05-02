import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken  = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export async function POST(req) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { success: false, message: "Phone number is required" },
        { status: 400 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 🔥 SMS SEND (same as before)
    await client.messages.create({
      body: `Your login OTP is ${otp}`,
      from: fromNumber,
      to: `+91${phone}`,
    });

    // 🔥 SAVE OTP IN SUPABASE
    const { error } = await supabase
      .from("otp")
      .insert([
        {
          phone,
          otp,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error("OTP Save Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (err) {
    console.error("send-otp error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send OTP",
        error: err.message,
      },
      { status: 500 }
    );
  }
}