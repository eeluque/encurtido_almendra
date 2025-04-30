import Link from "next/link";
import ViewProductLink from "./ViewProductLink";
import { Children, FC } from "react";
import { IProduct } from "../apis/models/Products";

//props.children is used to render the viewproductlink component
interface ProductTileProps {
    id?: string;
    name?: string;
    price?: number;
    imageURL?: string;
    description?: string;
    children?: React.ReactNode;
}

export default function Product_Tile(props: ProductTileProps): ReturnType<React.FC> {
    return (
        <div className="border-2 bg-cyan-600">
            <p>I'll be a product tile someday. This is my info:</p>
            <p>Name: {props.name}</p>
            <p>ID: {props.id}</p>
            <p>Description: {props.description}</p>
            <p>Price: {props.price}</p>
            {props.children}
        </div>)
}