import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colegio Leonardo Da Vinci | Santa María, Boyacá",
  description:
    "Colegio Leonardo Da Vinci — Un Espacio para Sentir, Pensar y Crear. Institución educativa en Santa María, Boyacá, Colombia.",
  keywords: ["colegio", "Leonardo Da Vinci", "Santa María", "Boyacá", "Colombia", "educación"],
  openGraph: {
    title: "Colegio Leonardo Da Vinci",
    description: "Un Espacio para Sentir, Pensar y Crear",
    siteName: "Colegio Leonardo Da Vinci",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
