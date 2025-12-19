export const dynamic = 'force-dynamic';
import Product_Tile from "./components/Product_Tile";
import ViewProductLink from "./components/ViewProductLink";
import dbProvider from "./db/index";
import { IProduct } from "./apis/products";
import Hero from "./components/Hero";
import { neon } from "@neondatabase/serverless";

export default async function Home() {

  const sql = neon(process.env.DATABASE_URL!);
  const db = new dbProvider();
  const products: IProduct[] = await db.getProducts();
  return (

    <>
      <Hero />
      <div className="grid justify-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
        {products!.map(product => {
          return (
            <Product_Tile key={product.id} name={product.name} description={product.description} price={product.price} imageURL={product.image_url} product_id={product.id}>
              <ViewProductLink product_id={product.id}></ViewProductLink>
            </Product_Tile>
          )
        })}
      </div>
    </>
  );
}
