import Recipes from "../components/Recipes";
import dbProvider from "../db";
import type { RecipesModel } from "../db/schema";

export default async function RecipesPage() {
    const db = new dbProvider();
    const recipes: RecipesModel[] = (await db.getRecipes()) ?? [];
    return (
        <div>
            {
                recipes.map(recipe => {
                    return (
                        <Recipes key={recipe.id} product_id={recipe.product_id} recipe_id={recipe.id}></Recipes>
                    )
                })
            }
        </div>
    )
}