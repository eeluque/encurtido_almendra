import Image from 'next/image';
interface ProductDetailTitleProps {
    product_name: string | undefined;
}

export default function ProductDetailTitle({ product_name }: ProductDetailTitleProps) {
    return (
        <section className="gap-y-4 text-shadow-white text-white bg-cover py-20 md:py-35 px-6 md:px-12 lg:px-24 overflow-hidden relative">
            <Image
                src="/images/jars.jpg"
                alt={`Title image for the product ${product_name}`}
                className='object-cover'
                loading='eager'
                fill={true}
            />
            <h1 className="relative text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-shadow-lg/30 text-center py-10 z-10">
                {product_name}
            </h1>
            <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] z-0"></div>
        </section>
    )
}