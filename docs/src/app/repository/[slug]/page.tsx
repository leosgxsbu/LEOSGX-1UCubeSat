import { PageHero } from "@/components/PageHero";
import { REPO_FOLDERS } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return REPO_FOLDERS.map((folder) => ({ slug: folder.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const folder = REPO_FOLDERS.find((f) => f.slug === slug);
  return { title: folder?.title ?? "Repository folder" };
}

export default async function RepositoryFolderPage({ params }: Props) {
  const { slug } = await params;
  const folder = REPO_FOLDERS.find((f) => f.slug === slug);
  if (!folder) notFound();

  return (
    <>
      <PageHero
        title={folder.title}
        subtitle={folder.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Repository", href: "/repository" },
          { label: folder.title },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <p className="mb-6 text-sm text-muted">
          <Link href="/repository">← Back to all folders</Link>
        </p>

        <div className="space-y-3">
          {folder.paths.map((path, i) => (
            <div
              key={path}
              className="flex flex-wrap items-center justify-between gap-3 border border-line bg-white px-4 py-4"
            >
              <div>
                <p className="font-mono text-sm text-ink">{path}</p>
                <p className="mt-1 text-sm text-muted">
                  Opens the matching directory on GitHub.
                </p>
              </div>
              <a
                href={folder.hrefs[i] ?? folder.hrefs[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-header bg-header px-4 py-2 text-sm font-medium text-white no-underline hover:bg-ink"
              >
                Open on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
