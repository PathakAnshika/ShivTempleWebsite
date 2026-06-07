import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {

  try {

    const { user_id } =
      await req.json();

    // VALIDATION
    if (!user_id) {

      return NextResponse.json(
        {
          success: false,
          message: "User ID required",
        },
        { status: 400 }
      );
    }

    // FETCH USER APPLICATION
    const {
      data,
      error,
    } = await supabase
      .from("scholarships")
      .select("*")
      .eq("user_id", user_id)
      .maybeSingle();

    if (error) throw error;

    return NextResponse.json({

      success: true,

      application: data,
    });

  } catch (err) {

    console.error(
      "Scholarship Fetch Error:",
      err
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch scholarship",
      },
      { status: 500 }
    );
  }
}