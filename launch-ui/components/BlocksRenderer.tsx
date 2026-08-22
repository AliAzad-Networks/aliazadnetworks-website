"use client";

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function CustomBlocksRenderer({ content }: { content: any }) {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {children}
          </p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>;
            case 2:
              return <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>;
            case 3:
              return <h3 className="text-2xl font-semibold mt-5 mb-2">{children}</h3>;
            default:
              return <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>;
          }
        },
        link: ({ children, url }) => (
          <a href={url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
        list: ({ children, format }) => {
          if (format === 'ordered') {
            return <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>;
          }
          return <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>;
        },
        quote: ({ children }) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
            {children}
          </blockquote>
        ),
        code: ({ plainText }) => (
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code className="text-sm">{plainText}</code>
          </pre>
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-bold">{children}</strong>,
        italic: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <u className="underline">{children}</u>,
        strikethrough: ({ children }) => <del className="line-through">{children}</del>,
        code: ({ children }) => (
          <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        ),
      }}
    />
  );
}