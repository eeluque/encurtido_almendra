import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product_Tile from "./components/Product_Tile";

export default function Home() {
  return (

    <>
      <Header></Header>
      <Product_Tile />
      <Footer></Footer>
    </>
  );
}
