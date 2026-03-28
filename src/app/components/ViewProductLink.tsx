import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ViewProductLinkProps {
  product_id?: number;
  className?: string;
  children?: ReactNode;
}

/** Prefer linking the whole product card; use this for secondary CTAs. */
export default function ViewProductLink({
  product_id,
  className,
  children = "Ver producto",
}: ViewProductLinkProps) {
  if (product_id == null) return null;

  return (
    <Link
      href={`/products/${product_id}`}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </Link>
  );
}
