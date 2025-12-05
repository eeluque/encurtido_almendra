import dbProvider from "@/app/db";
import ProductDetailTile from "@/app/components/ProductDetailTile";
import Carousel from "@/app/components/Carousel";




export default async function Page({
  params
}: {
  params: { product_id: string };
}) {
  const { product_id } = await params;
  const db = new dbProvider();
  const product = await db.getProductById(product_id);



  return (
    <>

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
          <Carousel></Carousel>
        </div>

      </div>

    </>
  )
}



