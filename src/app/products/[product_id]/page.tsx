import dbProvider from "@/app/db";
import ProductDetailTile from "@/app/components/ProductDetailTile";
import Slideshow from "@/app/components/Slideshow";
import Recipes from "@/app/components/Recipes";
import ProductDetailTitle from "@/app/components/ProductDetailTitle";
import { neon } from "@neondatabase/serverless";

export default async function Page({
  params
}: {
  params: { product_id: number };
}) {

  const { product_id } = await params;

  if (!product_id) {
    return (
      <div className="border-2 p-2 text-center">
        <p>This product is currently unavailable</p>
      </div>
    );
  }
  const sql = neon(process.env.DATABASE_URL!);
  const db = new dbProvider();
  const product = await db.getProductById(product_id);

  return (
    <>
      <ProductDetailTitle product_name={product?.name} />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 p-2 mx-auto gap-10">
        <div>
          <ProductDetailTile id={product?.id} name={product?.name} price={product?.price} description={product?.description}></ProductDetailTile>
        </div>
        <div>
          <Slideshow product_description={product?.description ?? null}></Slideshow>
          <p className="my-1.5">Degusta con:</p>
          <Recipes product_id={product?.id} />
        </div>
      </div>
    </>
  )
}



