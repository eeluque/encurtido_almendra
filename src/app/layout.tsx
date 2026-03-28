import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { inter } from "../app/fonts/fonts";


export const metadata: Metadata = {
  title: "Encurtidos Almendra",
  description: "Encurtidos artesanales: sabores intensos e ingredientes de calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
