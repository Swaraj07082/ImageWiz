import { kv } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from "next";

// Handler to retrieve animals data
const getAnimals = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const animalsData = await kv.get("animals");
    if (animalsData) {
      res.status(200).json(JSON.parse(animalsData as string));
    } else {
      res.status(404).json({ error: "Animals data not found" });
    }
  } catch (error) {
    console.error("Error retrieving animals data:", error);
    res.status(500).json({ error: "Failed to retrieve animals data" });
  }
};

// Handler to store animals data
const postAnimals = async (req: NextApiRequest, res: NextApiResponse) => {
  const animals = [
    {
      name: "pig",
      url: "https://awionline.org/sites/default/files/inline-images/help_farm_animals_9369131275_d78c8ff466_o.jpg",
    },
    {
      name: "owl",
      url: "https://static.toiimg.com/thumb/msid-104333708,width-748,height-499,resizemode=4,imgsize-47148/.jpg",
    },
    {
      name: "cheetah",
      url: "https://www.bornfree.org.uk/wp-content/uploads/2023/09/Cheetah-wildlife-hero.jpg",
    },
    {
      name: "turtle",
      url: "https://www.zoodemagnetichillzoo.ca/sites/default/files/styles/647x490/public/2022-10/box%20turtle%20website%20647X490_1.png?itok=aKxz8h35",
    },
    {
      name: "giraffe",
      url: "https://hips.hearstapps.com/hmg-prod/images/headshot-of-giraffe-sabi-sands-game-reserve-royalty-free-image-1573571360.jpg?crop=1.00xw:0.334xh;0,0.106xh&resize=640:*",
    },
    {
      name: "tiger",
      url: "https://images.all-free-download.com/images/thumbjpg/wild_animal_picture_relaxing_tiger_6934816.jpg",
    },
    {
      name: "cat",
      url: "https://images.theconversation.com/files/606098/original/file-20240710-17-g21785.jpg?ixlib=rb-4.1.0&rect=0%2C15%2C2637%2C1318&q=45&auto=format&w=668&h=324&fit=crop",
    },
    {
      name: "polar bear",
      url: "https://www.calgaryzoo.com/wp-content/uploads/2023/09/Daughter.YYC_.Zoo_.P.Bears_.01090.1.FF16-1024x768.jpg",
    },
  ];

  try {
    await kv.set("animals", JSON.stringify(animals));
    res.status(200).json({ message: "Animals data stored successfully" });
  } catch (error) {
    console.error("Error storing animals data:", error);
    res.status(500).json({ error: "Failed to store animals data" });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    await getAnimals(req, res);
  } else if (req.method === 'POST') {
    await postAnimals(req, res);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
