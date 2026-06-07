import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {

  try {

    // GET BODY
    const body = await req.json();

    const {
      email,
      password,
    } = body;

    // VALIDATION
    if (!email || !password) {

      return NextResponse.json(
        {
          success: false,
          message: "Email and password required",
        },
        { status: 400 }
      );
    }

    // FIND USER
    const { data: user, error } =
      await supabase
        .from("devotees")
        .select("*")
        .eq("email", email)
        .maybeSingle();

    console.log("USER:", user);
    console.log("ERROR:", error);

    // DATABASE ERROR
    if (error) {

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    // USER NOT FOUND
    if (!user) {

      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    // PASSWORD CHECK
    if (user.password !== password) {

      return NextResponse.json(
        {
          success: false,
          message: "Incorrect password",
        },
        { status: 401 }
      );
    }

    // SAFE USER
    const safeUser = {

      id: user.id,

      name: user.full_name,

      email: user.email,

      phone: user.phone,

      role: user.role,

      created_at: user.created_at,
    };

    console.log("SAFE USER:", safeUser);

    // SUCCESS
    return NextResponse.json({

      success: true,

      message: "Login successful",

      user: safeUser,
    });

  } catch (err) {

    console.error("LOGIN ERROR:", err);

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