import Image from "next/image";
import { JobOfferCard } from "@/components/ui/JobOfferCard";
import { jobOffers } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";

export const metadata = {
  title: "Carrières - BROKOU INC",
  description: "Rejoignez notre équipe d'innovateurs et façonnez l'avenir du numérique. Découvrez nos offres d'emploi actuelles.",
};

const CitizenCompanyFeature = ({ title, description }: { title: React.ReactNode, description: string }) => (
  <div className="text-center md:text-left">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function CarrieresPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "careers-header");

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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <CitizenCompanyFeature
              title={
                <>
                  <span className="text-chart-1">Égalité, diversité</span>
                  <br />
                  <span className="text-chart-3">et inclusion</span>
                </>
              }
              description="Chez BROKOU, vous êtes les bienvenus, peu importe votre origine, vos croyances, votre apparence, votre genre, votre âge, votre race."
            />
            <CitizenCompanyFeature
              title={
                <>
                  Développement
                  <br />
                  <span className="text-chart-2">durable</span>
                </>
              }
              description="Nous avons pris une responsabilité de réduire notre empreinte sur le climat avec la façon dont nous nous déployont jusqu'aux produits et services que nous proposons à nos clients."
            />
             <CitizenCompanyFeature
              title={
                <>
                  Conditions de travail
                  <br />
                  <span className="text-chart-3">exceptionnelles</span>
                </>
              }
              description="Viens vivre une expérience de travail inédite chez nous. C'est l'humain qui compte dans toutes les circonstances."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
