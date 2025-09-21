import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { featuredServices } from "@/lib/data";
import { HeroSection } from "@/components/ui/HeroSection";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import placeholderImages from "@/lib/placeholder-images.json";

export default function Home() {
  const whyChooseUsImage = placeholderImages.placeholderImages.find(p => p.id === "why-choose-us");
  return (
    <div className="flex flex-col">
      <HeroSection />

      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nos Services Phares
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions innovantes pour propulser votre entreprise vers de
              nouveaux sommets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
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

      <section id="cta" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl">
            <CardContent className="p-0">
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
    </div>
  );
}
