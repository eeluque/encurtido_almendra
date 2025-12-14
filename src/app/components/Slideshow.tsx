'use client'
import { useCallback } from 'react'
import Image from 'next/image';
import onions from '@/public/images/encurtido.jpg';
import jar from '@/public/images/pickled-red-onions.jpg';
import useEmblaCarousel from 'embla-carousel-react';

export interface SlideshowProps {
    product_description: string | null;
}

export default function Slideshow({ product_description }: SlideshowProps) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 relative justify-center items-center w-full px-6 rounded-xl shadow-lg bg-fuchsia-100 my-2 p-4'>
            <div className='embla justify-self-center'>
                <div className='embla__viewport overflow-hidden grid' ref={emblaRef}>
                    <div className='embla__container items-center'>
                        <div className='embla__slide'><Image src={onions} alt='pickled red onions' width={180} height={120}></Image></div>
                        <div className="embla__slide"><Image src={jar} alt='pickled red onioons' width={180} height={120}></Image></div>
                        <div className="embla__slide"><Image src={onions} alt='pickled red onioons' width={180} height={120}></Image></div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center mt-3 italic'>{product_description}</p>
                <div className='flex relative'>
                    <button className="embla__prev p-2 text-gray-500 hover:text-rose-700 mx-auto" onClick={scrollPrev}>
                        ←
                    </button>
                    <button className="embla__next p-2 text-gray-500 hover:text-rose-700 mx-auto" onClick={scrollNext}>
                        →
                    </button>
                </div>
            </div>
        </div>
    )
}