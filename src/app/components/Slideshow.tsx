"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SlideshowProps {
  product_description: string | null;
  /** Heading for the text column (e.g. recipe detail vs product). */
  asideTitle?: string;
}

const slides = [
  { src: "/images/encurtido.jpg", alt: "Encurtido artesanal" },
  { src: "/images/pickled-red-onions.jpg", alt: "Cebolla encurtida" },
  { src: "/images/encurtido.jpg", alt: "Frasco de encurtido" },
];

export default function Slideshow({
  product_description,
  asideTitle = "Sobre este producto",
}: SlideshowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="grid gap-0 md:grid-cols-2 md:gap-0">
        <div className="relative bg-muted p-6 md:p-8">
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((s, i) => (
                <div className="embla__slide flex justify-center py-2" key={`${s.src}-${i}`}>
                  <div className="relative aspect-[4/3] w-full max-w-sm">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={scrollPrev}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={scrollNext}
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center border-t border-border p-6 md:border-t-0 md:border-l md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {asideTitle}
          </h3>
          <p className="mt-3 text-pretty text-base leading-relaxed text-card-foreground">
            {product_description ?? "Descripción disponible pronto."}
          </p>
        </div>
      </div>
    </div>
  );
}
