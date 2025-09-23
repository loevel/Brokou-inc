
"use client";

import { useRef } from 'react';
import { AnimatedLogo } from '@/components/ui/AnimatedLogo';

export function LogoSection() {
    const comp = useRef(null);
    return (
        <section ref={comp} className="relative bg-background text-foreground min-h-[95vh] flex flex-col justify-center overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <AnimatedLogo />
            </div>
        </section>
    );
}
