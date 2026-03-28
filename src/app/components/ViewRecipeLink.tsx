import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ViewRecipeLinkProps {
  recipe_id: number;
  children?: ReactNode;
  className?: string;
}

export default function ViewRecipeLink({
  recipe_id,
  children = "Ver receta",
  className,
}: ViewRecipeLinkProps) {
  return (
    <Link
      href={`/recipes/${recipe_id}`}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </Link>
  );
}
