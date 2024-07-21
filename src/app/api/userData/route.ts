import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const uid = req.url.slice(39);

  const userData = await kv.get(`user:${uid}`);

  return new NextResponse(JSON.stringify({ userData }));
};

export const POST = async (req: NextRequest | Request) => {
  const { uid, images_created } = await req.json();

  const userData = await kv.get(`user:${uid}`);
  const { UserName, userId }: any = userData;
  const updatedData = {
    UserName,
    userId: uid,

    images_created: images_created,
  };
  await kv.set(`user:${uid}`, updatedData);

  return new NextResponse("Data updated successfully", { status: 200 });
};
