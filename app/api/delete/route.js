import { NextResponse } from "next/server";
import { del } from "@vercel/blob";

export async function DELETE(req) {

    const url = await req.json()

    await del(url.url)

    return NextResponse.json({message: "Удалено"})

}