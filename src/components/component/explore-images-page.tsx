"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";

interface CategoryType {
  name: string;
  url: string;
}
export function ExploreImagesPage() {
  const initial_images = [
    {
      name: "polar bear",
      url: "https://www.calgaryzoo.com/wp-content/uploads/2023/09/Daughter.YYC_.Zoo_.P.Bears_.01090.1.FF16-1024x768.jpg",
    },
    {
      name: "gojo",
      url: "https://i.pinimg.com/736x/98/58/74/9858745cd157f2797065e639c5b3bf23.jpg",
    },
    {
      name: "car1",
      url: "https://www.topgear.com/sites/default/files/2021/12/8.%20Lotus%20Evija.jpeg",
    },
    {
      name: "Sci-Fi1",
      url: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8466f4d7-b3bb-430b-96ef-34bf3c5521ea_716x716.jpeg",
    },
    {
      name: "Outfit3",
      url: "https://i.insider.com/5e349266ab49fd1dbb62c846?width=800&format=jpeg&auto=webp",
    },
    {
      name: "Pancakes",
      url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-122861-376464.jpg&fm=jpg",
    },
    {
      name: "Landscape-3",
      url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?b=1&s=612x612&w=0&k=20&c=81f5HaMtoPNUrdfa4hnS8NcwEgD9tH2nnTUBu25Msug=",
    },
    {
      name: "Burger",
      url: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
  ];
  const [liked, setLiked] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [userImages, setUserImages] = useState(6);
  const [animals, setanimals] = useState([]);
  const [Category, setCategory] = useState<CategoryType[]>(initial_images);
  const [anime, setanime] = useState([]);
  const [food, setfood] = useState([]);
  const [fashion, setfashion] = useState([]);
  const [landscapes, setlandscapes] = useState([]);
  const [scifi, setscifi] = useState([]);
  const [cars, setcars] = useState([]);

  const handleImageClick = (image: string) => {
    console.log(image);
    setSelectedImage(image);
    setShowDialog(true);
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedImage("");
  };
  const handleAvatarClick = () => {
    setShowDialog((prevState) => !prevState);
  };

  useEffect(() => {
    const getanimals = async () => {
      const response = await fetch("/api/animals");
      const data = await response.json();
      setanimals(data);
    };

    getanimals();

    const getanime = async () => {
      const response = await fetch("/api/anime");
      const data = await response.json();
      setanime(data);
    };

    getanime();

    const getfood = async () => {
      const response = await fetch("/api/food");
      const data = await response.json();
      setfood(data);
    };

    getfood();

    const getscifi = async () => {
      const response = await fetch("/api/scifi");
      const data = await response.json();
      setscifi(data);
    };

    getscifi();

    const getlandscapes = async () => {
      const response = await fetch("/api/landscapes");
      const data = await response.json();
      setlandscapes(data);
    };

    getlandscapes();

    const getfashion = async () => {
      const response = await fetch("/api/fashion");
      const data = await response.json();
      setfashion(data);
    };

    getfashion();

    const getcars = async () => {
      const response = await fetch("/api/cars");
      const data = await response.json();
      setcars(data);
    };

    getcars();
  }, []);

  console.log(animals);
  console.log(anime);
  console.log(food);
  console.log(cars);
  console.log(fashion);
  console.log(scifi);
  console.log(landscapes);

  console.log(Category);

  console.log(selectedImage);

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Explore AI-Generated Images
            </h2>
            <p className="text-muted-foreground mb-6">
              Browse through a variety of AI-generated images across different
              categories.
            </p>
            <div className="grid gap-4">
              <div className="grid grid-cols-7 gap-x-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm 
        font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setCategory(animals);
                  }}
                >
                  Animals
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setCategory(anime);
                  }}
                >
                  Anime
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setCategory(fashion);
                  }}
                >
                  Fashion
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setCategory(food);
                  }}
                >
                  Food
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setCategory(landscapes);
                  }}
                >
                  Landscapes
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setCategory(scifi);
                  }}
                >
                  Sci-Fi
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    setCategory(cars);
                  }}
                >
                  Cars
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {Category.map((Category, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(Category.url)}
                className="bg-muted h-48 w-48 rounded-lg shadow-lg relative  overflow-hidden cursor-pointer"
              >
                <Image
                  src={Category.url}
                  alt="Generated Image"
                  fill
                  className=" object-cover"
                  priority
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-background px-6 py-4 border-t">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-muted-foreground">
          <p>&copy; 2023 AI Image Generator. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/aboutme" className="hover:underline" prefetch={false}>
              About me
            </Link>
          </div>
        </div>
      </footer>
      {showDialog && (
        <Dialog open={showDialog} onOpenChange={handleCloseDialog}>
          <DialogContent className="sm:max-w-[400px]">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
              priority
              loading="eager"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium">Selected image</h3>
              <p className="text-muted-foreground">
                A beautiful AI-generated image.
              </p>
              <div className="flex items-center gap-2 mt-2"></div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={handleCloseDialog}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
