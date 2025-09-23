
"use client";

import { useRef } from 'react';
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

const FeaturedServiceCard = ({ service }: { service: Service }) => {
  const serviceImage = placeholderImages.placeholderImages.find(p => p.id === service.imageId);

  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col h-full relative text-card-foreground transition-all duration-300 hover:bg-card/90 hover:border-primary">
        <p className="text-sm font-semibold text-muted-foreground">{service.category}</p>
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
        <Button size="icon" asChild className="absolute bottom-4 right-4 rounded-full h-8 w-8 bg-secondary backdrop-blur-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            <Link href={`/services/${service.id}`}>
              <Plus className="h-4 w-4" />
            </Link>
        </Button>
    </div>
  )
}

export function ServicesSection() {
    const sectionRef = useRef(null);

    return (
        <section id="services" ref={sectionRef} className="relative bg-background min-h-[95vh] flex flex-col justify-center overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Découvrez nos services
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
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
                                <FeaturedServiceCard service={service} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-50px] hidden md:inline-flex" />
                    <CarouselNext className="right-[-50px] hidden md:inline-flex" />
                </Carousel>
                <div className="text-center mt-16">
                    <Button asChild size="lg">
                        <Link href="/services">
                            Découvrir tous nos services <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
