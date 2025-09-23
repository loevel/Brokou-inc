
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@/lib/types";
import { StarRating } from "./StarRating";
import placeholderImages from "@/lib/placeholder-images.json";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialsProps {
  data: Testimonial[];
}

const DecorativeAvatar = ({ id, className, delay = 0 }: { id: string; className: string, delay?: number }) => {
    const image = placeholderImages.placeholderImages.find(p => p.id === id);
    const el = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(el.current, {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotate: "random(-30, 30)",
                duration: 4,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay,
            });
        }, el);
        return () => ctx.revert();
    }, [delay]);

    if (!image) return null;
    return (
        <div ref={el} className={cn("absolute rounded-full overflow-hidden shadow-lg", className)}>
            <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
            />
        </div>
    );
};

export function Testimonials({ data }: TestimonialsProps) {
    const [api, setApi] = useState<CarouselApi>();
    
  return (
    <section className="bg-secondary min-h-[95vh] flex flex-col justify-center relative overflow-hidden">
       <DecorativeAvatar id="testimonial-avatar-4" className="w-16 h-16 top-1/4 left-[5%]" delay={0} />
       <DecorativeAvatar id="testimonial-avatar-5" className="w-12 h-12 top-[15%] right-[8%]" delay={1} />
       <DecorativeAvatar id="testimonial-avatar-6" className="w-20 h-20 bottom-[10%] left-[15%]" delay={0.5} />
       <DecorativeAvatar id="testimonial-avatar-7" className="w-10 h-10 bottom-[20%] right-[12%]" delay={1.5} />


      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ce qu'ils disent de nous
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Découvrez les retours d'expérience de nos clients & partenaires qui nous font confiance.
            </p>
        </div>
        <div className="mt-16">
            <Carousel 
                setApi={setApi} 
                className="w-full" 
                opts={{loop: true}}
                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnInteraction: true,
                    })
                ]}
            >
              <CarouselContent className="-ml-8">
                {data.map((testimonial) => {
                  const avatar = placeholderImages.placeholderImages.find(p => p.id === testimonial.avatarImageId);
                  return (
                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-8">
                      <Card className="h-full">
                          <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                            <StarRating rating={testimonial.rating} className="mb-4" />
                            <blockquote className="text-lg text-muted-foreground mb-6 flex-grow">
                              "{testimonial.quote}"
                            </blockquote>
                            <div className="flex flex-col items-center gap-2">
                              {avatar && (
                                <Image
                                  src={avatar.imageUrl}
                                  alt={avatar.description}
                                  data-ai-hint={avatar.imageHint}
                                  width={48}
                                  height={48}
                                  className="rounded-full"
                                />
                              )}
                              <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="mt-8 flex justify-center gap-2">
                <CarouselPrevious variant="outline" className="static translate-y-0" />
                <CarouselNext variant="outline" className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
      </div>
    </section>
  );
}
