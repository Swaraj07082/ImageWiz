import { kv } from "@vercel/kv";

import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const carsData = await kv.get("cars");
    if (carsData) {
      // return NextResponse.json(JSON.parse(animalsData as string));
      return NextResponse.json(carsData);
    } else {
      return NextResponse.json({ error: "cars data not found" });
      // return new NextResponse( message : {})
    }
  } catch (error) {
    console.error("Error retrieving cars data:", error);
    return NextResponse.json({ error: "Failed to retrieve animals data" });
  }
};

export const POST = async () => {
  const cars = [
    {
      name: "car1",
      url: "https://www.topgear.com/sites/default/files/2021/12/8.%20Lotus%20Evija.jpeg",
    },
    {
      name: "car2",
      url: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?cs=srgb&dl=pexels-adrian-dorobantu-989175-2127733.jpg&fm=jpg",
    },
    {
      name: "car3",
      url: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/04/new-project-10.jpg",
    },
    {
      name: "car4",
      url: "https://pyxis.nymag.com/v1/imgs/df3/2f4/964355023c8621887c37e1fcc3c1dc3aa9-koeniggsegg-one1.2x.h473.w710.jpg",
    },
    {
      name: "car5",
      url: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/01/2020-bugatti-chiron-super-sport-300-via-bugatti.jpeg",
    },
    {
      name: "car6",
      url: "https://www.team-bhp.com/forum/attachments/super-cars-imports-india/1872243d1556514418-modern-supercars-ugly-senna2.jpg",
    },
    {
      name: "car7",
      url: "https://media.gq-magazine.co.uk/photos/60829ee9e13771722f6d9c58/master/pass/23042021_Car_HP01.jpg",
    },
    {
      name: "car8",
      url: "https://lh5.googleusercontent.com/G-8tM2TAYx0RLjyv696jmYezGwdlX7SFy7HWiDLT4UOCnbaRLQnxWy5BwlVcG_1uL_fn71Th7YiSHYD5-ldBFmnKbbtYxOenVm_G1a5D8kMTl9qdopw6Gntwr57cDo6jlJiTaXofWaY6G-poDbUgmQ0",
    },
  ];

  try {
    await kv.set("cars", JSON.stringify(cars));
    return NextResponse.json({ message: "cars data stored successfully" });
  } catch (error) {
    console.error("Error storing cars data:", error);
    return NextResponse.json({ error: "Failed to store cars data" });
  }
};
