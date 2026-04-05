import { NextRequest, NextResponse } from "next/server";

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  attendance?: "hadir" | "tidak_hadir";
}

// In-memory store — shared across all clients, resets on server restart
const wishes: Wish[] = [];

export async function GET() {
  return NextResponse.json(wishes);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message, attendance } = body;

    if (!name || !name.trim() || !message || !message.trim()) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 });
    }

    const wish: Wish = {
      id: crypto.randomUUID(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      attendance,
    };

    wishes.push(wish);
    return NextResponse.json(wish, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
