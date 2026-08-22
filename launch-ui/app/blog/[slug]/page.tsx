import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/strapi';
import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default";
import CustomBlocksRenderer from '@/components/BlocksRenderer';
import Cta from "@/components/sections/shared/cta/default";


export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts
    .filter((post: any) => post.slug && typeof post.slug === 'string')
    .map((post: any) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = post.publishedDate || post.publishedAt;

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <article className="max-w-6xl mx-auto overflow-hidden py-16 md:py-24 px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">{post.title}</h1>
          <p className="text-muted-foreground">
            {publishedDate ? new Date(publishedDate).toLocaleDateString() : 'Date not available'}
          </p>
        </header>
        {/* Cover Image - move to top if needed */}
        {post.cover && (
          <div className="relative w-full h-96 mb-8 overflow-hidden rounded-xl">
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.cover.url}`}
              alt={post.cover.alternativeText || post.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Render the content only once using the custom renderer */}
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <CustomBlocksRenderer content={post.content} />
        </div>
      </article>
      <div className="max-w-4xl mx-auto px-4 py-8 border-t border-border text-center">
        <h3 className="text-lg font-semibold mb-4">Follow us for more insights</h3>
        <div className="flex justify-center gap-6">
          <a href="https://www.youtube.com/@AliAzadNetworks" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://www.instagram.com/aliazadnetworks/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.014 7.052.072 5.197.158 3.355.515 2.011 1.859.667 3.203.31 5.045.224 6.9.166 8.18.152 8.589.152 12c0 3.411.014 3.82.072 5.1.086 1.855.443 3.697 1.787 5.041 1.344 1.344 3.186 1.701 5.041 1.787 1.28.058 1.689.072 5.1.072s3.82-.014 5.1-.072c1.855-.086 3.697-.443 5.041-1.787 1.344-1.344 1.701-3.186 1.787-5.041.058-1.28.072-1.689.072-5.1s-.014-3.82-.072-5.1c-.086-1.855-.443-3.697-1.787-5.041-1.344-1.344-3.186-1.701-5.041-1.787C15.668.014 15.259 0 12 0z"/><circle cx="12" cy="12" r="3.718"/></svg>
          </a>
          <a href="https://x.com/AliAzadNetworks" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/aliazad-networks/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/></svg>
          </a>
        </div>
      </div>
      <Cta />
      <Footer />
    </main>
  );
}