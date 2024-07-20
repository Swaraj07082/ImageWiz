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
  const body = await req.json();
  const uid = req.url.slice(39);
  console.log(uid);

  console.log(body);
};
