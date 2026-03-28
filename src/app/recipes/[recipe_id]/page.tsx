export const dynamic = "force-dynamic";
import RecipeMarkdown from "@/app/components/RecipeMarkdown";
import Slideshow from "@/app/components/Slideshow";
import dbProvider from "@/app/db";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ recipe_id: string }>;
}) {
  const { recipe_id } = await params;
  const id = Number(recipe_id);
  const db = new dbProvider();
  const recipe = await db.getSingleRecipeById(id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link
        href="/recipes"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Volver a recetas
      </Link>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-6 sm:px-8 sm:py-8">
            <h1 className="text-balance text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
              {recipe?.title ?? "Receta"}
            </h1>
            {recipe?.description ? (
              <p className="mt-3 text-pretty text-muted-foreground leading-relaxed">
                {recipe.description}
              </p>
            ) : null}
          </div>
          <div className="px-6 py-6 sm:px-8 sm:pb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Preparación
            </h2>
            <RecipeMarkdown instructions={recipe?.body ?? null} />
          </div>
        </article>
        <div className="lg:pt-2">
          <Slideshow
            product_description={recipe?.description ?? null}
            asideTitle="Resumen"
          />
        </div>
      </div>
    </div>
  );
}
