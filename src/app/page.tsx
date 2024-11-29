import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product_Tile from "./components/Product_Tile";
import ViewProductLink from "./components/ViewProductLink";

export default function Home() {
  return (

    <>
      <Product_Tile
        product_name="Encurtido Clasico"
        product_id="0501">
      </Product_Tile>
      <ViewProductLink product_name="Encurtido Clasico" product_id="0501" />


    </>
  );
}
