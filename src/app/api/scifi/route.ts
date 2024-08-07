import { kv } from "@vercel/kv";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const scifiData = await kv.get("scifi");
    if (scifiData) {
      return NextResponse.json(scifiData);
    } else {
      return NextResponse.json({ error: "scifi data not found" });
    }
  } catch (error) {
    console.error("Error retrieving scifi data:", error);
    return NextResponse.json({ error: "Failed to retrieve animals data" });
  }
};

export const POST = async () => {
  const scifi = [
    {
      name: "Sci-Fi1",
      url: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8466f4d7-b3bb-430b-96ef-34bf3c5521ea_716x716.jpeg",
    },
    {
      name: "Sci-Fi2",
      url: "https://as2.ftcdn.net/v2/jpg/05/39/32/41/1000_F_539324131_8dakjd8Tcp2PBxvwfXx0AEQL0obySYtd.jpg",
    },
    {
      name: "Sci-Fi3",
      url: "data:image/jpeg;base64,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",
    },
    {
      name: "Sci-Fi4",
      url: "https://img.freepik.com/free-photo/city-with-planet-middle_188544-8837.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=sph",
    },
    {
      name: "Sci-Fi5",
      url: "https://imageio.forbes.com/specials-images/imageserve/63ec76bcea9d35758ecaa5e3/A-Science-Fiction-future-inspired-by-Ada-Palmer-s-Terra-Ignota-Series/960x0.png?format=png&width=960",
    },
    {
      name: "Sci-Fi6",
      url: "https://www.theengineer.co.uk/media/wuanzaju/future-city-stock-adobe.jpg?width=1002&height=564&bgcolor=White&v=1da077cf76ee4f0",
    },
    {
      name: "Sci-Fi7",
      url: "https://assets.telegraphindia.com/telegraph/0b14c9c9-63b9-482a-a66d-c81be41ae79f.jpg",
    },
    {
      name: "Sci-Fi8",
      url: "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/ccdb3a19-7024-4aa5-8412-d8b74a189760/Introduction-to-science-fiction-The-best-sci-fi-books-for-newbies-to-the-genre-Header.jpg",
    },
  ];

  try {
    await kv.set("scifi", JSON.stringify(scifi));
    return NextResponse.json({ message: "scifi data stored successfully" });
  } catch (error) {
    console.error("Error storing scifi data:", error);
    return NextResponse.json({ error: "Failed to store scifi data" });
  }
};
