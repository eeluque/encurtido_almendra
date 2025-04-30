import mongoose, { model, Schema, models, Document } from "mongoose";

export interface IProduct extends Document {
    id?: string;
    name?: string;
    price?: number;
    imageURL?: string;
    description?: string;
    children?: React.ReactNode;
}
const productsSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: false },
    description: { type: String, required: false },

});

const Product = models.Product || model<IProduct>('Product', productsSchema);
export default Product;
