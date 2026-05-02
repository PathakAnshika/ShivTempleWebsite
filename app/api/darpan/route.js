import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("donations")
      .select("donor_name, amount, purpose, show_public, created_at")
      .order("created_at", { ascending: false });

    if (error) throw error;

    // 🔥 CASE WHEN logic (JS me handle)
    const formatted = data.map((d) => ({
      name: d.show_public ? d.donor_name : "Anonymous Donor",
      amount: d.amount,
      purpose: d.purpose,
    }));

    return NextResponse.json(formatted);

  } catch (error) {
    console.error("Public Donations Error:", error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}