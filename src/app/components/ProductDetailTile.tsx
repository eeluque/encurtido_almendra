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

        <div className="bg-fuchsia-100 rounded-xl shadow-lg border-2 p-2 flex flex-col items-center text-center mx-auto">
            <Image
                //to do: validate there exists an image URL and name for alt text
                src={onions}
                alt={props.name!}
                width={440}
                height={560}
            />
            <div className='mt-4 px-4 py-3 rounded-lg shadow text-center'>
                <p className='text-xl font-bold text-gray-700'>{props.name}</p>
                <p className='text-l font-semibold text-rose-400 mt-4'>{props.price} Lps</p>
                {props.children}
            </div>
        </div>

    )
}