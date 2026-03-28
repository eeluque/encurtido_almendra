export const dynamic = "force-dynamic";
import RecipesDetail from "../components/RecipesDetail";
import ViewRecipeLink from "../components/ViewRecipeLink";
import dbProvider from "../db";
import type { RecipesModel } from "../db/schema";

export default async function RecipesPage() {
  const db = new dbProvider();
  const recipes: RecipesModel[] = (await db.getRecipes()) ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Recetas
        </h1>
        <p className="mt-3 text-muted-foreground">
          Ideas para disfrutar tus encurtidos: abrí una receta y seguí el paso a paso.
        </p>
      </header>
      <ul className="grid list-none gap-6 sm:grid-cols-2 lg:gap-8">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipesDetail
              body={recipe.body}
              title={recipe.title}
              description={recipe.description}
              product_id={recipe.product_id ?? undefined}
              recipe_id={recipe.id}
            >
              <ViewRecipeLink recipe_id={recipe.id}>Ver receta completa</ViewRecipeLink>
            </RecipesDetail>
          </li>
        ))}
      </ul>
    </div>
  );
}
