import Image from "next/image";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";

export const metadata = {
  title: "Nos Services - BROKOU INC",
  description: "Découvrez la gamme complète de services que Brokou Inc. propose pour accompagner votre transformation numérique.",
};

export default function ServicesPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "services-header");
  return (
    <div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
