import { Schema, model, connect, ConnectOptions, disconnect } from 'mongoose';
import dotenv from "dotenv";
import Product from './models/Products';
dotenv.config();
const uri = process.env.MONGO_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await connect(uri!, clientOptions as ConnectOptions);
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await disconnect();
    }
}
run().catch(console.dir);

export default class dbProvider {

    async getProducts() {
        try {
            // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
            await connect(uri!, clientOptions as ConnectOptions);
            //console.log("Pinged your deployment. You successfully connected to MongoDB!");
            const products = await Product.find();
            //console.log(Product.db);
            return products;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            // Ensures that the client will close when you finish/error
            //await disconnect();

        }
    }
}

