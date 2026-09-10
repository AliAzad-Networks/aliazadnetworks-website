import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default";
import Cta from "@/components/sections/shared/cta/default";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata = {
  title: "Blog | AliAzad Networks",
  description:
    "Insights on AI, automation, custom software, and modern digital transformation.",
};

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-white text-foreground min-h-screen w-full">
      <Navbar />

      {/* Banner-style Header */}
      <section className="relative w-full overflow-hidden bg-[#f9f7f4] border-b border-border">
        {/* Background Blurs */}
        <div className="absolute pointer-events-none top-10 -z-0 left-20 size-64 bg-gradient-to-br from-[#F8F4F0] to-[#F046FF] blur-[180px] opacity-70" />
        <div className="absolute pointer-events-none bottom-10 -z-0 right-20 size-64 bg-gradient-to-br from-[#F8F4F0] to-[#F8F4F0] blur-[180px] opacity-70" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              AliAzad Networks Developer Blogs
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Stories about our people, our work, and the impact we're building
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Latest Posts Heading with Long Underline */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Latest Posts
          </h2>
          <div className="mt-3 h-px w-full bg-border" />
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-16 text-center">
            <p className="text-muted-foreground">
              No posts published yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className="border-b border-border pb-6"
              >
                <BlogCard post={post} priority={index < 3} />
              </div>
            ))}
          </div>
        )}
      </section>

      <Cta />
      <Footer />
    </main>
  );
}