import { getDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {

  try {

    const body = await req.json();

    const {
      name,
      email,
      phone,
      amount,
      message,
      show_public,
      payment_id
    } = body;

    const db = getDB();

    await db.execute(
      `INSERT INTO donations
      (donor_name,email,phone,amount,purpose,show_public,payment_id)
      VALUES (?,?,?,?,?,?,?)`,
      [
        name,
        email,
        phone,
        amount,
        message,
        show_public ? 1 : 0,
        payment_id
      ]
    );

    return NextResponse.json({ success: true });

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      success: false,
      error: error.message
    });

  }

}