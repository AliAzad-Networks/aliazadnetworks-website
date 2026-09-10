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
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            AliAzad Insights
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Deep dives on AI, automation, cloud architecture, and the future of
            digital businesses.
          </p>
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
              <BlogCard key={post.slug} post={post} priority={index < 3} />
            ))}
          </div>
        )}
      </section>

      <Cta />
      <Footer />
    </main>
  );
}