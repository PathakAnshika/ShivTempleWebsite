import { getDB } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("\n🔥 API HIT SUCCESSFULLY 🔥");

  try {
    const body = await req.json();

    console.log("📥 Received Data:");
    console.table(body);

    const { name, age, category, school, phone, email, message } = body;

    const pool = getDB();   // ✅ get pool

    const sql = `
      INSERT INTO vidha_participants
      (name, age, category, school, phone, email, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.execute(sql, [
      name,
      age,
      category,
      school,
      phone,
      email,
      message,
    ]);

    console.log("✅ Data inserted into MySQL\n");

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ ERROR:", error);
    return NextResponse.json({ success: false });
  }
}