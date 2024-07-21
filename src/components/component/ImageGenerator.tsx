"use client";
import { auth } from "@/app/services/firebase";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "@/components/ui/use-toast";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState<string>("");
  const [url, setUrl] = useState<string>("placeholder.svg");
  const [loading, setLoading] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const [images_created, setImagesCreated] = useState<number>(0);

  useEffect(() => {
    const getUserData = async () => {
      if (user?.uid) {
        try {
          const response = await fetch(`/api/userData?uid=${user.uid}`);
          const data = await response.json();
          const { userData } = data;
          setImagesCreated(userData?.images_created || 0);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    getUserData();
  }, [user?.uid]);

  const generateImage = async () => {
    if (!user) {
      return toast({
        title: "Login to generate Image",
      });
    }
    setLoading(true);
    try {
      const newUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        prompt
      )}`;
      setUrl(newUrl);
      const updatedCount = images_created + 1;
      setImagesCreated(updatedCount);

      await fetch("/api/userData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ images_created: updatedCount, uid: user.uid }),
      });
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Error generating image",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Generate Stunning Images</h2>
        <p className="text-muted-foreground mb-6">
          Enter a text prompt and let our AI-powered image generation tool
          create unique and visually stunning images for you.
        </p>
        <div className="grid gap-4">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            rows={3}
            className="border-2 border-muted rounded-lg p-3 text-sm"
          />
          <div className="flex items-center gap-4">
            <Button className="flex-1" onClick={generateImage}>
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
  );
}
