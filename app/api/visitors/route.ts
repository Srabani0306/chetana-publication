import { NextResponse } from "next/server";
import { getTotal, incrementTotal } from "../../lib-db";

const noStore = { headers: { "Cache-Control": "no-store" } };

export async function GET() {
  try {
    return NextResponse.json({ total: await getTotal() }, noStore);
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
}

// Counts one visit. The client calls this once per browser session.
export async function POST() {
  try {
    return NextResponse.json({ total: await incrementTotal() }, noStore);
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
}
