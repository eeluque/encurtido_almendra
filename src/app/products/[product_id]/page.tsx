import dbProvider from "@/app/db";
import ProductDetailTile from "@/app/components/ProductDetailTile";
import Slideshow from "@/app/components/Slideshow";
import Hero from "@/app/components/Hero";
import Recipes from "@/app/components/Recipes";
import ProductDetailTitle from "@/app/components/ProductDetailTitle";




export default async function Page({
  params
}: {
  params: { product_id: number };
}) {
  const { product_id } = await params;
  const db = new dbProvider();
  const product = await db.getProductById(product_id);



  return (
    <>
      <ProductDetailTitle product_name={product?.name} />
      <div className="grid grid-cols-2 border-2">

        <div>
          {product?.name}
          <ProductDetailTile id={product?.id} name={product?.name} price={product?.price} description={product?.description}></ProductDetailTile>
          <div>Descripcion del producto
            <p>{product?.description}</p>
          </div>
        </div>
        <div>
          <h1>This is where you'll see more about the product you clicked</h1>
          <Slideshow></Slideshow>
          <Recipes product_id={product?.id} />
        </div>

      </div>

    </>
  )
}



