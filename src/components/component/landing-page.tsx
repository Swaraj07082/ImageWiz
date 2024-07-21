"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function LandingPage() {
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
                <Button className="flex-1 ">
                  <Link href={"/generate"}>Get Started</Link>
                </Button>
                <Button variant="outline" className="flex-1 ">
                  <Link href={"/aboutme"}>About me</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted h-52   rounded-lg overflow-hidden shadow-lg relative cursor-pointer">
                <Image
                  src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/k/3/y/medium-anime-scenery-beautiful-nature-dreamworld-anime-aesthetic-original-imagkzhfhkzguyrz.jpeg?q=90&crop=false"
                  alt="Generated Image"
                  fill
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="bg-muted h-52   rounded-lg overflow-hidden shadow-lg relative cursor-pointer">
                <Image
                  src="https://wallpapers.com/images/featured/aesthetic-pictures-hv6f88paqtseqh92.jpg"
                  alt="Generated Image"
                  fill
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="bg-muted h-52   rounded-lg overflow-hidden shadow-lg relative cursor-pointer">
                <Image
                  src="https://images4.alphacoders.com/134/1347180.png"
                  alt="Generated Image"
                  fill
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="bg-muted h-52   rounded-lg overflow-hidden shadow-lg relative cursor-pointer">
                <Image
                  src="https://i.pinimg.com/236x/b6/d3/17/b6d3177a526831702d0ecbd96b9a9b6f.jpg"
                  alt="Generated Image"
                  fill
                  className="w-full h-auto object-cover"
                />
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
              href="/aboutme"
              className="hover:underline hover:text-primary-foreground/80"
              prefetch={false}
            >
              About me
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
