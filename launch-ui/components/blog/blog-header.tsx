import type { BlogPost } from "@/lib/blog";
import Image from "next/image";


function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogHeader({ post }: { post: BlogPost }) {
  return (
    <header className="mb-10">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium uppercase tracking-wider text-primary">
          {post.category}
        </span>
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {post.title}
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {post.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 border-y border-border py-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          {post.authorImage && (
            <Image
              src={post.authorImage}
              alt={post.author}
              width={40}
              height={40}
              className="h-7 w-7 rounded-full object-cover border border-border"
            />
          )}
          <span className="font-medium text-foreground">{post.author}</span>
        </div>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>
    </header>
  );
}