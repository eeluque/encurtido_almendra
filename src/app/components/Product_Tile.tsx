import Image from "next/image";
import Link from "next/link";

const FALLBACK = "/images/encurtido.jpg";

function resolveSrc(imageURL?: string) {
  const t = imageURL?.trim();
  if (t && t.length > 0) return t;
  return FALLBACK;
}

interface ProductTileProps {
  product_id?: number;
  name?: string;
  price?: string;
  imageURL?: string;
  description?: string;
}

export default function Product_Tile(props: ProductTileProps) {
  const href = `/products/${props.product_id}`;
  const src = resolveSrc(props.imageURL);
  const remote = src.startsWith("http");

  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
          <Image
            src={src}
            alt={props.name ?? "Producto"}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized={remote}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5 text-left">
          <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-card-foreground transition-colors group-hover:text-primary">
            {props.name}
          </h3>
          {props.description ? (
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {props.description}
            </p>
          ) : null}
          <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/60 pt-4">
            <p className="text-lg font-bold tabular-nums text-primary">{props.price} Lps</p>
            <span className="shrink-0 text-sm font-medium text-muted-foreground transition group-hover:text-foreground">
              Ver detalles →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
