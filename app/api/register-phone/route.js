import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {

  try {

    const body = await req.json();

    const {
      full_name,
      email,
      phone,
      password,
    } = body;

    console.log(body);

    if (!supabase) {

      return NextResponse.json(
        {
          error: "Supabase not configured",
        },
        { status: 500 }
      );
    }

    const { data, error } =
      await supabase
        .from("devotees")
        .insert([
          {
            full_name,
            email,
            phone,
            password,
            role: "devotee",
          },
        ])
        .select();

    console.log(data);
    console.log(error);

    if (error) {

      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      user: data[0],
    });

  } catch (err) {

    console.log(err);

    return NextResponse.json(
      {
        error: "Server Error",
      },
      { status: 500 }
    );
  }
}