import Product_Tile from "./components/Product_Tile";
import ViewProductLink from "./components/ViewProductLink";
import { productsArray } from "./apis/products";

interface productsArray {
  id: number;
  name: string;
  description: string;
  imageURL: string;
}

export default function Home() {


  return (

    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productsArray.map(product => {
          return (
            <Product_Tile key={product.id} product_name={product.name} product_id={product.id}>
              <ViewProductLink key={product.id} product_name={product.name} product_id={product.id} />
            </Product_Tile>)
        })}
      </div>
    </>
  );
}
