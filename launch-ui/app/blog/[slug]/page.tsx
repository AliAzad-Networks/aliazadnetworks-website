import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";

import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default";
import Cta from "@/components/sections/shared/cta/default";

import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";
import { BlogHeader } from "@/components/blog/blog-header";

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | AliAzad Networks`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.cover }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark-dimmed",
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="bg-white text-foreground min-h-screen w-full">
      <Navbar />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <BlogHeader post={post} />

        {post.cover && (
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  [rehypePrettyCode, prettyCodeOptions],
                ],
              },
            }}
          />
        </div>
      </article>

      <Cta />
      <Footer />
    </main>
  );
}