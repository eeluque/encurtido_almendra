import Link from "next/link";
import { IconBrandInstagram } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} Encurtidos Almendra. Todos los derechos reservados.
        </p>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/30 hover:bg-accent/40"
          aria-label="Instagram"
        >
          <IconBrandInstagram size={20} stroke={1.5} aria-hidden />
          Instagram
        </Link>
      </div>
    </footer>
  );
}
