import Link from 'next/link'
import React from 'react'

interface ViewProductLinkProps {
    product_name: string;
    product_id: number;
}

const ViewProductLink = (props: ViewProductLinkProps) => {
    return (
        <Link href={{
            pathname: `products/${props.product_id}`,
            query: {
                product_id: props.product_id,
                product_name: props.product_name
            },
        }}>View</Link>
    )
}

export default ViewProductLink