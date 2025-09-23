
"use client";

import { AnimatedLogo } from "./AnimatedLogo";

export function LogoSection() {
    return (
        <section id="logo-animation" className="bg-background py-20 lg:py-24 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
                <AnimatedLogo />
            </div>
        </section>
    );
}