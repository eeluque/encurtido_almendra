'use client'
import { useCallback, useEffect } from 'react'
import Image from 'next/image';
import onions from '@/public/images/encurtido.jpg';
import jar from '@/public/images/pickled-red-onions.jpg';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Autoscroll from 'embla-carousel-auto-scroll'

export default function Slideshow() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoscroll()]);
    console.log("this is the emblaAPI");
    console.log(emblaApi);
    console.log("this is the emblaRef")

    console.log(emblaRef);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className="embla" >
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide"><Image src={onions} alt='pickled red onioons' width={180} height={120}></Image></div>
                        <div className="embla__slide"><Image src={jar} alt='pickled red onioons' width={180} height={120}></Image></div>
                        <div className="embla__slide"><Image src={onions} alt='pickled red onioons' width={180} height={120}></Image></div>
                    </div>
                </div>
                <button className="embla__prev" onClick={scrollPrev}>
                    Prev
                </button>
                <button className="embla__next" onClick={scrollNext}>
                    Next
                </button>
            </div>
        </>
    )
}