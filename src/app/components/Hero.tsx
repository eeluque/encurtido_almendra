"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const bgImages = ["/images/pickles.jpg", "/images/onions.jpg", "/images/jars.jpg"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % bgImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[min(72vh,520px)] w-full overflow-hidden">
      {bgImages.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt=""
          fill
          priority={i === 0}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "object-cover transition-opacity duration-1000 ease-out",
            index === i ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        />
      ))}

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-14 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          Hecho en casa · Ingredientes naturales
        </p>
        <h1 className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Sabores intensos, ingredientes de calidad — la perfección en cada encurtido.
        </h1>
        <p className="mt-4 max-w-lg text-pretty text-base text-white/90 sm:text-lg">
          Frascos artesanales listos para acompañar tus comidas favoritas.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#catalogo"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Ver productos
          </Link>
          <Link
            href="/recipes"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Ideas con recetas
          </Link>
        </div>

        <div className="mt-8 flex gap-2" role="tablist" aria-label="Diapositivas del banner">
          {bgImages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-label={`Imagen ${i + 1} de ${bgImages.length}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === i ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
