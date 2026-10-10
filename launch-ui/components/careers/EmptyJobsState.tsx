import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyJobsStateProps {
  onReset?: () => void;
}

export function EmptyJobsState({ onReset }: EmptyJobsStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-border p-16 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <SearchX className="h-5 w-5 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">
        No open roles match your search
      </h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
        Try adjusting your filters, or send us your CV — we're always looking
        for exceptional people.
      </p>
      {onReset && (
        <Button variant="outline" className="mt-6" onClick={onReset}>
          Clear filters
        </Button>
      )}
    </div>
  );
}