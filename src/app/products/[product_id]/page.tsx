'use client';
import Product_Tile from "../../components/Product_Tile";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';



export default async function Page(props: any) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('product_id');
  console.log(`This is the search item ${search}`);


  return (

    <>
      <h1>This is where you'll see more about the product you clicked</h1>

    </>
  )
}

//<Product_Tile id={props.product?.id} name={props.product?.name} price={props.product?.price} description={props.product?.description}></Product_Tile>