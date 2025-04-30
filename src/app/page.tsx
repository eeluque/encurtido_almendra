import Product_Tile from "./components/Product_Tile";
import ViewProductLink from "./components/ViewProductLink";
import dbProvider from "./apis/db";
export default async function Home() {

  const db = new dbProvider();
  const products = await db.getProducts();
  return (

    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products!.map(product => {
          return (
            <Product_Tile key={product.id} id={product.id} name={product.name} description={product.description}>
              <ViewProductLink product_id={product.id}></ViewProductLink>
            </Product_Tile>
          )
        })}
      </div>
    </>
  );
}
