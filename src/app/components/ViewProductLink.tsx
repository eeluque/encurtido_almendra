import Link from 'next/link'

interface ViewProductLinkProps {
    product_id?: number;
}

const ViewProductLink = (props: ViewProductLinkProps) => {
    return (
        <button className='rounded-full bg-fuchsia-400/20 p-2 px-4.5 my-1'>
            <Link href={{
                pathname: `products/${props.product_id}`,
            }}><p>Ver</p></Link>
        </button>
    )
}

export default ViewProductLink;