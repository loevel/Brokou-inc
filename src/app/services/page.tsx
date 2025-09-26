
"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { services } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";
import { ServiceDetailCard } from "@/components/ui/ServiceDetailCard";
import { OrganizationalStructure } from '@/components/ui/OrganizationalStructure';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "services-header");
  const mainRef = useRef<HTMLDivElement>(null);

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
      
      const sections = gsap.utils.toArray<HTMLElement>('.category-section-heading');
      sections.forEach((section, index) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });
      });


    }, mainRef);

    return () => ctx.revert();
  }, []);


  return (
    <div>
       <section className="relative flex items-center justify-center min-h-[95vh] bg-secondary">
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

      <div ref={mainRef} className="transition-colors duration-1000 ease-in-out">
        {Object.entries(categories).map(([category, servicesInCategory], index) => {
          if (category === "Services pour portables & ordinateurs") {
              const orgStructureItems = servicesInCategory.map(service => ({
                  title: service.name,
                  description: service.description_short,
                  icon: service.icon
              }));
              return (
                  <section key={category} className="py-20 lg:py-24 bg-secondary">
                      <div className="container mx-auto px-4 overflow-hidden">
                           <div className="text-center mb-12 category-section-heading">
                              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{category}</h2>
                           </div>
                          <OrganizationalStructure items={orgStructureItems} autoplay={true} />
                      </div>
                  </section>
              )
          }
          
          return (
              <section key={category} className={`py-20 lg:py-24 ${index % 2 === 1 ? 'bg-secondary' : ''}`}>
                  <div className="container mx-auto px-4 overflow-hidden">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 category-section-heading">{category}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {servicesInCategory.map((service) => (
                          <div key={service.id} className="service-card-animate">
                              <ServiceDetailCard service={service} />
                          </div>
                          ))}
                      </div>
                  </div>
              </section>
          )
        })}
      </div>
    </div>
  );
}
