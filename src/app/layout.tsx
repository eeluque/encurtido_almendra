import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Encurtidos Almendra",
  description: "Los mejores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
