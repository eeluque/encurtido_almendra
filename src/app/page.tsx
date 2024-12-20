import Product_Tile from "./components/Product_Tile";
import ViewProductLink from "./components/ViewProductLink";
import { productsArray } from "./apis/products";
import dbProvider from "./apis/db";
interface products {
  id: number;
  name: string;
  description: string;
  imageURL: string;
}

export default async function Home() {

  const db = new dbProvider();
  const products = await db.getProducts();
  console.log(products);
  return (

    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products!.map(product => {
          return (
            <Product_Tile key={product.id} name={product.name} price={product.price} imageURL={""} description={product.description} id={product.id}>
              <ViewProductLink product_name={product.name} product_id={product.id} />
            </Product_Tile>)
        })}
      </div>
    </>
  );
}
