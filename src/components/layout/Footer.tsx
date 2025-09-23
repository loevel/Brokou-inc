
"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const address = "3755 E Boul Matte, Brossard, QC J4Y 2P4, Canada";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                  <Image src="/logo.png" alt="Brokou Inc. Logo" width={140} height={40} />
                </Link>
                <p className="text-zinc-400 max-w-xs">
                  Solutions innovantes pour un monde en pleine transformation numérique.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li><Link href="/a-propos" className="text-zinc-400 hover:text-white transition-colors">À Propos</Link></li>
                  <li><Link href="/services" className="text-zinc-400 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/carrieres" className="text-zinc-400 hover:text-white transition-colors">Carrières</Link></li>
                  <li><Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/login" className="text-zinc-400 hover:text-white transition-colors">Espace Admin</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg mb-4">Contact</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-white mt-1" />
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{address}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-white" />
                    <a href="tel:5149141934" className="hover:text-white transition-colors">(514) 914-1934</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-white" />
                    <a href="mailto:contact@brokou.inc" className="hover:text-white transition-colors">contact@brokou.inc</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white text-lg mb-4">Suivez-nous</h3>
                <div className="flex items-center gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Twitter /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Linkedin /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Github /></a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-zinc-400">
              <p>&copy; {year} Brokou Inc. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
  );
}
