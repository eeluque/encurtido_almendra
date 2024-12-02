import Product_Tile from "./components/Product_Tile";
import ViewProductLink from "./components/ViewProductLink";

export default function Home() {
  return (

    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Product_Tile
          product_name="Encurtido Clasico"
          product_id="0501">
          <ViewProductLink product_name="Encurtido Clasico" product_id="0501" />
        </Product_Tile>

        <Product_Tile product_name="Encurtido Eneldo" product_id="1996">
          <ViewProductLink product_name={"Encurtido Eneldo"} product_id={"1996"} />
        </Product_Tile>
        <Product_Tile product_name={"Repollo Morado Encurtido"} product_id={"5458"}>
          <ViewProductLink product_name={"Repollo Morado Encurtido"} product_id={"5458"} />
        </Product_Tile>
      </div>
    </>
  );
}
