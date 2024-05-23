import { NextResponse } from "next/server";

export async function DELETE(req) {

    return NextResponse.json({message: "Удаление"})

}