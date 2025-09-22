
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

interface TestimonialsProps {
  data: Testimonial[];
}

const DecorativeAvatar = ({ id, className }: { id: string; className: string }) => {
    const image = placeholderImages.placeholderImages.find(p => p.id === id);
    if (!image) return null;
    return (
        <div className={cn("absolute rounded-full overflow-hidden shadow-lg", className)}>
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
    const avatarsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!api) return;

        const handleScroll = () => {
            const scrollProgress = api.scrollProgress();
            avatarsRef.current.forEach((avatar, index) => {
                if (!avatar) return;
                gsap.to(avatar, {
                    rotate: scrollProgress * 360 * (index % 2 === 0 ? 1 : -1),
                    ease: "none"
                });
            });
        };

        api.on("scroll", handleScroll);

        return () => {
            api.off("scroll", handleScroll);
        };
    }, [api]);
    
  return (
    <section className="bg-secondary py-20 lg:py-32 relative overflow-hidden">
       <DecorativeAvatar id="testimonial-avatar-4" className="w-16 h-16 top-1/4 left-[5%]" ref={el => avatarsRef.current[0] = el} />
       <DecorativeAvatar id="testimonial-avatar-5" className="w-12 h-12 top-[15%] right-[8%]" ref={el => avatarsRef.current[1] = el} />
       <DecorativeAvatar id="testimonial-avatar-6" className="w-20 h-20 bottom-[10%] left-[15%]" ref={el => avatarsRef.current[2] = el} />
       <DecorativeAvatar id="testimonial-avatar-7" className="w-10 h-10 bottom-[20%] right-[12%]" ref={el => avatarsRef.current[3] = el} />


      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
            <Badge variant="outline" className="mb-4 bg-background">Témoignages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ce qu'ils disent de <span className="text-primary">BROKOU INC.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Découvrez les retours d'expérience de nos clients & partenaires.
            </p>
          </div>
          <div className="lg:w-2/3">
            <Carousel setApi={setApi} className="w-full" opts={{loop: true}}>
              <CarouselContent>
                {data.map((testimonial) => {
                  const avatar = placeholderImages.placeholderImages.find(p => p.id === testimonial.avatarImageId);
                  return (
                    <CarouselItem key={testimonial.id}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="p-8 text-center md:text-left">
                            <StarRating rating={testimonial.rating} className="mb-4 justify-center md:justify-start" />
                            <blockquote className="text-lg text-muted-foreground mb-6">
                              "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center justify-center md:justify-start gap-4">
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
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="mt-6 flex justify-center md:justify-start gap-2">
                <CarouselPrevious variant="outline" />
                <CarouselNext variant="outline" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

