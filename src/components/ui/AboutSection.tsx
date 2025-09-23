
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
        <section id="about-us-home" className="bg-secondary min-h-[95vh] flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-80 lg:h-[450px] rounded-lg overflow-hidden shadow-xl">
                        {aboutImage && (
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                data-ai-hint={aboutImage.imageHint}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Votre partenaire en excellence technologique
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Chez BROKOU INC., nous combinons expertise technique et vision stratégique pour transformer vos défis en opportunités. Notre mission est de vous accompagner avec des solutions innovantes et responsables.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-6">
                            {values.map(value => (
                                <div key={value.name} className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-md">
                                        <value.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="font-semibold">{value.name}</span>
                                </div>
                            ))}
                        </div>
                        <Button asChild className="mt-10" size="lg">
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
