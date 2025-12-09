import dbProvider from "../db";
import RecipesDetail from "./RecipesDetail";

interface RecipesProps {
    product_id?: number | null;
    recipe_id?: number | null;
    //children?: React.ReactNode;

}
export default async function Recipes({ product_id, recipe_id }: RecipesProps) {

    if (!product_id) {
        return (
            <div className="border-2 p-2 justify-items-center-safe">
                <p>This product has no recipes at the moment</p>
            </div>
        );
    }
    const db = new dbProvider();
    const recipes = await db.getRecipesById(product_id);
    return (
        <>
            <div className="border-2 p-2 justify-items-center-safe">
                <p>These are my recipes</p>
                {recipes?.map(recipe => {
                    return (
                        <RecipesDetail key={recipe.id} title={recipe.title} body={recipe.body} />
                    )
                })}
            </div>

        </>
    )
}