'use client';
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import clsx from "clsx";
import { IconMenu2 } from '@tabler/icons-react';
export default function Header() {

    let isShowing = true;

    function dropHamburger(): void {
        let isShowing: boolean = false;
    }

    return (
        <>
            <ul className={clsx('justify-start flex pt-6 pb-6 bg-slate-50 opacity-50', { 'sm:hidden md:grid-cols-2': isShowing })}>
                <li className='ml-6'>Inicio</li>
                <li className='ml-6'>Quienes somos</li>
                <li className='ml-6'>Recetas</li>
                <li className='ml-6'>Contactenos</li>
            </ul>
            <div className='sm:hidden'>
                <IconMenu2 />
            </div>
            <div className="bg-color-[#f0c7d9] w-full py-2 flex justify-center ">
                <Image
                    src={logo}
                    alt="Logo image"
                    width={180}
                    height={240}
                    priority
                />

            </div>

        </>
    );
}