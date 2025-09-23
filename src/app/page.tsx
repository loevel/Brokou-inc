

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
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { AboutSection } from "@/components/ui/AboutSection";
import { JobsSection } from "@/components/ui/JobsSection";
import { HeroSection } from "@/components/ui/HeroSection";

export default function Home() {
  const whyChooseUsImage = placeholderImages.placeholderImages.find(p => p.id === "why-choose-us");
  const clients = clientImagesData.clientImages;
  const partners = placeholderImages.placeholderImages.filter(p => p.id.startsWith("partner-"));
  const tools = placeholderImages.placeholderImages.filter(p => p.id.startsWith("tool-"));
  
  const mainRef = useRef(null);

  const LogoCarousel = ({ items, delay }: { items: {id: string, src?: string, imageUrl?: string, alt?: string, description?: string, imageHint?: string}[], delay: number }) => (
    <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay, stopOnInteraction: false })]}
        className="w-full max-w-6xl mx-auto"
    >
        <CarouselContent>
            {items.map((item) => (
                <CarouselItem key={item.id} className="basis-1/4 md:basis-1/6 lg:basis-1/8 flex justify-center">
                    <div className="p-1 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                        <Image
                            src={item.src || item.imageUrl!}
                            alt={item.alt || item.description!}
                            data-ai-hint={item.imageHint}
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
);


  return (
    <div ref={mainRef} className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />

      <section id="why-us" className="relative bg-secondary min-h-[95vh] flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Pourquoi choisir Brokou Inc ?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Nous nous engageons à fournir une excellence inégalée et des
                résultats qui comptent. Notre approche est construite sur des
                piliers solides qui garantissent votre succès.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Expertise Prouvée</h3>
                    <p className="text-muted-foreground">
                      Notre équipe est composée d'experts de l'industrie avec des
                      années d'expérience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Approche Centrée sur le Client
                    </h3>
                    <p className="text-muted-foreground">
                      Nous plaçons vos besoins au cœur de tout ce que nous
                      faisons, assurant des solutions sur mesure.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Innovation Continue</h3>
                    <p className="text-muted-foreground">
                      Nous restons à la pointe de la technologie pour vous offrir
                      les solutions les plus avancées.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full h-80 lg:h-96 relative">
              {whyChooseUsImage && (
                <Image
                  src={whyChooseUsImage.imageUrl}
                  alt={whyChooseUsImage.description}
                  data-ai-hint={whyChooseUsImage.imageHint}
                  fill
                  className="rounded-lg object-cover shadow-xl"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Testimonials data={testimonials} />

      <JobsSection />

      <section id="ecosystem" className="bg-background min-h-[95vh] flex flex-col justify-center">
          <div className="container mx-auto px-4">
              <Tabs defaultValue="clients" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                      <TabsTrigger value="clients">Nos Clients</TabsTrigger>
                      <TabsTrigger value="tools">Nos Outils</TabsTrigger>
                      <TabsTrigger value="partners">Nos Partenaires</TabsTrigger>
                  </TabsList>
                  <TabsContent value="clients" className="pt-16">
                      <LogoCarousel items={clients} delay={2000} />
                  </TabsContent>
                  <TabsContent value="tools" className="pt-16">
                       <LogoCarousel items={tools} delay={2500} />
                  </TabsContent>
                  <TabsContent value="partners" className="pt-16">
                      <LogoCarousel items={partners} delay={2200} />
                  </TabsContent>
              </Tabs>
          </div>
      </section>

      <section id="cta" className="min-h-[95vh] flex flex-col justify-center bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <Card 
            className="relative overflow-hidden max-w-4xl mx-auto bg-card text-card-foreground p-8 md:p-12 shadow-2xl rounded-3xl"
          >
            <CardContent className="p-0 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et
                découvrir comment nous pouvons vous aider à atteindre vos
                objectifs.
              </p>
              <div className="mt-8">
                <Button variant="default" size="lg" asChild className="rounded-full">
                  <Link href="/contact">
                    Contactez-nous
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
    </div>
  );
}
