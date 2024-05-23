import { NextResponse } from "next/server";
import { put } from '@vercel/blob';

// export const dynamic = 'force-dynamic';

export async function POST(req) {

    const { searchParams } = new URL(req.url);

    const filename = searchParams.get('filename');

    const blob = await put(filename, req.body, {
        access: 'public',
      });

    return NextResponse.json(blob)
}
