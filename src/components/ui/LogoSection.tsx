
"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedLogo = () => {
    const logoRef = useRef<SVGSVGElement>(null);

    useLayoutEffect(() => {
        const logo = logoRef.current;
        if (!logo) return;

        const letters = logo.querySelectorAll('path');
        const timeline = gsap.timeline({
            defaults: { duration: 1, ease: 'power2.inOut' },
            repeat: -1,
            repeatDelay: 2,
            yoyo: true,
        });

        letters.forEach((letter, index) => {
            const length = letter.getTotalLength();
            gsap.set(letter, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0,
            });
            timeline.to(letter, {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.inOut'
            }, index * 0.2);
        });

    }, []);

    return (
        <svg ref={logoRef} width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_105_2)">
            <path d="M23.0132 5.09375C23.0132 10.9715 17.854 15.6875 11.5066 15.6875C5.15918 15.6875 0 10.9715 0 5.09375C0 -0.783984 5.15918 -5.5 11.5066 -5.5C17.854 -5.5 23.0132 -0.783984 23.0132 5.09375Z" transform="translate(42.583 34.6875)" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <path d="M23.0132 5.09375C23.0132 10.9715 17.854 15.6875 11.5066 15.6875C5.15918 15.6875 0 10.9715 0 5.09375C0 -0.783984 5.15918 -5.5 11.5066 -5.5C17.854 -5.5 23.0132 -0.783984 23.0132 5.09375Z" transform="translate(100.833 34.6875)" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <path d="M12.3929 57.6875L0.244141 34.5938H6.5501L15.5391 52.4375L15.6823 51.6875V34.5938H21.4915V57.6875H15.013L6.02402 39.8438L5.88086 40.5938V57.6875H0.071582L0.244141 57.6875H12.3929Z" transform="translate(142.149 11.0938)" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <path d="M23.0132 5.09375C23.0132 10.9715 17.854 15.6875 11.5066 15.6875C5.15918 15.6875 0 10.9715 0 5.09375C0 -0.783984 5.15918 -5.5 11.5066 -5.5C17.854 -5.5 23.0132 -0.783984 23.0132 5.09375Z" transform="translate(169.833 34.6875)" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <path d="M19.1995 57.6875L19.1995 34.5938L33.9104 34.5938L33.9104 39.6875L25.0482 39.6875L25.0482 44.5938L32.7415 44.5938L32.7415 49.6875L25.0482 49.6875L25.0482 52.5938L34.1995 52.5938L34.1995 57.6875L19.1995 57.6875Z" transform="translate(68.583 11.0938)" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <path d="M19.1995 57.6875L19.1995 34.5938L33.9104 34.5938L33.9104 39.6875L25.0482 39.6875L25.0482 44.5938L32.7415 44.5938L32.7415 49.6875L25.0482 49.6875L25.0482 52.5938L34.1995 52.5938L34.1995 57.6875L19.1995 57.6875Z" transform="translate(193.583 11.0938)" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <path d="M34.5126 57.6875L23.4102 43.5938L34.2235 34.5938H26.5302L18.4286 42.0938V34.5938H12.6194V57.6875H18.4286V49.5938L26.8194 57.6875H34.5126Z" transform="translate(120.149 11.0938)" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <path d="M34.5126 57.6875L23.4102 43.5938L34.2235 34.5938H26.5302L18.4286 42.0938V34.5938H12.6194V57.6875H18.4286V49.5938L26.8194 57.6875H34.5126Z" transform="translate(220.149 11.0938)" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <path d="M22.0132 5.09375C22.0132 10.9715 17.0809 15.6875 11.0066 15.6875C4.93232 15.6875 0 10.9715 0 5.09375C0 -0.783984 4.93232 -5.5 11.0066 -5.5C17.0809 -5.5 22.0132 -0.783984 22.0132 5.09375Z" transform="translate(254.583 34.6875)" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </g>
          <defs>
            <clipPath id="clip0_105_2">
              <rect width="300" height="80" fill="white"/>
            </clipPath>
          </defs>
        </svg>
    );
};

export function LogoSection() {
    return (
        <section className="bg-background py-16 flex items-center justify-center">
            <AnimatedLogo />
        </section>
    );
}
