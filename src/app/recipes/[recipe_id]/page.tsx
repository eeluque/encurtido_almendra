import RecipeMarkdown from "@/app/components/RecipeMarkdown";
import Slideshow from "@/app/components/Slideshow";
import dbProvider from "@/app/db";
import { neon } from "@neondatabase/serverless";


export default async function RecipeDetailPage({ params }: { params: Promise<{ recipe_id: string }> }) {

    const { recipe_id } = await params;
    const id = Number(recipe_id);
    const sql = neon(process.env.DATABASE_URL!);
    const db = new dbProvider();
    const recipe = await db.getSingleRecipeById(id);



    return (
        <div className="grid container justify-items-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="grid rounded-xl shadow-lg bg-fuchsia-100 border-2 p-2.5">
                    <div className="justify-items-center grid container">
                        <h1 className="font-bold text-2xl mb-3.5">{recipe?.title}</h1>
                        <RecipeMarkdown instructions={recipe?.body ?? null}></RecipeMarkdown>
                    </div>
                </div>
                <div className="">
                    <Slideshow product_description={recipe?.description ?? null} />
                </div>
            </div>
        </div>)
}