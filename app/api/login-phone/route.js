import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {

  try {

    const body = await req.json();

    const {
      phone,
      password,
    } = body;

    // GET USER BY PHONE
    const { data, error } =
      await supabase
        .from("devotees")
        .select("*")
        .eq("phone", phone.trim())
        .single();

    console.log(data);
    console.log(error);

    // USER NOT FOUND
    if (error || !data) {

      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 401 }
      );
    }

    // PASSWORD CHECK
    if (data.password !== password) {

      return NextResponse.json(
        {
          error: "Wrong password",
        },
        { status: 401 }
      );
    }

    // SUCCESS
    return NextResponse.json({
      success: true,
      user: data,
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