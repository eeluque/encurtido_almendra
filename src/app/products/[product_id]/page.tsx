import dbProvider from "@/app/db";
import Product_Tile from "../../components/Product_Tile";

export default async function Page({
  params
}: {
  params: { product_id: string };
}) {
  const { product_id } = await params;
  const db = new dbProvider();
  const product = await db.getProductById(product_id);


  return (

    <div>
      <h1>This is where you'll see more about the product you clicked</h1>
      <Product_Tile id={product?.id} name={product?.name} price={product?.price} description={product?.description}></Product_Tile>
    </div>
  )
}



