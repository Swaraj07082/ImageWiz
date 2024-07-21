"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/services/firebase";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

export function GenerateImagesPage() {
  const [prompt, setprompt] = useState<string>("");
  const [url, seturl] = useState<string>("placeholder.svg");
  const [loading, setloading] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const [images_created, setimages_created] = useState<number>(0);

  useEffect(() => {
    const getUserData = async () => {
      if (user?.uid) {
        const response = await fetch(`/api/userData?uid=${user.uid}`);
        const data = await response.json();
        const { userData } = data;
        console.log(userData);
        setimages_created(userData?.images_created || 0);
        console.log(images_created);
      }
    };
    getUserData();
  }, [user?.uid]);

  const GenerateImage = async () => {
    if (auth.currentUser == null) {
      return toast({
        title: "Login to generate Image ",
      });
    }
    setloading(true);
    const newUrl = `https://image.pollinations.ai/prompt/${prompt}`;
    const img = new window.Image();
    img.src = newUrl;
    img.onload = async () => {
      seturl(newUrl);
      setloading(false);
      const updatedCount = images_created + 1;
      setimages_created(updatedCount);
      console.log(updatedCount);
      console.log(images_created);
      if (user?.uid) {
        await fetch("/api/userData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ images_created: updatedCount, uid: user.uid }),
        });
      }
    };
  };

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Generate Stunning Images
              </h2>
              <p className="text-muted-foreground mb-6">
                Enter a text prompt and let our AI-powered image generation tool
                create unique and visually stunning images for you.
              </p>
              <div className="grid gap-4">
                <Textarea
                  value={prompt}
                  onChange={(e) => setprompt(e.target.value)}
                  placeholder="Enter your prompt here..."
                  rows={3}
                  className="border-2 border-muted rounded-lg p-3 text-sm"
                />
                <div className="flex items-center gap-4">
                  <Button className="flex-1" onClick={GenerateImage}>
                    Generate Image
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
                {loading ? (
                  <div className="flex items-center justify-center h-96">
                    <div className="loader">Loading...</div>
                  </div>
                ) : (
                  <Image
                    src={url}
                    alt="Generated Image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                    loading="eager"
                  />
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <DownloadIcon className="w-4 h-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ShareIcon className="w-4 h-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <RefreshCcwIcon className="w-4 h-4" />
                    <span className="sr-only">Regenerate</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <SlidersVerticalIcon className="w-4 h-4" />
                    <span className="sr-only">Adjust Parameters</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-background px-6 py-4 border-t">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-muted-foreground">
          <p>&copy; 2023 AI Image Generator. All rights reserved.</p>
          <div className="flex items-center gap-4">
           
            <Link href="#" className="hover:underline" prefetch={false}>
              About me
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function RefreshCcwIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}

function SlidersVerticalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  );
}
