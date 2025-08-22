import { IconBrandInstagram } from '@tabler/icons-react';

export default function Footer() {
    return (<>
        <footer className="bg-[#f0c7d9] text-white w-full h-28 bottom-0">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <p className="text-sm text-center md:text-left">
                    © {new Date().getFullYear()} Encurtidos Almendra. Derechos Reservados.
                </p>
                <div className="mt-4 md:mt-0">
                    <a
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-500 transition-colors duration-300"
                    />

                    <IconBrandInstagram size={24} />
                </div>
            </div>
        </footer>
    </>)
}