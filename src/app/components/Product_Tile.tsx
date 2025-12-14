import Image from 'next/image';
import onions from '../../public/images/encurtido.jpg';
import Link from 'next/link';
//props.children is used to render the viewproductlink component
interface ProductTileProps {
    product_id?: number;
    name?: string;
    price?: string;
    imageURL?: string;
    description?: string;
    children?: React.ReactNode;
}

export default function Product_Tile(props: ProductTileProps): ReturnType<React.FC> {
    return (
        <div className="my-6 text-center">

            <Link href={{
                pathname: `products/${props.product_id}`,
            }}>
                <Image
                    //to do: validate there exists an image URL and name for alt text
                    src={onions}
                    alt={props.name!}
                    width={220}
                    height={260}
                />
            </Link>
            <p>{props.name}</p>
            <p>{props.price} Lps</p>
            {props.children}

        </div>)
}