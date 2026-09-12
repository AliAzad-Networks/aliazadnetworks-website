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

function CodeBlock({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
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
    <h1
      className="group mt-12 mb-4 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="group mt-10 mb-3 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="group mt-8 mb-2 scroll-mt-24 text-xl font-semibold text-foreground"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="group mt-6 mb-2 scroll-mt-24 text-lg font-semibold text-foreground"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-4 text-base leading-7 text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul
      className="my-4 ml-6 list-disc space-y-2 text-muted-foreground"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground"
      {...props}
    />
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

    const linkClasses =
      "text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary";

    // 👇 Anchor links appended to headings — no underline, hidden until hover
    const isHeadingAnchor =
      typeof props.className === "string" && props.className.includes("anchor");

    if (isHeadingAnchor) {
      return (
        <Link
          href={href}
          className="ml-2 text-muted-foreground/40 opacity-0 transition-opacity group-hover:opacity-100 hover:text-primary"
          aria-label="Anchor link"
        >
          #
        </Link>
      );
    }

    if (isInternal) {
      return (
        <Link href={href} className={linkClasses}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
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