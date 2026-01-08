// app/api/send-otp/route.js
import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";
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

    // ✅ SMS bhejo
    await client.messages.create({
      body: `Your login OTP is ${otp}`,
      from: fromNumber,
      to: `+91${phone}`, // India assume
    });

    // ✅ OTP ko temporary memory me nahi, Redis ya DB me rakhna ideal hai.
    // Simple demo: ek separate table "otp_logins" use karo.

    const db = await getDB();
    await db.execute(
      `INSERT INTO otp_logins (phone, otp, created_at)
       VALUES (?, ?, NOW())`,
      [phone, otp]
    );

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (err) {
    console.error("send-otp error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send OTP", error: err.message },
      { status: 500 }
    );
  }
}
