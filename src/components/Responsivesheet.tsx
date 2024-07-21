import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HamIcon, Menu } from "lucide-react";
import SigninwithGoogle from "./SigninwithGoogle";
import { auth } from "@/app/services/firebase";

interface Props {
  isMobile: boolean;
}

export default function Responsivesheet({ isMobile }: Props) {
 
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline" className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span>John Doe</span>
        </Button> */}
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 p-4">
          <div className="flex items-center justify-evenly">
            {/* <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar> */}
            <div className="grid gap-4">
              <Link
                href="/explore"
                className="flex items-center justify-between rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <span>Explore</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/generate"
                className="flex items-center justify-between rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <span>Generate</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              {isMobile && <SigninwithGoogle />}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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
