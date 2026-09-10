import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

/* ------------------------------------------------------------------ */
/*  Custom components available inside .mdx files                     */
/* ------------------------------------------------------------------ */

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-8 p-5 rounded-xl border-l-4 border-primary bg-primary/5 text-foreground">
      {children}
    </aside>
  );
}

function Divider() {
  return <hr className="my-12 border-border" />;
}

function CodeBlock({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={`my-6 overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed ${className ?? ""}`}
      {...props}
    >
      {children}
    </pre>
  );
}

/* ------------------------------------------------------------------ */
/*  Component map consumed by <MDXRemote />                           */
/* ------------------------------------------------------------------ */

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mt-12 mb-4 text-3xl font-bold tracking-tight text-foreground" {...props} />
  ),
  h2: (props) => (
    <h2 className="mt-10 mb-3 text-2xl font-semibold tracking-tight text-foreground" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-2 text-xl font-semibold text-foreground" {...props} />
  ),
  h4: (props) => (
    <h4 className="mt-6 mb-2 text-lg font-semibold text-foreground" {...props} />
  ),
  p: (props) => (
    <p className="my-4 text-base leading-7 text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-muted-foreground" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground" {...props} />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-primary/40 pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  a: ({ href = "", children, ...props }) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className="text-primary underline underline-offset-4 hover:opacity-80">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:opacity-80"
        {...props}
      >
        {children}
      </a>
    );
  },
  img: ({ src = "", alt = "", ...props }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={450}
      className="my-8 rounded-xl shadow-md"
      {...props}
    />
  ),
  pre: CodeBlock,
  code: (props) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground"
      {...props}
    />
  ),
  hr: Divider,
  Callout,
  Divider,
};