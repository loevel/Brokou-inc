
"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { services } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";
import { ServiceDetailCard } from "@/components/ui/ServiceDetailCard";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "services-header");
  const containerRef = useRef(null);

  const categories = services.reduce((acc, service) => {
      const category = service.category || "Autres";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {} as Record<string, typeof services>);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.service-card-animate');
      cards.forEach((card: any) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={containerRef}>
       <section className="relative py-24 md:py-32 bg-secondary">
        {headerImage && (
             <div className="absolute inset-0">
                <Image 
                    src={headerImage.imageUrl} 
                    alt={headerImage.description}
                    data-ai-hint={headerImage.imageHint}
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
             </div>
        )}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Nos Services
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Des solutions sur mesure pour accélérer votre croissance et votre innovation.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {Object.entries(categories).map(([category, servicesInCategory]) => (
            <div key={category} className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesInCategory.map((service) => (
                  <div key={service.id} className="service-card-animate">
                    <ServiceDetailCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
