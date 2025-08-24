'use client'
import Image from 'next/image';
import pickles from '../../public/images/pickles.jpg'
import { useState } from 'react';
export default function Hero() {

    //let [currentlyShowing, showNext] = useState(currentlyShowing);




    const bgImages: Record<string, string> = {
        pickles: "bg-[url('../public/images/pickles.jpg')]",
        onions: "bg-[url('../public/images/onions.jpg')]"
    }
    return (<>
        <section className={`${bgImages.pickles} text-shadow-white text-white bg-cover py-45 px-6 md:px-12 lg:px-24`}>
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="text-center md:text-left md:max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-shadow-lg/30">
                        Sabores intensos, ingredientes de calidad — Descubre la perfección en cada encurtido.
                    </h1>
                </div>
            </div>
        </section>
    </>)
}