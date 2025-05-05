import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { productsTable } from './schema';
import { productsArray, IProduct } from '../apis/products';
import { pgSchema } from "drizzle-orm/pg-core"
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

export default class dbProvider {

    async insertProducs() {
        for (const product of productsArray) {

            await db.insert(productsTable).values({
                name: product.name,
                description: product.description,
                imageURL: product.imageURL,
                price: product.price,
                createdAt: new Date(product.createdAt),
                updatedAt: new Date(product.updatedAt)
            });
            const products = await db.select().from(productsTable);
            console.log('Products:', products);
        }
    }

    async getProducts(): Promise<IProduct[]> {
        const products = await db.select().from(productsTable);
        return products as IProduct[];
    }
    async getProductById(product_id: string): Promise<IProduct | null> {
        const product = await db.select().from(productsTable).where(eq(productsTable.id, Number(product_id)));
        return product.length > 0 ? product[0] as IProduct : null;
    }
}