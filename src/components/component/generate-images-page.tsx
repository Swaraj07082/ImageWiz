"use client";
import { auth } from "@/app/services/firebase";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "../ui/use-toast";

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
  }, [user?.uid, images_created]);

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
            </div>
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
    </div>
  );
}
