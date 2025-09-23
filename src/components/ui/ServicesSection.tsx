
"use client";

import { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus } from 'lucide-react';
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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedServiceCard = ({ service }: { service: Service }) => {
  const serviceImage = placeholderImages.placeholderImages.find(p => p.id === service.imageId);

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col h-full relative text-card-foreground transition-all duration-300 hover:bg-card/60 hover:border-white/20">
        <p className="text-sm font-semibold text-muted-foreground">{service.category}</p>
        <h3 className="text-2xl font-bold mt-1 mb-4 text-white">{service.name}</h3>
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
        <Button size="icon" asChild className="absolute bottom-6 right-6 rounded-full h-10 w-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
            <Link href={`/services/${service.id}`}>
              <Plus className="h-5 w-5" />
            </Link>
        </Button>
    </div>
  )
}

export function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(sectionRef.current, {
                background: "linear-gradient(135deg, hsl(220, 15%, 20%), hsl(210, 15%, 15%))",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="relative bg-zinc-900 min-h-[95vh] flex flex-col justify-center overflow-hidden text-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Découvrez nos services
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Des solutions sur mesure, conçues pour répondre aux défis complexes de votre entreprise et pour catalyser votre croissance.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-8">
                        {featuredServices.map((service) => (
                            <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3 pl-8">
                                <FeaturedServiceCard service={service} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                     <div className="mt-12 flex justify-center">
                        <CarouselPrevious variant="outline" className="static translate-y-0 text-white bg-white/10 border-white/20 hover:bg-white/20 hover:text-white" />
                        <CarouselNext variant="outline" className="static translate-y-0 ml-4 text-white bg-white/10 border-white/20 hover:bg-white/20 hover:text-white" />
                    </div>
                </Carousel>
                <div className="text-center mt-16">
                    <Button asChild size="lg" variant="secondary" className="rounded-full">
                        <Link href="/services">
                            Découvrir tous nos services <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
