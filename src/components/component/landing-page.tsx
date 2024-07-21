"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { auth } from "@/app/services/firebase";
import { toast } from "../ui/use-toast";

export function LandingPage() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const userImages = "hello";

  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-background">
        <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Unleash Your Creativity with AI-Generated Images
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore a vast library of stunning AI-generated images across
                various categories. Discover new inspirations and bring your
                ideas to life.
              </p>
              <div className="flex gap-4">
                <Button
                  className="flex-1"
                  onClick={() => {
                    if (auth.currentUser == null) {
                      toast({
                        title: "Login needed.",
                      });
                    }
                  }}
                >
                  <Link href={auth.currentUser ? "/generate" : "/"}>
                    Get Started
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="bg-muted rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
                onClick={() => setLiked(!liked)}
              >
                <Image
                  src="/placeholder.svg"
                  alt="Generated Image"
                  width={300}
                  height={200}
                  className="w-full h-auto"
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
              <div
                className="bg-muted rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
                onClick={() => setLiked(!liked)}
              >
                <Image
                  src="/placeholder.svg"
                  alt="Generated Image"
                  width={300}
                  height={200}
                  className="w-full h-auto"
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
              <div
                className="bg-muted rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
                onClick={() => setLiked(!liked)}
              >
                <Image
                  src="/placeholder.svg"
                  alt="Generated Image"
                  width={300}
                  height={200}
                  className="w-full h-auto"
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
              <div
                className="bg-muted rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
                onClick={() => setLiked(!liked)}
              >
                <Image
                  src="/placeholder.svg"
                  alt="Generated Image"
                  width={300}
                  height={200}
                  className="w-full h-auto"
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
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gradient-to-r from-primary to-secondary py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-primary-foreground">
          <p>&copy; 2023 Imaginator. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hover:underline hover:text-primary-foreground/80"
              prefetch={false}
            >
              About me
            </Link>
          </div>
        </div>
      </footer>
      {/* {showDialog && (
        <Dialog open={showDialog} onOpenChange={handleCloseDialog}>
          <DialogContent className="sm:max-w-[600px]">
            <img
              src="/placeholder.svg"
              alt="Selected Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium">Selected Image</h3>
              <p className="text-muted-foreground">A beautiful AI-generated image.</p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${liked ? "text-red-500" : ""}`}
                  onClick={() => setLiked(!liked)}
                >
                  <HeartIcon className={`w-4 h-4 ${liked ? "fill-red-500" : ""}`} />
                  <span className="sr-only">Like</span>
                </Button>
                <span className={`text-muted-foreground ${liked ? "font-medium" : ""}`}>
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
      )} */}
    </div>
  );
}

function DownloadIcon({ props }: any) {
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

function HeartIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill=""
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ImageIcon({ props }: any) {
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

function XIcon({ props }: any) {
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
