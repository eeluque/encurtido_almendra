interface ProductDetailTitleProps {
    product_name: string | null;
}

export default function ProductDetailTitle({ product_name }: ProductDetailTitleProps) {
    return (
        <section className="text-shadow-white text-white bg-cover py-45 px-6 md:px-12 lg:px-24 duration-500 bg-[url('../public/images/jars.jpg')]">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-shadow-lg/30 text-center">
                {product_name}
            </h1>
        </section>
    )
}