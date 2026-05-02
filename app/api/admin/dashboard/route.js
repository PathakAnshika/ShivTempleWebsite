import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    // 🔹 TOTAL DONATION
    const { data: donationData, error: donationError } = await supabase
      .from("donations")
      .select("amount");

    // 🔹 TOTAL USERS
    const { data: usersData, error: usersError } = await supabase
      .from("users")
      .select("id");

    // 🔹 TODAY DONATION
    const todayDate = new Date().toISOString().split("T")[0];

    const { data: todayData, error: todayError } = await supabase
      .from("donations")
      .select("amount, created_at")
      .gte("created_at", `${todayDate}T00:00:00`)
      .lte("created_at", `${todayDate}T23:59:59`);

    if (donationError || usersError || todayError) {
      throw donationError || usersError || todayError;
    }

    // 🔥 CALCULATIONS (manual)
    const totalDonation = donationData.reduce(
      (sum, d) => sum + (d.amount || 0),
      0
    );

    const totalUsers = usersData.length;

    const todayDonation = todayData.reduce(
      (sum, d) => sum + (d.amount || 0),
      0
    );

    return NextResponse.json({
      success: true,
      data: {
        totalDonation,
        totalUsers,
        todayDonation,
      },
    });

  } catch (err) {
    console.error("Admin dashboard error:", err);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}