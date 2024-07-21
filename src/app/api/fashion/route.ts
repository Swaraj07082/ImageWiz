import { kv } from "@vercel/kv";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const fashionData = await kv.get("fashion");
    if (fashionData) {
      return NextResponse.json(fashionData);
    } else {
      return NextResponse.json({ error: "fashion data not found" });
    }
  } catch (error) {
    console.error("Error retrieving fashion data:", error);
    return NextResponse.json({ error: "Failed to retrieve animals data" });
  }
};

export const POST = async () => {
  const fashion = [
    {
      name: "Outfit1",
      url: "https://hips.hearstapps.com/hmg-prod/images/fashion-week-guest-wearing-a-black-leather-coat-and-a-green-news-photo-1672741522.jpg?resize=980:*",
    },
    {
      name: "Outfit2",
      url: "https://assets.vogue.com/photos/62fd6677607a5ee5e5b17a1e/4:3/w_1420,h_1065,c_limit/copenhagen-fashion-week-ss23-str4.jpeg",
    },
    {
      name: "Outfit3",
      url: "https://i.insider.com/5e349266ab49fd1dbb62c846?width=800&format=jpeg&auto=webp",
    },
    {
      name: "Outfit4",
      url: "https://www.hindustantimes.com/ht-img/img/2023/09/29/550x309/paris-fashion-week-undercover-collection-viral_1695973181541_1695973211239.jpg",
    },
    {
      name: "Outfit5",
      url: "https://media.cnn.com/api/v1/images/stellar/prod/petal-and-pup-spring-dresses-lead.jpg?c=16x9&q=h_833,w_1480,c_fill",
    },
    {
      name: "Outfit6",
      url: "https://static01.nyt.com/images/2024/05/17/t-magazine/17tmag-flowerfashion-slide-PMC7-copy/17tmag-flowerfashion-slide-PMC7-copy-threeByTwoMediumAt2X.jpg?auto=webp",
    },
    {
      name: "Outfit7",
      url: "https://s.france24.com/media/display/89b00220-094f-11ef-95f8-005056bf30b7/w:980/p:16x9/capture-4212782786634e3fc9f37c1.09267544.jpg",
    },
    {
      name: "Outfit8",
      url: "https://focus.belfasttelegraph.co.uk/thumbor/8lEgAkQspHReJoutEjk_6mz033U=/0x16:3000x1670/960x640/prod-mh-ireland/faa45d4c-9749-11ed-8314-0210609a3fe2",
    },
  ];

  try {
    await kv.set("fashion", JSON.stringify(fashion));
    return NextResponse.json({ message: "fashion data stored successfully" });
  } catch (error) {
    console.error("Error storing fashion data:", error);
    return NextResponse.json({ error: "Failed to store fashion data" });
  }
};
