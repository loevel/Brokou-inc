
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Recycle, Users, Share } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";

export function AboutSection() {
    const aboutImage = placeholderImages.placeholderImages.find(p => p.id === "home-about-us");

    const values = [
        { name: 'Équité', icon: Scale },
        { name: 'Économie', icon: Recycle },
        { name: 'Collaboration', icon: Users },
        { name: 'Partage', icon: Share }
    ];

    return (
        <section id="about-us-home" className="bg-secondary min-h-[95vh] flex flex-col justify-center py-20 lg:py-24 relative overflow-hidden">
             {aboutImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={aboutImage.imageUrl}
                        alt={aboutImage.description}
                        data-ai-hint={aboutImage.imageHint}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"></div>
                </div>
            )}
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Votre partenaire en excellence technologique
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                        Chez BROKOU INC., nous combinons expertise technique et vision stratégique pour transformer vos défis en opportunités. Notre mission est de vous accompagner avec des solutions innovantes et responsables.
                    </p>
                    <div className="mt-10">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/a-propos">
                                En savoir plus sur nous <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
