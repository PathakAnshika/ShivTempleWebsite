import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/* =====================================
   GET ALL SCHOLARSHIP APPLICATIONS
   (Admin Dashboard Table)
===================================== */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("scholarships")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const formattedData = data.map((s) => ({
      ...s,

      created_at: new Date(s.created_at).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),

      paid_at: s.paid_at
        ? new Date(s.paid_at).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : null,
    }));

    return NextResponse.json({
      success: true,
      data: formattedData,
    });

  } catch (err) {
    console.error("Scholarship Fetch Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}

/* =====================================
   UPDATE STATUS
   approve / reject / paid
===================================== */
export async function POST(req) {
  try {
    const { id, status, amount } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        {
          success: false,
          message: "ID and status required",
        },
        { status: 400 }
      );
    }

    let updateData = {
      status,
      updated_at: new Date().toISOString(),
    };

    /* APPROVE */
    if (status === "approved") {
      if (!amount) {
        return NextResponse.json(
          {
            success: false,
            message: "Enter amount first",
          },
          { status: 400 }
        );
      }

      updateData.amount = amount;
    }

    /* PAID */
    if (status === "paid") {
      const { data: existing } = await supabase
        .from("scholarships")
        .select("amount")
        .eq("id", id)
        .maybeSingle();

      if (!existing?.amount) {
        return NextResponse.json(
          {
            success: false,
            message: "Approve with amount first",
          },
          { status: 400 }
        );
      }

      updateData.paid_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from("scholarships")
      .update(updateData)
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Updated successfully",
    });

  } catch (err) {
    console.error("Scholarship Update Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}