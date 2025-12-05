'use client'
import Image from 'next/image';
import pickles from '../../public/images/pickles.jpg'
import { useState } from 'react';
export default function Hero() {

    let [currentlyShowing, showNext] = useState(0);

    function changeSlide() {

        switch (currentlyShowing) {
            case 0:
                currentlyShowing = 1;
                showNext(currentlyShowing);
                break;
            case 1:
                currentlyShowing = 2;
                showNext(currentlyShowing);
                break;
            case 2:
                currentlyShowing = 0;
                showNext(currentlyShowing);
                break;
            default:
                currentlyShowing = 0;
                showNext(currentlyShowing);
        }

    }
    setInterval(changeSlide, 5000);

    const bgImages: string[] = [
        "bg-[url('../public/images/pickles.jpg')]",
        "bg-[url('../public/images/onions.jpg')]",
        "bg-[url('../public/images/jars.jpg')]"
    ]

    return (<>
        <section className={`${bgImages[currentlyShowing]} text-shadow-white text-white bg-cover py-45 px-6 md:px-12 lg:px-24 duration-500`}>
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left md:max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-shadow-lg/30">
                        Sabores intensos, ingredientes de calidad — Descubre la perfección en cada encurtido.
                    </h1>
                </div>
            </div>
        </section>
    </>)
}
