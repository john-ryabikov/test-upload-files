import { NextResponse } from "next/server";
import fs from "fs/promises"
import { join } from "path"

export const dynamic = 'force-dynamic';

export async function GET (req) {

    const path = join(process.cwd(), 'public/main')
    const images = await fs.readdir(path)

    if (!images) return NextResponse.json({ message: "Нет изображений"})
        
    return NextResponse.json(images)
}