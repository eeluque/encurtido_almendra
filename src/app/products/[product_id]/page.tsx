'use client'
import { useSearchParams } from 'next/navigation';
import Product_Tile from "../../components/Product_Tile";

export default function Page() {

    const params = useSearchParams();
    const product_id = params.get('product_id');
    const product_name = params.get('product_name');
    return (

        <>
            <h1>This is where you'll see more about the product you clicked</h1>
            <Product_Tile product_name={product_name!} product_id={product_id!} />
        </>
    )
}
