
import { notFound } from "next/navigation";
import Link from "next/link";
import { jobOffers } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Calendar, Clock, MapPin, Briefcase, Target, ListChecks, Award, BriefcaseBusiness, Mail } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Badge } from "@/components/ui/badge";

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

  const detailItems = [
      { icon: BriefcaseBusiness, label: "Statut:", value: offer.status },
      { icon: Calendar, label: "Entrée en fonction:", value: offer.startDate },
      { icon: Clock, label: "Rémunération:", value: offer.remuneration },
      { icon: MapPin, label: "Lieu:", value: offer.location },
  ]

  return (
    <div className="bg-secondary">
        {/* Header */}
        <section className="bg-background py-12">
            <div className="container mx-auto px-4">
                <Button variant="outline" asChild className="mb-8">
                    <Link href="/carrieres">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour aux offres
                    </Link>
                </Button>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                        <Badge variant="secondary" className="mb-2">Offre d'emploi #{offer.id.toUpperCase()}</Badge>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                            {offer.title}
                        </h1>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground mt-3">
                            <div className="flex items-center gap-2"><Briefcase className="h-4 w-4" /><span>{offer.type}</span></div>
                            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{offer.mode}</span></div>
                            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>Expire le: {offer.validityDate}</span></div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <Button size="lg" asChild className="transition-transform duration-300 hover:scale-105">
                             <a href={`mailto:emploi@brokou.com?subject=Candidature: ${offer.title} (${offer.id})`}>
                                <Mail className="mr-2 h-5 w-5" />
                                Postuler
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
            <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
                {/* Left Column (Main Content) */}
                <div className="lg:col-span-2 space-y-10">
                    <div className="p-8 border rounded-lg bg-card shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 border-l-4 border-primary pl-4">Description du poste</h2>
                        <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground">
                            <ReactMarkdown>{offer.description}</ReactMarkdown>
                        </div>
                    </div>

                    <div className="p-8 border rounded-lg bg-card shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-chart-2 pl-4">Responsabilités</h2>
                        <ul className="space-y-4">
                            {offer.activities.map((activity, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Target className="h-6 w-6 text-chart-2 mt-1 flex-shrink-0" />
                                    <ReactMarkdown className="text-muted-foreground">{activity}</ReactMarkdown>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 border rounded-lg bg-card shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-chart-4 pl-4">Biens livrables</h2>
                         <ul className="space-y-4">
                            {offer.deliverables.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <ListChecks className="h-6 w-6 text-chart-4 mt-1 flex-shrink-0" />
                                    <ReactMarkdown className="text-muted-foreground">{item}</ReactMarkdown>
                                </li>
                            ))}
                        </ul>
                    </div>

                     <div className="p-8 border rounded-lg bg-card shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-chart-1 pl-4">Exigences</h2>
                         <ul className="space-y-4">
                            {offer.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Award className="h-6 w-6 text-chart-1 mt-1 flex-shrink-0" />
                                    <ReactMarkdown className="text-muted-foreground">{req}</ReactMarkdown>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column (Sidebar) */}
                <aside className="lg:col-span-1 space-y-8">
                     <div className="p-6 border rounded-lg bg-card shadow-sm sticky top-24">
                        <h3 className="font-semibold text-xl mb-6">En bref</h3>
                        <ul className="space-y-5 text-sm">
                           {detailItems.map(item => (
                               <li key={item.label} className="flex items-center gap-4">
                                   <item.icon className="h-5 w-5 text-primary"/>
                                   <div>
                                       <span className="font-medium text-muted-foreground">{item.label}</span>
                                       <p className="font-semibold">{item.value}</p>
                                   </div>
                               </li>
                           ))}
                           <li className="flex items-center gap-4">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <div>
                                    <span className="font-medium text-muted-foreground">Avantages sociaux:</span>
                                    <p className="font-semibold">{offer.socialBenefits ? 'Oui' : 'Non'}</p>
                                </div>
                           </li>
                        </ul>
                        <Button className="w-full mt-8 transition-transform duration-300 hover:scale-105" size="lg" asChild>
                            <a href={`mailto:emploi@brokou.com?subject=Candidature: ${offer.title} (${offer.id})`}>
                                <Mail className="mr-2 h-5 w-5" />
                                Postuler
                            </a>
                        </Button>
                    </div>

                    <div className="text-xs text-muted-foreground space-y-3 p-4 border-l-2">
                        <p>Veuillez nous faire parvenir votre CV en format PDF dès maintenant à : <a href={`mailto:emploi@brokou.com?subject=Candidature: ${offer.title} (${offer.id})`} className="text-primary hover:underline">emploi@brokou.com</a> en précisant le titre et le numéro de l'offre.</p>
                        <p>*En soumettant votre candidature, vous consentez à ce que votre CV soit conservé dans notre base de données et utilisé pour des opportunités d’emploi similaires dans les entreprises "BROKOU Inc." et "ÉQUIMAF".</p>
                        <p>*Veuillez noter que seules les candidatures rencontrant le profil du poste seront contactées. Nous vous remercions de votre collaboration.</p>
                        <p>*L’emploi du masculin est utilisé dans le seul but d’alléger le texte.</p>
                        <p>*Le diplôme doit être reconnu par le ministère de l’Éducation. Pour les diplômes obtenus à l’extérieur du Canada, une copie de l’évaluation comparative délivrée par le ministère de l’Immigration, de la Diversité et de l’Inclusion (MIDI) doit être présentée.</p>
                    </div>
                </aside>
            </div>
        </section>
    </div>
  );
}
