import Recipes from "../components/Recipes";
import RecipesDetail from "../components/RecipesDetail";
import ViewRecipeLink from "../components/ViewRecipeLink";
import dbProvider from "../db";
import type { RecipesModel } from "../db/schema";

export default async function RecipesPage() {
    const db = new dbProvider();
    const recipes: RecipesModel[] = (await db.getRecipes()) ?? [];
    return (
        <>

            {
                recipes.map(recipe => {
                    return (
                        <div className="gap-4 rounded-xl shadow-lg bg-fuchsia-100 border-2 p-6 text center my-2" key={recipe.id}>
                            <RecipesDetail body={recipe.body} title={recipe.title} description={recipe.description} product_id={recipe.product_id ?? undefined} recipe_id={recipe.id}>
                                <ViewRecipeLink recipe_id={recipe.id}>Ver receta</ViewRecipeLink>
                            </RecipesDetail>
                        </div>
                    )
                })
            }

        </>
    )
}