import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import SigninwithGoogle from "./SigninwithGoogle";

export default function Responsivesheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 p-4">
          <div className="flex items-center justify-evenly">
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
              {/* <SigninwithGoogle /> */}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
