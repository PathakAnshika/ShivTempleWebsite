import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // 🔹 validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔹 check existing user
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (checkError) throw checkError;

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    // 🔹 insert user
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password, // ⚠️ plain for now (later hash karenge)
          role: "user",
        },
      ]);

    if (error) {
      console.error("Insert Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "User registered successfully", data },
      { status: 201 }
    );

  } catch (error) {
    console.error("Register Error:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}