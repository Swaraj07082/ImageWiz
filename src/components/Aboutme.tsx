/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CHqQ4yb2RKG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Aboutme() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="bg-muted py-12 md:py-20 lg:py-24">
        <div className="container flex flex-col items-center gap-6 px-4 md:px-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold md:text-4xl">Swaraj Mali</h1>
            <p className="text-muted-foreground md:text-xl">
              Web Dev and Machine Learning Enthusiast
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="#" target="_blank" prefetch={false}>
                <TwitterLogoIcon className="h-6 w-6 text-primary" />
              </Link>
              <Link href="#" target="_blank" prefetch={false}>
                <GitHubLogoIcon className="h-6 w-6 text-primary" />
              </Link>
              <Link href="#" target="_blank" prefetch={false}>
                <LinkedInLogoIcon className="h-6 w-6 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <main className="flex-1">
        <section className="container py-12 md:py-20 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <UserIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">About Me</h2>
              </div>
              <p className="text-muted-foreground">
                I am a passionate software engineer with a strong background in
                full-stack web development. I love learning new technologies and
                constantly strive to improve my skills.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <BriefcaseIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Background</h2>
              </div>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <div className="flex items-center gap-2">
                    <GraduationCapIcon className="h-5 w-5" />
                    <span>
                      Currently pursuing Bachelor degree in Computer Science
                      Engineering a Manipal University , Jaipur
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="h-5 w-5" />
                    <span>1.5+ years of experience in web development</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <HandIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Skills</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <CodepenIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <NetworkIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Node.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <WindIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <GitGraphIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Git</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FastForwardIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Next.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PaletteIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Prisma</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <XIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Express.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <DatabaseIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">MongoDB</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <DatabaseIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">SQL</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PiIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">Python</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <EraserIcon className="h-8 w-8" />
                  <span className="text-sm font-medium">EDA</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Redo2Icon className="h-8 w-8" />
                  <span className="text-sm font-medium">Redux</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          &copy; 2024 John Doe. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function AwardIcon(props) {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CodepenIcon(props) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function EraserIcon(props) {
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
      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
      <path d="M22 21H7" />
      <path d="m5 11 9 9" />
    </svg>
  );
}

function FastForwardIcon(props) {
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
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

function GitGraphIcon(props) {
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
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function GraduationCapIcon(props) {
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
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function HandIcon(props) {
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
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

function NetworkIcon(props) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function PaletteIcon(props) {
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
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function PiIcon(props) {
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
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  );
}

function Redo2Icon(props) {
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
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function WindIcon(props) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
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
