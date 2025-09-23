
"use client";

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

export function HeroSection() {
    const comp = useRef(null);
    const backgroundRef = useRef(null);

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
            });

             const colors = {
                color1: 'hsl(210, 40%, 96.1%)', // secondary
                color2: 'hsl(221, 83%, 53%)', // primary
                color3: 'hsl(0, 0%, 100%)',   // card
                color4: 'hsl(210, 100%, 98%)' // background
            };

        }, comp);
        
        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} className="relative bg-background text-foreground min-h-[95vh] flex flex-col justify-center overflow-hidden">
            <div ref={backgroundRef} className="absolute inset-0 bg-background z-0"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <p id="intro-text" className="text-primary font-semibold mb-2">BROKOU INC.</p>
                <h1 id="title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 max-w-4xl mx-auto">
                    Façonner l'Avenir du Numérique avec Innovation et Expertise
                </h1>
                <p id="subtitle" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Nous transformons les défis en opportunités grâce à des solutions technologiques de pointe et un partenariat stratégique.
                </p>
                <div id="cta-button">
                    <Button size="lg" asChild className="rounded-full">
                        <Link href="/contact">
                            Commencer un projet <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
