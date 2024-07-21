import { kv } from "@vercel/kv";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const foodData = await kv.get("food");
    if (foodData) {
      return NextResponse.json(foodData);
    } else {
      return NextResponse.json({ error: "food data not found" });
    }
  } catch (error) {
    console.error("Error retrieving food data:", error);
    return NextResponse.json({ error: "Failed to retrieve animals data" });
  }
};

export const POST = async () => {
  const food = [
    {
      name: "Burger",
      url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
    {
      name: "Pancakes",
      url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-122861-376464.jpg&fm=jpg",
    },
    {
      name: "Cheese Corn Dog",
      url: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505",
    },
    {
      name: "Sphagetti",
      url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/21/0/fnd_pasta-istock.jpg.rend.hgtvcom.1280.720.suffix/1490188710731.jpeg",
    },
    {
      name: "Fried Chicken ",
      url: "https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg",
    },
    {
      name: "Red Sauce Pasta",
      url: "https://img.freepik.com/free-photo/bowl-pasta-with-chicken-breast-tomato-sauce_1340-25533.jpg",
    },
    {
      name: "Pizza",
      url: "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1280,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
    },
    {
      name: "Pani Puri",
      url: "https://www.foodandwine.com/thmb/nf6PnOESqq7ZAbs0k0kTq3QtW4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pani-Puri-FT-RECIPE1123-3702b6eb08c2478fb3a2343821aef71e.jpg",
    },
  ];

  try {
    await kv.set("food", JSON.stringify(food));
    return NextResponse.json({ message: "food data stored successfully" });
  } catch (error) {
    console.error("Error storing food data:", error);
    return NextResponse.json({ error: "Failed to store food data" });
  }
};
