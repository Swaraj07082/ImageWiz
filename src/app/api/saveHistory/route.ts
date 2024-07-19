import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest | Request) => {
  const body = await req.json();
  const { UserName, userId, generationHistory } = body;
  console.log(UserName, userId, generationHistory);

  try {
    const key = `user:${userId}:history:${generationHistory.timestamp}`;
    console.log(key);

    await kv.set(key, {
      UserName,
      userId,
      generationHistory,
    });

    return NextResponse.json({ message: "History saved successfully" });
  } catch (error) {
    console.error("Error saving history:", error);
    return NextResponse.json({ message: "Error saving history" });
  }
};
