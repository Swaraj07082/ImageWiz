import { kv } from "@vercel/kv";

import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const animeData = await kv.get("anime");
    if (animeData) {
      // return NextResponse.json(JSON.parse(animalsData as string));
      return NextResponse.json(animeData);
    } else {
      return NextResponse.json({ error: "Animals data not found" });
      // return new NextResponse( message : {})
    }
  } catch (error) {
    console.error("Error retrieving animals data:", error);
    return NextResponse.json({ error: "Failed to retrieve animals data" });
  }
};

export const POST = async () => {
  const anime = [
    {
      name: "gojo",
      url: "https://i.pinimg.com/736x/98/58/74/9858745cd157f2797065e639c5b3bf23.jpg",
    },
    {
      name: "goku",
      url: "https://wallpapers.com/images/hd/goku-cool-anime-6kbwj9794wpnsfr1.jpg",
    },
    {
      name: "yuji",
      url: "https://cdn.vox-cdn.com/thumbor/UixJG8lZQVN9qI6pBcxprYOsWeA=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68876614/26355890.6.jpeg",
    },
    {
      name: "naruto",
      url: "https://pngfre.com/wp-content/uploads/anime-poster.png",
    },
    {
      name: "horimiya",
      url: "https://img.wattpad.com/7e714a038ad5e79cdd563cdca840a8fee04f9884/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f71537265397a41493973717075773d3d2d313130303835383133332e313639323338356636643036383064393838333137363235343338312e6a7067?s=fit&w=720&h=720",
    },
    {
      name: "Light Yagami",
      url: "https://assets-prd.ignimgs.com/2022/09/22/deathnote-1663870021590.jpg",
    },
    {
      name: "kaneki",
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/16925.jpg",
    },
    {
      name: "Monkey D. Luffy",
      url: "https://cdn.vox-cdn.com/thumbor/Eh75NnEzIcm_8RZ0xkWl5LwLFYI=/0x0:1920x960/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/25132508/one_piece_luffy_new_season.jpg",
    },
  ];

  try {
    await kv.set("anime", JSON.stringify(anime));
    return NextResponse.json({ message: "anime data stored successfully" });
  } catch (error) {
    console.error("Error storing anime data:", error);
    return NextResponse.json({ error: "Failed to store anime data" });
  }
};
