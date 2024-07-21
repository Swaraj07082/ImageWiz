import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  console.log(req.url);

  const uid = req.url.slice(39);
  console.log(uid);

  const userData = await kv.get(`user:${uid}`);

  console.log(userData);

  return new NextResponse(JSON.stringify({ userData }));
};

export const POST = async (req: NextRequest | Request) => {
  const { uid, images_created } = await req.json();
  // const uid = req.url.slice(39);
  // console.log(uid);

  // console.log(body);

  console.log(images_created);
  const userData = await kv.get(`user:${uid}`);
  const { UserName, userId }: any = userData;
  const updatedData = {
    UserName,
    userId: uid,
    // generationHistory,
    images_created: images_created,
  };
  await kv.set(`user:${uid}`, updatedData);

  console.log(updatedData);
  return new NextResponse("Data updated successfully", { status: 200 });
};
