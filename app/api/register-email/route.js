import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // 🔹 validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    // 🔹 check if email already exists
    const { data: exist, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (checkError) {
      console.error("Check Error:", checkError);
      return NextResponse.json(
        { success: false, message: checkError.message },
        { status: 500 }
      );
    }

    if (exist) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 400 }
      );
    }

    // 🔹 insert user
    const { data, error: insertError } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password, // ⚠️ plain password (later hashing karenge)
          login_method: "email",
          role: "user",
        },
      ]);

    if (insertError) {
      console.error("Insert Error:", insertError);
      return NextResponse.json(
        { success: false, message: insertError.message },
        { status: 500 }
      );
    }

    // ✅ success response
    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        data,
      },
      { status: 201 }
    );

  } catch (err) {
    console.error("register-email error:", err);

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