

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import placeholderImages from "@/lib/placeholder-images.json";
import clientImagesData from "@/lib/client-images.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Autoplay from "embla-carousel-autoplay"
import { Testimonials } from "@/components/ui/Testimonials";
import { testimonials } from "@/lib/testimonials";
import { ServicesSection } from "@/components/ui/ServicesSection";

import { AboutSection } from "@/components/ui/AboutSection";
import { JobsSection } from "@/components/ui/JobsSection";
import { HeroSection } from "@/components/ui/HeroSection";


export default function HomePage() {
  const partners = placeholderImages.placeholderImages.filter(img => img.id.startsWith('partner-'));
  const clients = clientImagesData.clientImages;
  const tools = placeholderImages.placeholderImages.filter(img => img.id.startsWith('tool-'));

  const carouselPlugins = [
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  ]

  return (
    <div>
      <HeroSection />
     

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
            <Tabs defaultValue="partners" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-10">
                    <TabsTrigger value="partners">Nos partenaires</TabsTrigger>
                    <TabsTrigger value="clients">Nos clients</TabsTrigger>
                    <TabsTrigger value="tools">Nos outils</TabsTrigger>
                </TabsList>
                <TabsContent value="partners">
                    <Carousel plugins={carouselPlugins} opts={{ loop: true, align: "start" }}>
                        <CarouselContent className="-ml-4">
                            {partners.map(image => (
                                <CarouselItem key={image.id} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                                    <div className="p-1">
                                        <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-2">
                                             <Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} width={60} height={60} className="grayscale hover:grayscale-0 transition-all" />
                                        </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </TabsContent>
                <TabsContent value="clients">
                   <Carousel plugins={carouselPlugins} opts={{ loop: true, align: "start" }}>
                        <CarouselContent className="-ml-4">
                            {clients.map(image => (
                                <CarouselItem key={image.id} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                                    <div className="p-1">
                                        <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-2">
                                             <Image src={image.src} alt={image.alt} data-ai-hint="client logo" width={60} height={60} className="grayscale hover:grayscale-0 transition-all" />
                                        </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </TabsContent>
                <TabsContent value="tools">
                    <Carousel plugins={carouselPlugins} opts={{ loop: true, align: "start" }}>
                        <CarouselContent className="-ml-4">
                            {tools.map(image => (
                                <CarouselItem key={image.id} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                                    <div className="p-1">
                                        <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-2">
                                             <Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} width={60} height={60} className="grayscale hover:grayscale-0 transition-all" />
                                        </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </TabsContent>
            </Tabs>
        </div>
      </section>

      <AboutSection />
      
      <ServicesSection />
      
      <Testimonials data={testimonials} />
      
      <JobsSection />

      <section className="bg-primary">
          <div className="container mx-auto px-4 py-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">Prêt à transformer votre entreprise ?</h2>
              <Button variant="secondary" size="lg" asChild className="rounded-full">
                  <Link href="/contact">Contactez-nous <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
          </div>
      </section>

    </div>
  );
}
