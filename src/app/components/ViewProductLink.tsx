import Link from 'next/link'
import React from 'react'

interface ViewProductLinkProps {
    product_id?: string;
}

const ViewProductLink = (props: ViewProductLinkProps) => {
    return (
        <Link href={{
            pathname: `products/${props.product_id}`,
            query: {
                product_id: props.product_id,
            },
        }}>View</Link>
    )
}

export default ViewProductLink;