import Image from "next/image";

interface ProductDetailTitleProps {
  product_name: string | undefined;
}

export default function ProductDetailTitle({ product_name }: ProductDetailTitleProps) {
  return (
    <section className="relative flex min-h-[200px] items-center justify-center overflow-hidden py-16 sm:min-h-[240px] sm:py-20">
      <Image
        src="/images/jars.jpg"
        alt=""
        className="object-cover"
        fill
        priority
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
          Producto
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {product_name ?? "Producto"}
        </h1>
      </div>
    </section>
  );
}
