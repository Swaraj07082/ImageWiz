import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest | Request) => {
  const body = await req.json();
  const { UserName, userId, generationHistory } = body;
  console.log(UserName, userId, generationHistory);
};
