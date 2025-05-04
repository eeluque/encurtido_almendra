import { Schema, model, connect, ConnectOptions, disconnect } from 'mongoose';
import dotenv from "dotenv";
import Product, { IProduct } from './models/Products';
import './models/Products';
dotenv.config();
const uri = process.env.MONGO_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export default class dbProvider {

    async getProducts(): Promise<IProduct[] | undefined> {
        try {
            // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
            await connect(uri!, clientOptions as ConnectOptions);
            //console.log("Pinged your deployment. You successfully connected to MongoDB!");
            const products: IProduct[] = await Product.find();
            //console.log(Product.db);
            return products || [];
        }
        catch (error) {
            console.error(error);
            return undefined
        }
        finally {
            await disconnect();

        }
    }
    async getProductbyID(id: string): Promise<IProduct | undefined> {
        try {
            await connect(uri!, clientOptions as ConnectOptions);
            const product: IProduct | null = await Product.findById(id);
            return product || undefined;
        }
        catch (error) {
            console.error(error);
            return undefined
        }
        finally {
            await disconnect();
        }
    }
}
