import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface RecipesDetailProps {
  title: string;
  description: string;
  children?: ReactNode;
  recipe_id: number;
  product_id?: number;
  body: string;
}

export default function RecipesDetail({
  title,
  description,
  children,
}: RecipesDetailProps) {
  return (
    <Card className="h-full border-border shadow-sm transition hover:shadow-md">
      <CardHeader className="gap-1">
        <CardTitle className="text-xl font-semibold leading-snug">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  );
}
