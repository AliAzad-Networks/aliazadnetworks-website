interface CareerSectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function CareerSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: CareerSectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-10 ${alignment}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}