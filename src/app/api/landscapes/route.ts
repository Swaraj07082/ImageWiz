import { kv } from "@vercel/kv";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const landscapeData = await kv.get("landscape");
    if (landscapeData) {
      return NextResponse.json(landscapeData);
    } else {
      return NextResponse.json({ error: "landscape data not found" });
    }
  } catch (error) {
    console.error("Error retrieving landscape data:", error);
    return NextResponse.json({ error: "Failed to retrieve animals data" });
  }
};

export const POST = async () => {
  const landscape = [
    {
      name: "Landscape-1",
      url: "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg",
    },
    {
      name: "Landscape-2",
      url: "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png",
    },
    {
      name: "Landscape-3",
      url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?b=1&s=612x612&w=0&k=20&c=81f5HaMtoPNUrdfa4hnS8NcwEgD9tH2nnTUBu25Msug=",
    },
    {
      name: "Landscape-4",
      url: "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
    },
    {
      name: "Landscape-5",
      url: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg",
    },
    {
      name: "Landscape-6",
      url: "https://thumbs.dreamstime.com/b/tranquil-winter-landscape-snow-covered-mountains-vibrant-sunset-frozen-lake-generated-ai-tranquil-winter-landscape-snow-covered-306170337.jpg",
    },
    {
      name: "Landscape-7",
      url: "https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65ea99845e53084280471b71_most%20beautiful%20landscapes%20in%20the%20world.webp",
    },
    {
      name: "Landscape-8",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgu3VqDXPU6m8L-ERGKAy2VmGG4hNgz8b4HQ&s",
    },
  ];

  try {
    await kv.set("landscape", JSON.stringify(landscape));
    return NextResponse.json({ message: "landscape data stored successfully" });
  } catch (error) {
    console.error("Error storing landscape data:", error);
    return NextResponse.json({ error: "Failed to store landscape data" });
  }
};
