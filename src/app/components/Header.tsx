'use client';
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import clsx from "clsx";
import { IconMenu2 } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';
export default function Header() {

    let [keepHidden, setKeepHidden] = useState(true);

    function dropHamburger(): void {
        keepHidden == true ? setKeepHidden(false) : setKeepHidden(true);
    }

    return (
        <>
            <ul className={clsx('justify-start flex pt-2 pb-2 bg-slate-50 opacity-50 max-sm:hidden')}>
                <li className='ml-6 p-2 hover:underline'><Link href="/">Inicio</Link></li>
                <li className='ml-6 p-2 hover:underline'><Link href="/contact">Quienes somos</Link></li>
                <li className='ml-6 p-2 hover:underline'><Link href="/recipes">Recetas</Link></li>
                <li className='ml-6 p-2 hover:underline'><Link href="/contact">Contactenos</Link></li>
            </ul>
            <div className='sm:hidden bg-slate-50 p-2'>

                <button onClick={dropHamburger}>
                    <IconMenu2 />
                </button>

            </div>
            <div className="bg-color-[#f0c7d9] w-full flex justify-center ">
                <Image
                    src={logo}
                    alt="Logo image"
                    width={180}
                    height={240}
                    priority
                />
            </div>
            <ul className={clsx('pt-6 pb-6 bg-slate-50 opacity-50 sm:hidden justify-items-center-safe', { 'hidden': keepHidden })}>
                <li className='p-1 hover:underline' onClick={dropHamburger}><Link href="/">Inicio</Link></li>
                <li className='p-1 hover:underline' onClick={dropHamburger}><Link href="/contact">Quienes somos</Link></li>
                <li className='p-1 hover:underline' onClick={dropHamburger}><Link href="/recipes">Recetas</Link></li>
                <li className='p-1 hover:underline' onClick={dropHamburger}><Link href="/contact">Contactenos</Link></li>
            </ul>

        </>
    );
}