"use client";
import React, { useEffect } from "react";

import { useState } from "react";


import { auth } from "@/app/services/firebase";
import { ImageIcon } from "lucide-react";
import Link from "next/link";
import Responsivesheet from "./Responsivesheet";
import SigninwithGoogle from "./SigninwithGoogle";

export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobile);

  console.log(auth.currentUser);

  return (
    <>
      <nav className="bg-gradient-to-r from-primary to-secondary py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ImageIcon className="w-8 h-8 text-primary-foreground max-md: text-3xl" />
            <h1 className="text-3xl font-bold text-primary-foreground">
              <Link href={"/"} className="max-md: text-3xl">
                ImageWiz
              </Link>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="  md:hidden">
              <Responsivesheet isMobile={isMobile} />
            </div>
            <Link
              href="/generate"
              className=" max-md:hidden text-primary-foreground hover:underline hover:text-primary-foreground/80"
              prefetch={false}
            >
              Generate
            </Link>
            <Link
              href={"/explore"}
              className=" max-md:hidden  text-primary-foreground hover:underline hover:text-primary-foreground/80"
              prefetch={false}
            >
              Explore
            </Link>
            <div className=" max-md:hidden">
              <SigninwithGoogle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function ChromeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
