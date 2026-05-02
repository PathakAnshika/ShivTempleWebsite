import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    // 🔹 Fetch users
    const { data: users, error: userError } = await supabase
      .from("users")
      .select("*")
      .order("created_at", { ascending: false });

    if (userError) throw userError;

    // 🔹 Fetch donations
    const { data: donations, error: donationError } = await supabase
      .from("donations")
      .select("email, amount");

    if (donationError) throw donationError;

    // 🔹 Merge donation totals
    const formattedUsers = users.map((u) => {
      const totalDonation = donations
        .filter((d) => d.email === u.email)
        .reduce((sum, d) => sum + Number(d.amount || 0), 0);

      return {
        ...u,

        total_donation: totalDonation,

        created_at: new Date(u.created_at).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      };
    });

    return NextResponse.json({
      success: true,
      users: formattedUsers,
    });

  } catch (error) {
    console.error("Admin Users API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch users",
      },
      { status: 500 }
    );
  }
}