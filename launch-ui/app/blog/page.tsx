import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default";
import Link from 'next/link';
import { getBlogPosts } from '@/lib/strapi';
import Cta from "@/components/sections/shared/cta/default";

interface BlogPost {
  documentId: string;
  slug: string;
  title: string;
  cover?: {
    url: string;
    alternativeText?: string;
  };
  publishedDate?: string;
  publishedAt?: string;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const validPosts = posts.filter((post: BlogPost) => post.slug && typeof post.slug === 'string');

  return (
    <main className="bg-gray-50 text-foreground min-h-screen w-full">
      <Navbar />
      <div className="max-w-container mx-auto overflow-hidden py-16 md:py-24 px-8">
        <h1 className="text-center text-4xl font-medium mb-20 text-gray-900">The latest <span className="text-orange-700">AI news</span> from AliAzad Networks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {validPosts.map((post: BlogPost, index: number) => {
            const publishDate = post.publishedDate || post.publishedAt;
            const formattedDate = publishDate
              ? new Date(publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : 'Date coming soon';

            const imageUrl = post.cover
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.cover.url}`
              : null;

            const isPriority = index < 2;

            return (
              <Link
                key={post.documentId}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full"
              >
                <article className="flex flex-col h-full bg-card overflow-hidden shadow-lg">
                  <div className="relative w-full aspect-video overflow-hidden bg-muted">
                    {imageUrl ? (
                      <img
                          src={imageUrl}
                          alt={post.cover?.alternativeText || post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <span className="text-muted-foreground text-sm">No image</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full shadow-md">
                        AI Insights
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow p-6 space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <time dateTime={publishDate || ''} className="font-medium">{formattedDate}</time>
                    </div>
                    <h2 className="text-xl font-bold line-clamp-2 transition-colors duration-200 leading-tight">
                      {post.title}
                    </h2>
                    <div className="pt-3 mt-auto">
                      <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-200 group-hover:text-primary/80">
                        Read Article
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
      <Cta />
      <Footer />
    </main>
  );
}