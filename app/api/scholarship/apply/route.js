import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      dob,
      gender,
      address,
      city,
      state,
      pincode,

      course,
      college,
      year,
      marks,

      income,
      fatherOccupation,
      motherOccupation,
      dependents,
      feeAmount,

      bankName,
      accountNumber,
      ifsc,
      reason,
    } = body;

    /* =====================================
       VALIDATION
    ===================================== */
    if (!name || !email || !phone || !course || !college) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        { status: 400 }
      );
    }

    /* =====================================
       APPLICATION ID GENERATE
    ===================================== */
    const applicationId =
      "SCH-" +
      new Date().getFullYear() +
      "-" +
      Math.floor(1000 + Math.random() * 9000);

    /* =====================================
       INSERT INTO SUPABASE
    ===================================== */
    const { data, error } = await supabase
      .from("scholarships")
      .insert([
        {
          application_id: applicationId,

          name,
          email,
          phone,
          dob,
          gender,
          address,
          city,
          state,
          pincode,

          course,
          college,
          current_year: year,
          marks,

          income,
          father_occupation: fatherOccupation,
          mother_occupation: motherOccupation,
          dependents,
          fee_amount: feeAmount,

          bank_name: bankName,
          account_number: accountNumber,
          ifsc,

          reason,

          status: "pending",
          amount: 0,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    /* =====================================
       RESPONSE
    ===================================== */
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      application: data,
    });

  } catch (err) {
    console.error("Scholarship Apply Error:", err);

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}