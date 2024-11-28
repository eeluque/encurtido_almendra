import Link from "next/link";
import ViewProductLink from "./ViewProductLink";
import { Children } from "react";

interface ProductTileProps {
    product_name: string;
    product_id: string;
    //children: React.ReactNode;
}

export default function Product_Tile(props: ProductTileProps) {
    return (
        <div className="border-2 w-4/12 h-2/6 bg-cyan-600">
            <p>I'll be a product tile someday. This is my info:</p>
            <p>Name: {props.product_name}</p>
            <p>ID: {props.product_id}</p>
        </div>)
}