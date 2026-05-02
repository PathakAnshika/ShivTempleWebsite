import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      amount,
      message,
      show_public,
      payment_id
    } = body;

    // 🔹 validation (optional but good)
    if (!name || !amount) {
      return NextResponse.json(
        { success: false, message: "Name and amount required" },
        { status: 400 }
      );
    }

    // 🔹 insert into supabase
    const { data, error } = await supabase
      .from("donations")
      .insert([
        {
          donor_name: name,
          email,
          phone,
          amount,
          purpose: message,
          show_public: show_public ? true : false,
          payment_id,
        },
      ]);

    // ❌ error handle
    if (error) {
      console.error("Insert Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    // ✅ success
    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("Donation Save Error:", error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}