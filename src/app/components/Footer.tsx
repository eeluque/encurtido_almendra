import { IconBrandInstagram } from '@tabler/icons-react';

export default function Footer() {
    return (
        <footer className="text-white w-full h-28 bottom-0 flex items-center gap-2 text-center mx-auto justify-center">
            <div className="text-sm">
                © {new Date().getFullYear()} Encurtidos Almendra. Derechos Reservados.
            </div>

            <IconBrandInstagram size={24} />
        </footer>
    )
}