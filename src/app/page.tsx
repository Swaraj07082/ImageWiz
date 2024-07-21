import dynamic from 'next/dynamic';
import Link from "next/link";

const DynamicHomePage = dynamic(() => import('../components/component/HomePage'), { ssr: false });

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <DynamicHomePage />
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