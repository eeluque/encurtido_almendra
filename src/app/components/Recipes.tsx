export const dynamic = "force-dynamic";
import dbProvider from "../db";
import ViewRecipeLink from "./ViewRecipeLink";
import { ChefHat } from "lucide-react";

interface RecipesProps {
  product_id?: number | null;
  recipe_id?: number | null;
  children?: React.ReactNode;
}

export default async function Recipes({ product_id }: RecipesProps) {
  if (!product_id) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-8 text-center">
        <ChefHat className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden />
        <p className="mt-3 text-sm text-muted-foreground">
          Todavía no hay recetas para este producto.
        </p>
      </div>
    );
  }

  const db = new dbProvider();
  const recipes = await db.getRecipesById(product_id);

  if (!recipes?.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/40 px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">No hay recetas vinculadas aún.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Degustá con
      </h3>
      <ul className="space-y-3">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="rounded-xl border border-border bg-card p-4 shadow-sm transition hover:border-primary/25"
          >
            <p className="font-semibold text-card-foreground">{recipe.title}</p>
            {recipe.description ? (
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {recipe.description}
              </p>
            ) : null}
            <div className="mt-3">
              <ViewRecipeLink recipe_id={recipe.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
