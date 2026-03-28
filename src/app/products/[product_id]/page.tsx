export const dynamic = "force-dynamic";
import dbProvider from "@/app/db";
import ProductDetailTile from "@/app/components/ProductDetailTile";
import Slideshow from "@/app/components/Slideshow";
import Recipes from "@/app/components/Recipes";
import ProductDetailTitle from "@/app/components/ProductDetailTitle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const { product_id: productIdParam } = await params;
  const product_id = Number(productIdParam);

  if (!productIdParam || Number.isNaN(product_id)) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <p className="text-muted-foreground">Este producto no está disponible.</p>
        <Link
          href="/"
          className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  const db = new dbProvider();
  const product = await db.getProductById(product_id);

  if (!product) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <p className="text-muted-foreground">No encontramos este producto.</p>
        <Link
          href="/#catalogo"
          className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <>
      <ProductDetailTitle product_name={product.name} />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/#catalogo"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Volver al catálogo
        </Link>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <ProductDetailTile
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageURL={product.image_url}
          />
          <div className="space-y-8">
            <Slideshow product_description={product.description ?? null} />
            <Recipes product_id={product.id} />
          </div>
        </div>
      </div>
    </>
  );
}
