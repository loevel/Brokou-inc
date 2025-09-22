
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
                color1: 'hsl(221, 83%, 53%)', // primary
                color2: 'hsl(45, 100%, 51%)', // accent
                color3: 'hsl(0, 72%, 51%)', // chart-1
                color4: 'hsl(88, 57%, 50%)', // chart-2
            };

            gsap.timeline({ repeat: -1, yoyo: true })
                .to(colors, { color1: 'hsl(45, 100%, 51%)', duration: 5, ease: "sine.inOut" })
                .to(colors, { color2: 'hsl(0, 72%, 51%)', duration: 5, ease: "sine.inOut" }, "<")
                .to(colors, { color3: 'hsl(88, 57%, 50%)', duration: 5, ease: "sine.inOut" }, "<")
                .to(colors, { color4: 'hsl(221, 83%, 53%)', duration: 5, ease: "sine.inOut" }, "<");

            gsap.ticker.add(() => {
                if (backgroundRef.current) {
                    gsap.set(backgroundRef.current, {
                        backgroundImage: `radial-gradient(circle at top left, ${colors.color1}, transparent 40%), radial-gradient(circle at bottom right, ${colors.color2}, transparent 40%), radial-gradient(circle at top right, ${colors.color3}, transparent 30%), radial-gradient(circle at bottom left, ${colors.color4}, transparent 50%)`
                    });
                }
            });


        }, comp);
        
        return () => ctx.revert();
    }, []);

    return (
        <section ref={comp} className="relative bg-background text-foreground py-20 md:py-32 lg:py-40 overflow-hidden">
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
                    <Button size="lg" asChild>
                        <Link href="/contact">
                            Commencer un projet <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
