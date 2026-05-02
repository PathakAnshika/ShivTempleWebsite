import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

    // 🔥 FILE UPLOAD (Supabase Storage)
    if (file && file.name) {
      const fileName = `${Date.now()}-${file.name}`;

      const { data, error } = await supabase.storage
        .from("uploads") // 👈 bucket name (create in supabase)
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;

      // 🔗 public URL
      const { data: publicUrl } = supabase.storage
        .from("uploads")
        .getPublicUrl(fileName);

      filePath = publicUrl.publicUrl;
    }

    // 🔹 insert into DB
    const { error: insertError } = await supabase
      .from("samvaad_submissions")
      .insert([
        {
          name,
          location,
          category,
          title,
          description,
          file_path: filePath,
          phone,
          email,
        },
      ]);

    if (insertError) throw insertError;

    console.log("📥 New Samvaad Submission");
    console.table({ name, category, title, phone });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("ERROR:", error);

    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}