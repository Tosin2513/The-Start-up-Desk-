import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Cast DB as any to prevent TypeScript errors on D1 methods
  // @ts-ignore
  const db: any = process.env.DB; 

  try {
    const { results } = await db.prepare(
      "SELECT * FROM comments WHERE post_slug = ? ORDER BY created_at DESC"
    ).bind(slug).all();

    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { author, body } = await req.json();
  
  // @ts-ignore
  const db: any = process.env.DB;

  if (!author || !body) {
    return NextResponse.json({ error: "Name and comment are required" }, { status: 400 });
  }

  try {
    await db.prepare(
      "INSERT INTO comments (post_slug, author, body) VALUES (?, ?, ?)"
    ).bind(slug, author, body).run();

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to post comment" }, { status: 500 });
  }
}