import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import placeholderImages from "@/lib/placeholder-images.json";

type ServiceDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
    return services.map((service) => ({
      id: service.id,
    }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const service = services.find((s) => s.id === params.id);
  if (!service) {
    return { title: "Service non trouvé" };
  }
  return {
    title: `${service.name} - Brokou Hub`,
    description: service.description_short,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((s) => s.id === params.id);
  const serviceImage = placeholderImages.placeholderImages.find(p => p.id === service?.imageId);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-12 md:py-20">
         <Button variant="ghost" asChild className="mb-8">
            <Link href="/services"><ArrowLeft className="mr-2 h-4 w-4" /> Retour aux services</Link>
        </Button>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-md">
                    <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {service.name}
                </h1>
            </div>
            <p className="text-lg text-muted-foreground mt-4">
              {service.description_long}
            </p>
             <div className="mt-8 space-y-3">
                <h3 className="font-semibold text-xl">Ce que nous offrons :</h3>
                <ul className="space-y-2">
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>Analyse complète des besoins</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>Développement de stratégie sur mesure</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>Mise en œuvre et intégration</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>Support et maintenance continus</span></li>
                </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    {serviceImage && (
                        <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                            <Image 
                                src={serviceImage.imageUrl} 
                                alt={serviceImage.description} 
                                data-ai-hint={serviceImage.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </CardHeader>
                <CardContent>
                    <CardTitle className="mb-4">Intéressé par ce service ?</CardTitle>
                    <p className="text-muted-foreground mb-6">Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider.</p>
                    <Button className="w-full" asChild>
                        <Link href="/contact">Demander un devis</Link>
                    </Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
