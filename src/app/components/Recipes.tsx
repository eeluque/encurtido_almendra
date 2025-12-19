export const dynamic = 'force-dynamic';
import { neon } from "@neondatabase/serverless";
import dbProvider from "../db";

interface RecipesProps {
    product_id?: number | null;
    recipe_id?: number | null;
    children?: React.ReactNode;

}
export default async function Recipes({ product_id, recipe_id }: RecipesProps) {

    if (!product_id) {
        return (
            <div className="border-2 p-2 text-center">
                <p>This product has no recipes at the moment</p>
            </div>
        );
    }
    const sql = neon(process.env.DATABASE_URL!);
    const db = new dbProvider();
    const recipes = await db.getRecipesById(product_id);
    return (
        <div className="gap-4 rounded-xl shadow-lg bg-fuchsia-100 border-2 p-6 text center my-2">
            {recipes?.map(recipe => {
                return (
                    <div className="m-2" key={recipe.id}>
                        <ul>
                            <li className="font-semibold">{recipe.title}</li>
                            <li className="italic">{recipe.description}</li>
                            {/* <ViewRecipeLink recipe_id={recipe.id}>Ver receta</ViewRecipeLink> */}
                        </ul>
                    </div>
                )
            })}
        </div>)
}