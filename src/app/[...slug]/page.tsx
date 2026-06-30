import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import LegacyContentPage from "@/components/site/LegacyContentPage";
import { getLegacyPage, getLegacyPathFromSlug } from "@/lib/legacy-pages";

interface CatchAllPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: CatchAllPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegacyPage(getLegacyPathFromSlug(slug));

  if (!page || page.kind === "redirect") {
    return {};
  }

  return {
    title: `${page.title} | BVIMIT`,
    description: page.summary,
  };
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params;
  const page = getLegacyPage(getLegacyPathFromSlug(slug));

  if (!page) {
    return (
      <div className="py-24 md:py-32 flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-card border border-border shadow-lg p-10 rounded-2xl">
          <h1 className="text-3xl font-black text-foreground uppercase tracking-wider">Information <span className="text-primary">Unavailable</span></h1>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The requested legacy page from the BVIMIT portal could not be found or is currently being updated. 
            Bharati Vidyapeeth Institute of Management and Information Technology is dedicated to providing the most up-to-date resources and information for our academic community. 
          </p>
          <p className="text-muted-foreground">
            Please navigate using the menu above or return to the homepage to explore the new portal.
          </p>
          <div className="pt-8">
             <a href="/" className="inline-flex bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-xl font-bold transition-all shadow-sm">Return to Homepage</a>
          </div>
        </div>
      </div>
    );
  }

  if (page.kind === "redirect" && page.redirectTo) {
    redirect(page.redirectTo);
  }

  return <LegacyContentPage page={page} />;
}

