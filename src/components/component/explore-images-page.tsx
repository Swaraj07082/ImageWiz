"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Animals from "../../../public/Animals.json";
import Anime from "../../../public/Anime.json";
import Image from "next/image";
import Fashion from "../../../public/Fashion.json";
import Food from "../../../public/Food.json";
import SciFi from "../../../public/Sci-Fi.json";
import Landscapes from "../../../public/Landscapes.json";
import Cars from "../../../public/Cars.json";

interface CategoryType {
  name: string;
  url: string;
}
export function ExploreImagesPage() {
  const [liked, setLiked] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userImages, setUserImages] = useState(6);
  const [Category, setCategory] = useState<CategoryType[]>(Animals);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowDialog(true);
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedImage(null);
  };
  const handleAvatarClick = () => {
    setShowDialog((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Explore AI-Generated Images
              </h2>
              <p className="text-muted-foreground mb-6">
                Browse through a variety of AI-generated images across different
                categories.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="px-6 py-2"
                      onClick={(e) => {
                        setCategory(Animals);
                      }}
                    >
                      Animals
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-2"
                      onClick={(e) => {
                        setCategory(Anime);
                      }}
                    >
                      Anime
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-2"
                      onClick={(e) => {
                        setCategory(Fashion);
                      }}
                    >
                      Fashion
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-2"
                      onClick={(e) => {
                        setCategory(Food);
                      }}
                    >
                      Food
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="px-6 py-2 "
                      onClick={(e) => {
                        setCategory(Landscapes);
                      }}
                    >
                      Landscapes
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-2"
                      onClick={(e) => {
                        setCategory(SciFi);
                      }}
                    >
                      Sci-Fi
                    </Button>
                    <Button
                      variant="outline"
                      className="px-6 py-2"
                      onClick={(e) => {
                        setCategory(Cars);
                      }}
                    >
                      Cars
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {Category.map((Category, index) => (
              <div
                key={index}
                className="bg-muted h-48 w-48 rounded-lg shadow-lg relative  overflow-hidden cursor-pointer"
                onClick={() => handleImageClick("/placeholder.svg")}
              >
                <Image
                  src={Category.url}
                  alt="Generated Image"
                  fill
                  className=" object-cover"
                  priority
                  loading="eager"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-2 right-2 ${
                    liked ? "text-red-500" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked);
                  }}
                >
                  <HeartIcon
                    className={`w-4 h-4 ${liked ? "fill-red-500" : ""}`}
                  />
                  <span className="sr-only">Like</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-background px-6 py-4 border-t">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-muted-foreground">
          <p>&copy; 2023 AI Image Generator. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
      {showDialog && (
        <Dialog open={showDialog} onOpenChange={handleCloseDialog}>
          <DialogContent className="sm:max-w-[400px]">
            <img
              src="/placeholder.svg"
              alt="Selected Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium">Selected Image</h3>
              <p className="text-muted-foreground">
                A beautiful AI-generated image.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${liked ? "text-red-500" : ""}`}
                  onClick={() => setLiked(!liked)}
                >
                  <HeartIcon
                    className={`w-4 h-4 ${liked ? "fill-red-500" : ""}`}
                  />
                  <span className="sr-only">Like</span>
                </Button>
                <span
                  className={`text-muted-foreground ${
                    liked ? "font-medium" : ""
                  }`}
                >
                  {liked ? "Liked" : "Like"}
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={handleCloseDialog}>
                Close
              </Button>
              <Button>
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
