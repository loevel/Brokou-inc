
import Image from "next/image";
import Link from "next/link";
import { JobOfferCard } from "@/components/ui/JobOfferCard";
import { jobOffers } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, HeartHandshake, ShieldCheck, ThumbsUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


export const metadata = {
  title: "Carrières - BROKOU INC",
  description: "Rejoignez notre équipe d'innovateurs et façonnez l'avenir du numérique. Découvrez nos offres d'emploi actuelles.",
};

const CitizenCompanyFeature = ({ icon: Icon, title, description, colorClass }: { icon: React.ElementType, title: React.ReactNode, description: string, colorClass: string }) => (
    <Card className="text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardHeader className="items-center">
            <div className={`p-4 bg-primary/10 rounded-full`}>
                <Icon className={`h-8 w-8 ${colorClass}`} />
            </div>
            <CardTitle className="pt-4">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

export default function CarrieresPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "careers-header");
  const ctaImage = placeholderImages.placeholderImages.find(p => p.id === "careers-cta-background");

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
            Rejoignez Notre Équipe
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Nous sommes toujours à la recherche de talents passionnés pour nous aider à innover.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Offres d'Emploi Actuelles
            </h2>
            <div className="space-y-8">
              {jobOffers.map((offer) => (
                <JobOfferCard key={offer.id} offer={offer} />
              ))}
            </div>
             {jobOffers.length === 0 && (
              <div className="text-center py-12 border rounded-lg">
                <p className="text-muted-foreground">Aucune offre d'emploi pour le moment.</p>
                <p className="text-muted-foreground">Revenez bientôt ou envoyez-nous une candidature spontanée !</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Travailler pour une entreprise citoyenne
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Nous croyons en un environnement de travail qui valorise chaque individu, promeut le bien-être et s'engage pour un avenir durable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CitizenCompanyFeature
              icon={Scale}
              title="Égalité & Inclusion"
              description="Chez BROKOU, vous êtes les bienvenus, peu importe votre origine, vos croyances, votre apparence, votre genre, votre âge, ou votre race."
              colorClass="text-chart-1"
            />
            <CitizenCompanyFeature
              icon={ShieldCheck}
              title="Développement Durable"
              description="Nous prenons la responsabilité de réduire notre empreinte climatique, de nos opérations quotidiennes jusqu'aux solutions que nous proposons à nos clients."
              colorClass="text-chart-2"
            />
             <CitizenCompanyFeature
              icon={HeartHandshake}
              title="Bien-être au travail"
              description="Viens vivre une expérience de travail inédite chez nous. C'est l'humain qui compte dans toutes les circonstances."
              colorClass="text-chart-3"
            />
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-24">
        {ctaImage && (
            <div className="absolute inset-0">
                <Image 
                    src={ctaImage.imageUrl} 
                    alt={ctaImage.description}
                    data-ai-hint={ctaImage.imageHint}
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
        )}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Devenez un de nos consulants</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                    <ThumbsUp className="h-10 w-10 text-primary mb-4" />
                    <p className="font-semibold">Faites un voyage avec nous !</p>
                </div>
                <div className="flex flex-col items-center">
                    <ThumbsUp className="h-10 w-10 text-primary mb-4" />
                    <p className="font-semibold">Un lieu de travail inclusif est un meilleur lieu de travail</p>
                </div>
                <div className="flex flex-col items-center">
                    <ThumbsUp className="h-10 w-10 text-primary mb-4" />
                    <p className="font-semibold">Chez BROKOU, nous avons mis au point un processus de recrutement qui nous aide à trouver les bonnes personnes</p>
                </div>
            </div>
            <div className="mt-12">
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Venez nous voir <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
