"use client";
import React from "react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import SigninwithGoogle from "./SigninwithGoogle";

export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <>
      <nav className="bg-gradient-to-r from-primary to-secondary py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ImageIcon className="w-8 h-8 text-primary-foreground" />
            <h1 className="text-3xl font-bold text-primary-foreground">
              <Link href={"/"}>ImageWiz</Link>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/generate"
              className="text-primary-foreground hover:underline hover:text-primary-foreground/80"
              prefetch={false}
            >
              Generate
            </Link>
            <Link
              href="/explore"
              className="text-primary-foreground hover:underline hover:text-primary-foreground/80"
              prefetch={false}
            >
              Explore
            </Link>
            <div>
              {/* {showUserMenu && ( */}
              {/* <Dialog>
                <DialogContent>
                  {" "}
                  <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                    <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
                      <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-zinc-500 dark:text-zinc-400">
                          By logging in, you accept our
                          <Link
                            href="#"
                            className="text-blue-500 hover:text-blue-700"
                            prefetch={false}
                          >
                            terms
                          </Link>
                          and
                          <Link
                            href="#"
                            className="text-blue-500 hover:text-blue-700"
                            prefetch={false}
                          >
                            privacy policy
                          </Link>
                          .
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            placeholder="m@example.com"
                            required
                            type="email"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                          <span className="text-zinc-400 dark:text-zinc-300 text-sm">
                            OR
                          </span>
                          <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                        </div>
                        <Button
                          className="w-full bg-[#4285F4] text-white"
                          variant="outline"
                        >
                          <div className="flex items-center justify-center">
                            <ChromeIcon className="w-5 h-5 mr-2" />
                            Login with Google
                          </div>
                        </Button>
                        <Button
                          className="w-full bg-black text-white"
                          variant="outline"
                        >
                          <div className="flex items-center justify-center">
                            <AppleIcon className="w-5 h-5 mr-2" />
                            Login with Apple
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
          
                </DialogContent>
                <DialogTrigger>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-primary-foreground/50 w-10 h-10"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  >
                    <Image
                      src="/placeholder.svg"
                      width="40"
                      height="40"
                      className="rounded-full"
                      alt="Avatar"
                    />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DialogTrigger>
              </Dialog> */}
              {/* )} */}
              <SigninwithGoogle/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function AppleIcon(props) {
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

function ChromeIcon(props) {
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
