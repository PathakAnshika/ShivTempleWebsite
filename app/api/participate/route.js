import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  console.log("\n🔥 API HIT SUCCESSFULLY 🔥");

  try {
    const body = await req.json();

    console.log("📥 Received Data:");
    console.log(body);

    const { name, age, category, school, phone, email, message } = body;

    // 🔹 validation (optional but recommended)
    if (!name || !age || !category || !school || !phone || !email) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // 🔹 insert into supabase
    const { data, error } = await supabase
      .from("vidha_participants")
      .insert([
        {
          name,
          age,
          category,
          school,
          phone,
          email,
          message,
        },
      ]);

    // ❌ error handle
    if (error) {
      console.error("❌ Insert Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    console.log("✅ Data inserted into Supabase\n");

    // ✅ success response
    return NextResponse.json({
      success: true,
      message: "Participant added successfully",
      data,
    });

  } catch (error) {
    console.error("❌ SERVER ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}