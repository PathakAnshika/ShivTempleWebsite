
// example: app/api/test/route.js (temporary bana lo)
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("users").select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return NextResponse.json({ data, error });
}