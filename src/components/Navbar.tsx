"use client";
import React from "react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
              {showUserMenu && (
                <Dialog open={showUserMenu} onOpenChange={setShowUserMenu}>
                  <DialogContent className="w-56">
                    <DropdownMenuContent>
                      <div className="flex items-center gap-2 p-2">
                        <Image
                          src="/placeholder.svg"
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Avatar"
                        />
                        <div className="grid gap-0.5">
                          <div className="font-medium text-primary-foreground">
                            John Doe
                          </div>
                          <div className="text-sm text-primary-foreground/80">
                            userImages images generated
                          </div>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <div className="h-4 w-4" />
                          <span>Logout</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
