import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "BROKOU INC",
  description: "Site vitrine de BROKOU INC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <head>
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
