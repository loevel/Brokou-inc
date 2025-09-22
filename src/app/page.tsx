
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredServices } from "@/lib/data";
import { HeroSection } from "@/components/ui/HeroSection";
import { ArrowRight, CheckCircle, Plus } from "lucide-react";
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
import Autoplay from "embla-carousel-autoplay"
import { Testimonials } from "@/components/ui/Testimonials";
import { testimonials } from "@/lib/testimonials";
import type { Service } from "@/lib/types";

const FeaturedServiceCard = ({ service }: { service: Service }) => {
  const serviceImage = placeholderImages.placeholderImages.find(p => p.id === service.imageId);

  return (
    <div className="bg-secondary rounded-2xl p-6 flex flex-col h-full relative">
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
        <Button size="icon" className="absolute bottom-4 right-4 rounded-full h-8 w-8 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70">
            <Plus className="h-4 w-4" />
        </Button>
    </div>
  )
}

export default function Home() {
  const whyChooseUsImage = placeholderImages.placeholderImages.find(p => p.id === "why-choose-us");
  const clients = clientImagesData.clientImages;
  const partners = placeholderImages.placeholderImages.filter(p => p.id.startsWith("partner-"));
  const tools = placeholderImages.placeholderImages.filter(p => p.id.startsWith("tool-"));


  return (
    <div className="flex flex-col">
      <HeroSection />

      <section id="services" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
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
                   <Link href={`/services/${service.id}`}>
                      <FeaturedServiceCard service={service} />
                   </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px] hidden md:inline-flex" />
            <CarouselNext className="right-[-50px] hidden md:inline-flex" />
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

      <section id="why-us" className="bg-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4">
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

      <section id="clients" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nos Clients
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous sommes fiers de collaborer avec des entreprises leaders de leur secteur.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem key={client.id} className="basis-1/4 md:basis-1/6 lg:basis-1/8 flex justify-center">
                  <div className="p-1">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="cta" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Card className="relative overflow-hidden max-w-4xl mx-auto bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-chart-1 to-accent opacity-80"></div>
            <CardContent className="p-0 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et
                découvrir comment nous pouvons vous aider à atteindre vos
                objectifs.
              </p>
              <div className="mt-8">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    Contactez-nous
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="tools" className="bg-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nos Outils de Prédilection
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous utilisons les meilleures technologies pour construire des solutions performantes.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {tools.map((tool) => (
                <CarouselItem key={tool.id} className="basis-1/4 md:basis-1/6 lg:basis-1/8 flex justify-center">
                  <div className="p-1">
                    <Image
                      src={tool.imageUrl}
                      alt={tool.description}
                      data-ai-hint={tool.imageHint}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="partners" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nos Partenaires
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous collaborons avec des partenaires de confiance pour offrir les meilleures solutions.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2200,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="basis-1/4 md:basis-1/6 lg:basis-1/8 flex justify-center">
                  <div className="p-1">
                    <Image
                      src={partner.imageUrl}
                      alt={partner.description}
                      data-ai-hint={partner.imageHint}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <Testimonials data={testimonials} />

    </div>
  );
}

    
