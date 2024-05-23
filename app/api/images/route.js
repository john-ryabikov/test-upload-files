import { NextResponse } from "next/server";
import { list } from "@vercel/blob"

export const dynamic = 'force-dynamic';

export async function GET (req) {

    const { blobs } = await list()
        
    return NextResponse.json(blobs)
}