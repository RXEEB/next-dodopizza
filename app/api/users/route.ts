import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      verified: new Date(),
    },
  });
  return NextResponse.json(user);
}
