import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicImageGallery = dynamic(
  () => import("../../components/component/ImageGallery"),
  { ssr: false }
);

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Explore AI-Generated Images
            </h2>
            <p className="text-muted-foreground mb-6">
              Browse through a variety of AI-generated images across different
              categories.
            </p>
            <DynamicImageGallery />
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
