import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("donations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    // 🔥 FORMAT + FIELD ALIGNMENT
    const formattedData = data.map((d) => ({
      id: d.id,
      donor_name: d.donor_name,
      email: d.email,
      phone: d.phone,
      amount: d.amount,
      
      // 🔥 FIXED MAPPING
      seva_type: d.purpose || "-",  
      status: d.payment_id ? "success" : "pending",

      payment_id: d.payment_id,
      show_public: d.show_public,

      created_at: new Date(d.created_at).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    }));

    return NextResponse.json({
      success: true,
      donations: formattedData,
    });

  } catch (error) {
    console.error("Admin Donations API Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch donations" },
      { status: 500 }
    );
  }
}