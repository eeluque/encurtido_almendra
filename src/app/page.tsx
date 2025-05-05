import Product_Tile from "./components/Product_Tile";
import ViewProductLink from "./components/ViewProductLink";
import dbProvider from "./db/index";
import { IProduct } from "./apis/products";

export default async function Home() {

  const db = new dbProvider();
  const products: IProduct[] = await db.getProducts();
  return (

    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products!.map(product => {
          return (
            <Product_Tile key={product.id} name={product.name} description={product.description} price={product.price}>
              <ViewProductLink product_id={product.id}></ViewProductLink>
            </Product_Tile>
          )
        })}
      </div>
    </>
  );
}
