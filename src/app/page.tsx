export const dynamic = "force-dynamic";
import Product_Tile from "./components/Product_Tile";
import dbProvider from "./db/index";
import { IProduct } from "./apis/products";
import Hero from "./components/Hero";

export default async function Home() {
  const db = new dbProvider();
  const products: IProduct[] = await db.getProducts();

  return (
    <>
      <Hero />
      <section
        id="catalogo"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
        aria-labelledby="catalogo-heading"
      >
        <div className="mb-10 max-w-2xl">
          <h2
            id="catalogo-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Nuestros productos
          </h2>
          <p className="mt-2 text-muted-foreground">
            Elegí un frasco y descubrí ingredientes, precio y recetas que combinan.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {products.map((product) => (
            <li key={product.id} className="list-none">
              <Product_Tile
                product_id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageURL={product.image_url}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
