import { NextResponse } from "next/server";
import fs from "fs/promises"
import { join } from "path"

// export const dynamic = 'force-dynamic';

export async function POST(req) {

    const data = await req.formData()
    const file = data.get("file")

    if(!file) return

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = join(process.cwd(), 'public/main', file.name)
    await fs.writeFile(path, buffer)

    // return NextResponse.redirect(new URL('/', req.url))

    return NextResponse.json("Файл загружен")
}
