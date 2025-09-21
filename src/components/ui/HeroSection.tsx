"use client";

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

export function HeroSection() {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from("#intro-text", {
                opacity: 0,
                y: '+=30',
                duration: 1,
                ease: 'power3.out'
            })
            .from("#title", {
                opacity: 0,
                y: '+=30',
                duration: 1,
                delay: -0.8,
                ease: 'power3.out'
            })
            .from("#subtitle", {
                opacity: 0,
                y: '+=30',
                duration: 1,
                delay: -0.8,
                ease: 'power3.out'
            })
            .from("#cta-button", {
                opacity: 0,
                y: '+=30',
                duration: 1,
                delay: -0.8,
                ease: 'power3.out'
            })
        }, comp);
        
        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} className="relative bg-secondary py-20 md:py-32 lg:py-40 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <p id="intro-text" className="text-primary font-semibold mb-2">BROKOU INC.</p>
                <h1 id="title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 max-w-4xl mx-auto">
                    Façonner l'Avenir du Numérique avec Innovation et Expertise
                </h1>
                <p id="subtitle" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Nous transformons les défis en opportunités grâce à des solutions technologiques de pointe et un partenariat stratégique.
                </p>
                <div id="cta-button">
                    <Button size="lg" asChild>
                        <Link href="/contact">
                            Commencer un projet <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
            <style jsx>{`
                .bg-grid-slate-900\\[\\[0\\.04\\]] {
                    background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px);
                    background-size: 40px 40px;
                    mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%);
                }
                .dark .bg-grid-slate-400\\[\\[0\\.05\\]] {
                    background-image: linear-gradient(hsla(0,0%,100%,.05) 1px, transparent 1px), linear-gradient(to right, hsla(0,0%,100%,.05) 1px, transparent 1px);
                }
            `}</style>
        </section>
    );
}
