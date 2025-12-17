'use client'
import Image from 'next/image';
import pickles from '@/public/images/pickles.jpg'
import onions from "@/public/images/onions.jpg"
import jars from "@/public/images/jars.jpg"
import { useState, useEffect } from 'react';

export default function Hero(): ReturnType<React.FC> {

    const bgImages = [pickles, onions, jars];

    let [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);



    return (

        <section className="relative h-[480px] w-full overflow-hidden text-white">
            {
                bgImages.map((img, i) => {
                    return <Image
                        key={i}
                        src={img}
                        alt='Hero background'
                        fill
                        priority={i === 0}
                        loading={i === 0 ? "eager" : "lazy"}
                        className={`object-cover transition-opacity duration-700 ${index === i ? "opacity-100" : "opacity-0"
                            }`}
                    ></Image>
                })
            }

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-shadow-lg/30">
                    Sabores intensos, ingredientes de calidad — Descubre la perfección en cada encurtido.
                </h1>
            </div>
            <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] z-0"></div>
        </section>
    )
}
