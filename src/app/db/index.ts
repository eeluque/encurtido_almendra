import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { productsTable } from './schema';
import { productsArray, IProduct } from '../apis/products';
import { pgSchema } from "drizzle-orm/pg-core"

const db = drizzle(process.env.DATABASE_URL!);

class dbProvider {

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

    async getProducts() {
        const products = await db.select().from(productsTable);
    }
}