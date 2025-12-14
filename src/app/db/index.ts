import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { productsTable, recipesTable, RecipesModel } from './schema';
import { productsArray, IProduct } from '../apis/products';
//import { pgSchema } from "drizzle-orm/pg-core"
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

export default class dbProvider {

    async insertProducts() {
        for (const product of productsArray) {

            await db.insert(productsTable).values({
                name: product.name,
                description: product.description,
                image_url: product.image_url,
                price: product.price,
                created_at: new Date(product.createdAt),
                updated_at: new Date(product.updatedAt)
            });
            const products = await db.select().from(productsTable);
            console.log('Products:', products);
        }
    }

    async getProducts(): Promise<IProduct[]> {
        const products = await db.select().from(productsTable);
        return products as IProduct[];
    }
    async getProductById(product_id: number): Promise<IProduct | null> {
        if (!product_id) {
            return null;
        }
        const product = await db.select().from(productsTable).where(eq(productsTable.id, product_id));
        return product.length > 0 ? product[0] as IProduct : null;
    }

    async getRecipesById(product_id: number): Promise<RecipesModel[] | null> {

        const recipes: RecipesModel[] = await db.select().from(recipesTable).where(eq(recipesTable.product_id, product_id));
        return recipes.length > 0 ? recipes : null;
    }
    async getRecipes(): Promise<RecipesModel[] | null> {
        const recipes: RecipesModel[] = await db.select().from(recipesTable);
        return recipes.length > 0 ? recipes : null;
    }
}