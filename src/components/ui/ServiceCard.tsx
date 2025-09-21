import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const serviceImage = placeholderImages.placeholderImages.find(p => p.id === service.imageId);

  return (
    <Card className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <CardHeader className="flex-row items-center gap-4 pb-4">
        <div className="bg-primary/10 p-3 rounded-md">
          <service.icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        {serviceImage && (
          <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
             <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                data-ai-hint={serviceImage.imageHint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
             />
          </div>
        )}
        <CardDescription className="flex-grow">{service.description_short}</CardDescription>
        <Button variant="ghost" className="justify-start p-0 h-auto mt-4 text-primary hover:text-primary" asChild>
          <Link href={`/services/${service.id}`}>
            En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
