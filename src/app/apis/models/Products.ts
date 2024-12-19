import mongoose, { model, Schema } from "mongoose";

interface IProduct {
    name: string;
    price: number;
    imageURL?: string;
    description?: string;
}
const productsSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: false },
    description: { type: String, required: false },

});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', productsSchema)
