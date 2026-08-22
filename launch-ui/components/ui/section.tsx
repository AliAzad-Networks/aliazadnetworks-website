import * as React from "react";

import { cn } from "@/lib/utils";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("line-b px-4 py-4 sm:py-8 md:py-8", className)}
      {...props}
    />
  );
}

export { Section };
