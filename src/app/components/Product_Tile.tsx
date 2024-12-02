import Link from "next/link";
import ViewProductLink from "./ViewProductLink";
import { Children, FC } from "react";

interface ProductTileProps {
    product_name: string;
    product_id: string;
    children?: React.ReactNode;
}

//props.children is used to render the viewproductlink component

export default function Product_Tile(props: ProductTileProps): ReturnType<React.FC> {
    return (
        <div className="border-2 bg-cyan-600">
            <p>I'll be a product tile someday. This is my info:</p>
            <p>Name: {props.product_name}</p>
            <p>ID: {props.product_id}</p>
            {props.children}
        </div>)
}