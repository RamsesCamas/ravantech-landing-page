import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sora = localFont({
  src: "./fonts/sora.woff2",
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

const nunito = localFont({
  src: "./fonts/nunito.woff2",
  variable: "--font-nunito",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "RavanTech - Soluciones Innovadoras en VR e IA",
  description: "Desarrollamos soluciones innovadoras con realidad virtual, mixta, aumentada, videojuegos e inteligencia artificial para transformar tu empresa."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta
          name="description"
          content="Desarrollamos soluciones innovadoras con realidad virtual, mixta, aumentada, videojuegos e inteligencia artificial para transformar tu empresa."
        />
      </head>
      <body className={`${sora.className} ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
};
