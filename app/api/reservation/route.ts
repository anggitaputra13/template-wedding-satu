import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwHEalrK3K_nVb22l4p4FsrKCqzPK12KVFWGhsAtUuJnt9lwhbPoeRmlG2nJF3tA_s5/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, jumlahTamu, attendance } = body;

    if (!name || !jumlahTamu || !attendance) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama: name,
        jumlahTamu: jumlahTamu,
        status: attendance === "hadir" ? "Hadir" : "Tidak Hadir",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save to Google Sheet");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "Failed to save reservation" },
      { status: 500 }
    );
  }
}
