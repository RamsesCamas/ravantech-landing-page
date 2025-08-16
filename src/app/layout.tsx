import type { Metadata } from "next";
import { Sora, Nunito_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap"
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap"
});

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
    <html lang="es">
      <body
        className={`${sora.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};