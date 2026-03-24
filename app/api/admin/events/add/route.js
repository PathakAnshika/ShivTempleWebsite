import { NextResponse } from "next/server";
import { getDB } from "@/lib/db";

export async function POST(req) {
  try {
    const { title, date, location } = await req.json();
const handleAdd = async () => {
  if (!newEvent.name || !newEvent.date) return;

  await fetch("/api/admin/events/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: newEvent.name,
      date: newEvent.date,
      location: newEvent.location
    })
  });

  alert("Event Added ✅");

  setNewEvent({ name: "", date: "", location: "" });
};
    const db = getDB();

    await db.execute(
      "INSERT INTO events (title, date, location) VALUES (?, ?, ?)",
      [title, date, location]
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}