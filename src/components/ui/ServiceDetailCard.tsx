import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { Service } from "@/lib/types";
import { getIcon } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

interface ServiceDetailCardProps {
  service: Service;
}

export function ServiceDetailCard({ service }: ServiceDetailCardProps) {
  const serviceImage = placeholderImages.placeholderImages.find(p => p.id === service.imageId);
  const CardContentWrapper = service.link ? 'a' : 'div';
  const linkProps = service.link ? { href: service.link, target: "_blank", rel: "noopener noreferrer" } : {};

  
  return (
    <Card asChild className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContentWrapper {...linkProps}>
        <CardContent className="p-6 flex flex-col flex-grow">
          {serviceImage && (
            <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden">
               <Image
                  src={serviceImage.imageUrl}
                  alt={serviceImage.description}
                  data-ai-hint={serviceImage.imageHint}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
               />
            </div>
          )}
          <CardTitle className="text-xl mb-3">{service.name}</CardTitle>
          <div className="flex-grow">
            {service.details && service.details.length > 0 ? (
              <ul className="space-y-2 text-muted-foreground text-sm">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : (
               <CardDescription>{service.description_short}</CardDescription>
            )}
          </div>
          {!service.link && (
            <Link href={`/services/${service.id}`} className="text-sm font-semibold text-primary hover:text-primary/80 mt-6 flex items-center gap-2">
                En savoir plus <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </CardContent>
      </CardContentWrapper>
    </Card>
  );
}
