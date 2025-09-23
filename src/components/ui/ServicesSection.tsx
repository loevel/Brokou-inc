
"use client";

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus } from 'lucide-react';
import { gsap } from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { featuredServices } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";
import Image from "next/image";
import type { Service } from "@/lib/types";

const FeaturedServiceCard = ({ service }: { service: Service }) => {
  const serviceImage = placeholderImages.placeholderImages.find(p => p.id === service.imageId);

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col h-full relative text-white transition-all duration-300 hover:bg-white/20">
        <p className="text-sm font-semibold text-white/70">{service.category}</p>
        <h3 className="text-2xl font-bold mt-1 mb-4">{service.name}</h3>
        {serviceImage && (
            <div className="relative flex-grow min-h-[250px] mt-auto">
                <Image
                    src={serviceImage.imageUrl}
                    alt={serviceImage.description}
                    data-ai-hint={serviceImage.imageHint}
                    fill
                    className="object-contain"
                />
            </div>
        )}
        <Button size="icon" asChild className="absolute bottom-4 right-4 rounded-full h-8 w-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
            <Link href={`/services/${service.id}`}>
              <Plus className="h-4 w-4" />
            </Link>
        </Button>
    </div>
  )
}

export function ServicesSection() {
    const sectionRef = useRef(null);
    const backgroundRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const colors = {
                color1: 'hsl(221, 83%, 53%)', // primary
                color2: 'hsl(45, 100%, 51%)', // accent
                color3: 'hsl(0, 72%, 51%)', // chart-1
                color4: 'hsl(88, 57%, 50%)', // chart-2
            };

            gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration: 10, ease: "sine.inOut" } })
                .to(colors, { color1: 'hsl(0, 72%, 51%)', color2: 'hsl(221, 83%, 53%)', color3: 'hsl(88, 57%, 50%)', color4: 'hsl(45, 100%, 51%)' })
                .to(colors, { color1: 'hsl(88, 57%, 50%)', color2: 'hsl(0, 72%, 51%)', color3: 'hsl(45, 100%, 51%)', color4: 'hsl(221, 83%, 53%)' }, '+=2');

            gsap.ticker.add(() => {
                if (backgroundRef.current) {
                    gsap.set(backgroundRef.current, {
                        backgroundImage: `radial-gradient(circle at top left, ${colors.color1}, transparent 50%), radial-gradient(circle at bottom right, ${colors.color2}, transparent 50%), radial-gradient(circle at top right, ${colors.color3}, transparent 40%), radial-gradient(circle at bottom left, ${colors.color4}, transparent 60%)`
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="relative py-20 lg:py-32 bg-background overflow-hidden">
            <div ref={backgroundRef} className="absolute inset-0 z-0 bg-gray-900 opacity-80"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Découvrez nos services
                    </h2>
                    <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
                        Des solutions sur mesure, conçues pour répondre aux défis complexes de votre entreprise et pour catalyser votre croissance.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {featuredServices.map((service) => (
                            <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                <Link href={`/services/${service.id}`} className="block h-full">
                                    <FeaturedServiceCard service={service} />
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-50px] hidden md:inline-flex bg-white/20 border-white/30 hover:bg-white/30 text-white" />
                    <CarouselNext className="right-[-50px] hidden md:inline-flex bg-white/20 border-white/30 hover:bg-white/30 text-white" />
                </Carousel>
                <div className="text-center mt-16">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/services">
                            Découvrir tous nos services <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
