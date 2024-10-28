import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || "";


    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive', // у Vercel отмена регистра не работает с кирилицей
            },

        },

        take: 5,

    })

    return NextResponse.json(products);

}