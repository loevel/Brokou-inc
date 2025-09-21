import { notFound } from "next/navigation";
import Link from "next/link";
import { jobOffers } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Calendar, Clock, MapPin, Briefcase } from "lucide-react";

type JobOfferPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
    return jobOffers.map((offer) => ({
      id: offer.id,
    }));
}

export async function generateMetadata({ params }: JobOfferPageProps) {
  const offer = jobOffers.find((o) => o.id === params.id);
  if (!offer) {
    return { title: "Offre non trouvée" };
  }
  return {
    title: `${offer.title} - BROKOU INC`,
    description: offer.introduction,
  };
}


export default function JobOfferPage({ params }: JobOfferPageProps) {
  const offer = jobOffers.find((o) => o.id === params.id);

  if (!offer) {
    notFound();
  }

  return (
    <div>
        {/* Header */}
        <section className="bg-secondary py-12">
            <div className="container mx-auto px-4">
                <Button variant="outline" asChild>
                    <Link href="/carrieres">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Toutes nos offres d'emploi
                    </Link>
                </Button>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-6">
                    OFFRE D'EMPLOI NO: {offer.id.toUpperCase()}
                </h1>
            </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
            <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold text-primary">{offer.title}</h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground mt-2 mb-6">
                        <div className="flex items-center gap-2">
                           <Clock className="h-4 w-4" />
                           <span>{offer.mode}</span>
                        </div>
                         <div className="flex items-center gap-2">
                           <Calendar className="h-4 w-4" />
                           <span>Fin de validité: {offer.validityDate}</span>
                        </div>
                    </div>

                    <p className="mb-8">{offer.introduction}</p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Activités à réaliser :</h3>
                            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                {offer.activities.map((activity, index) => (
                                    <li key={index}>{activity}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Biens livrables :</h3>
                             <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                {offer.deliverables.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Exigences :</h3>
                             <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                {offer.requirements.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <aside className="lg:col-span-1 space-y-8">
                     <div className="p-6 border rounded-lg bg-card shadow-sm">
                        <h3 className="font-semibold text-lg mb-4">Détails du poste</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span className="font-medium text-muted-foreground">Rémunération:</span>
                                <span>{offer.remuneration}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium text-muted-foreground">Statut:</span>
                                <span>{offer.status}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium text-muted-foreground">Entrée en fonction:</span>
                                <span>{offer.startDate}</span>
                            </li>
                             <li className="flex justify-between">
                                <span className="font-medium text-muted-foreground">Avantages sociaux:</span>
                                <span>{offer.socialBenefits ? 'Oui' : 'Non'}</span>
                            </li>
                            <li className="flex justify-between items-start">
                                <span className="font-medium text-muted-foreground">Lieu de travail:</span>
                                <span className="text-right">{offer.location}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 border rounded-lg bg-card shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Ce poste est pour vous !</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Veuillez nous faire parvenir votre CV en format PDF dès maintenant à :{' '}
                            <a href={`mailto:emploi@brokou.com?subject=Candidature: ${offer.title} (${offer.id})`} className="text-primary hover:underline">
                                emploi@brokou.com
                            </a> en précisant le titre et le numéro de l'offre.
                        </p>
                        <Button className="w-full">Postuler maintenant</Button>
                    </div>

                    <div className="text-xs text-muted-foreground space-y-3">
                         <p>"En soumettant votre candidature, vous consentez à ce que votre CV soit conservé dans notre base de données et utilisé pour des opportunités d'emploi similaires dans les entreprises "BROKOU Inc." et "ÉQUIMAF"."</p>
                         <p>"Veuillez noter que seules les candidatures rencontrant le profil du poste seront contactées. Nous vous remercions de votre collaboration."</p>
                         <p>"L'emploi du masculin est utilisé dans le seul but d'alléger le texte."</p>
                         <p>"Le diplôme doit être reconnu par le ministère de l'Éducation. Pour les diplômes obtenus à l'extérieur du Canada, une copie de l'évaluation comparative délivrée par le ministère de l'Immigration, de la Diversité et de l'Inclusion (MIDI) doit être présentée."</p>
                    </div>
                </aside>
            </div>
        </section>
    </div>
  );
}