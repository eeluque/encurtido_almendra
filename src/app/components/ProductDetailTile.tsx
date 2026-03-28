import Image from "next/image";

const FALLBACK = "/images/encurtido.jpg";

function resolveSrc(imageURL?: string) {
  const t = imageURL?.trim();
  if (t && t.length > 0) return t;
  return FALLBACK;
}

interface ProductDetailTileProps {
  id?: number;
  name?: string;
  price?: string;
  imageURL?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function ProductDetailTile(props: ProductDetailTileProps) {
  const src = resolveSrc(props.imageURL);
  const remote = src.startsWith("http");

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-muted sm:max-w-none">
        <Image
          src={src}
          alt={props.name ?? "Producto"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          unoptimized={remote}
        />
      </div>
      <div className="space-y-3 p-6 sm:p-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
            {props.name}
          </h2>
          {props.description ? (
            <p className="mt-3 text-pretty text-muted-foreground leading-relaxed">
              {props.description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap items-baseline gap-2 border-t border-border pt-4">
          <span className="text-sm font-medium text-muted-foreground">Precio</span>
          <span className="text-2xl font-bold tabular-nums text-primary">
            {props.price} Lps
          </span>
        </div>
        {props.children}
      </div>
    </div>
  );
}
