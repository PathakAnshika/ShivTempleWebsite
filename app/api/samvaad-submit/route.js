import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const location = formData.get("location");
    const category = formData.get("category");
    const title = formData.get("title");
    const description = formData.get("description");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const file = formData.get("file");

    let filePath = null;

    // file save
    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public/uploads");

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileName = Date.now() + "-" + file.name;
      filePath = `/uploads/${fileName}`;

      fs.writeFileSync(path.join(uploadDir, fileName), buffer);
    }

    const db = getDB();

    await db.execute(
      `INSERT INTO samvaad_submissions
      (name, location, category, title, description, file_path, phone, email)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, location, category, title, description, filePath, phone, email]
    );

    console.log("📥 New Samvaad Submission");
    console.table({ name, category, title, phone });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("ERROR:", error);
    return NextResponse.json({ success: false });
  }
}