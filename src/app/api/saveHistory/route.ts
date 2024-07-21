import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest | Request) => {
  const body = await req.json();
  const { UserName, userId, generationHistory, images_created } = body;

  try {
    const key = `user:${userId}`;

    await kv.set(key, {
      UserName,
      userId,
      generationHistory,
      images_created,
    });

    return NextResponse.json({ message: "History saved successfully" });
  } catch (error) {
    console.error("Error saving history:", error);
    return NextResponse.json({ message: "Error saving history" });
  }
};
