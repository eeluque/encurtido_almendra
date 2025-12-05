import React from 'react'
import Image from 'next/image'
import onions from '../../public/images/encurtido.jpg';

interface ProductDetailTile {
    id?: number;
    name?: string;
    price?: string;
    imageURL?: string;
    description?: string;
    children?: React.ReactNode;
}

export default function ProductDetailTile(props: ProductDetailTile) {

    return (
        <>
            <div className="border-2 p-2 justify-items-center-safe">
                <Image
                    //to do: validate there exists an image URL and name for alt text
                    src={onions}
                    alt={props.name!}
                    width={540}
                    height={660}
                />
                <p>{props.name}</p>
                {/* <p>{props.description}</p> */}
                <p>{props.price} Lps</p>
                {props.children}
            </div>
        </>
    )
}