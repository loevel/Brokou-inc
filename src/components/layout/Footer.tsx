
"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const address = "3755 E Boul Matte, Brossard, QC J4Y 2P4, Canada";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // This effect runs only on the client, ensuring the year is updated
    // after the initial server render, preventing a hydration mismatch.
    setYear(new Date().getFullYear());
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const elements = gsap.utils.toArray('.footer-anim-item');
        elements.forEach((el: any) => {
            gsap.from(el, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    toggleActions: 'play none none none',
                }
            });
        });
    }, footerRef);
    return () => ctx.revert();
  }, []);
  
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800" ref={footerRef}>
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col footer-anim-item">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                  <Image src="/logo.png" alt="Brokou Inc. Logo" width={140} height={40} />
                </Link>
                <p className="text-zinc-400 max-w-xs">
                  Solutions d'affaires durables et innovantes pour un monde en pleine transformation numérique.
                </p>
              </div>

              <div className="footer-anim-item">
                <h3 className="font-semibold text-white text-lg mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li><Link href="/a-propos" className="text-zinc-400 hover:text-white transition-colors">À Propos</Link></li>
                  <li><Link href="/services" className="text-zinc-400 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/carrieres" className="text-zinc-400 hover:text-white transition-colors">Carrières</Link></li>
                  <li><Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-anim-item">
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
              
              <div className="footer-anim-item">
                <h3 className="font-semibold text-white text-lg mb-4">Suivez-nous</h3>
                <div className="flex items-center gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Twitter /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Linkedin /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Github /></a>
                </div>
                 <h3 className="font-semibold text-white text-lg mt-6 mb-4">Légal</h3>
                 <ul className="space-y-2">
                    <li><Link href="/conditions-d-utilisation" className="text-zinc-400 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
                    <li><Link href="/politique-de-confidentialite" className="text-zinc-400 hover:text-white transition-colors">Politique de confidentialité</Link></li>
                    <li><Link href="/eco-responsable" className="text-zinc-400 hover:text-white transition-colors">Une entreprise éco-responsable</Link></li>
                    <li><Link href="/login" className="text-zinc-400 hover:text-white transition-colors">Espace Admin</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-zinc-400 footer-anim-item">
              <p>&copy; {year} Brokou Inc. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
  );
}
