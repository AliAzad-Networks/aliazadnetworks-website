import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h2 className="text-3xl font-semibold text-foreground">Page not found</h2>
      <p className="mt-3 text-muted-foreground max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button asChild className="mt-6">
        <Link href="/careers">Back to Careers</Link>
      </Button>
    </div>
  );
}