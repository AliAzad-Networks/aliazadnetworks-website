import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  priority?: boolean;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogCard({ post, priority = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden border border-border bg-card hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {post.category}
        </span>

        <h2 className="mt-2 line-clamp-2 text-lg font-semibold hover:text-blue-800 hover:underline">
          {post.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm">
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
          <span>{post.author}</span>
          <time dateTime={post.date}>
            {formatDate(post.date)} · {post.readingTime}
          </time>
        </div>
      </div>
    </Link>
  );
}