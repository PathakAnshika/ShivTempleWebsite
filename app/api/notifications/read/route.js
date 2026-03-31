export async function POST(req) {
  const { id } = await req.json();
  const db = getDB();

  await db.execute(
    "UPDATE notifications SET is_read = 1 WHERE id = ?",
    [id]
  );

  return NextResponse.json({ success: true });
}