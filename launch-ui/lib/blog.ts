import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;  
  authorImage?: string;             // ISO 8601 → "2026-09-11"
  author: string;
  category: string;
  cover: string;              // e.g. "/assets/images/blog/cover.jpg"
  tags?: string[];
  featured?: boolean;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
  readingTime: string;        // e.g. "6 min read"
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Estimate reading time from raw markdown content.
 * Strips MDX/JSX noise so numbers stay realistic.
 */
function calculateReadingTime(content: string): string {
  const clean = content
    .replace(/```[\s\S]*?```/g, "")     // remove fenced code blocks
    .replace(/<[^>]+>/g, "")            // remove JSX/HTML tags
    .replace(/[#>*_`~\-]/g, "")         // remove markdown symbols
    .trim();

  const words = clean.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

/**
 * Ensure a frontmatter field exists and is a non-empty string.
 * Fails loudly during build → prevents silent publishing errors.
 */
function requireString(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`[blog] Missing or invalid "${field}" in ${file}`);
  }
  return value;
}

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

/**
 * Returns metadata for every published post, newest first.
 * Use this for listing pages, sitemaps, or RSS feeds.
 */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    const post: BlogPost = {
      slug,
      title: requireString(data.title, "title", file),
      description: requireString(data.description, "description", file),
      date: requireString(data.date, "date", file),
      author: requireString(data.author, "author", file),
      authorImage: typeof data.authorImage === "string" ? data.authorImage : undefined,
      category: requireString(data.category, "category", file),
      cover: requireString(data.cover, "cover", file),
      tags: Array.isArray(data.tags) ? data.tags : [],
      featured: Boolean(data.featured),
      content,
      readingTime: calculateReadingTime(content),
    };

    const { content: _omit, ...meta } = post;
    return meta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Returns a single post with its raw MDX body.
 * Returns `null` when the slug doesn't exist → callers use `notFound()`.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: requireString(data.title, "title", `${slug}.mdx`),
    description: requireString(data.description, "description", `${slug}.mdx`),
    date: requireString(data.date, "date", `${slug}.mdx`),
    author: requireString(data.author, "author", `${slug}.mdx`),
    authorImage: typeof data.authorImage === "string" ? data.authorImage : undefined,
    category: requireString(data.category, "category", `${slug}.mdx`),
    cover: requireString(data.cover, "cover", `${slug}.mdx`),
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: Boolean(data.featured),
    content,
    readingTime: calculateReadingTime(content),
  };
}

/**
 * Returns every slug — consumed by `generateStaticParams`
 * so Next.js prerenders all posts at build time.
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Returns posts grouped by category — useful for filter UIs.
 */
export function getPostsByCategory(): Record<string, BlogPostMeta[]> {
  return getAllPosts().reduce<Record<string, BlogPostMeta[]>>((acc, post) => {
    (acc[post.category] ||= []).push(post);
    return acc;
  }, {});
}

/**
 * Returns all unique categories present in content.
 */
export function getAllCategories(): string[] {
  const set = new Set(getAllPosts().map((p) => p.category));
  return Array.from(set).sort();
}