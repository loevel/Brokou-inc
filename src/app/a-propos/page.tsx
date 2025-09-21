"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ValuesChart } from "@/components/ui/ValuesChart";
import { Scale, Recycle, Users, Share, ArrowRight, Flag, ShieldCheck, FolderGit2, Code, Network, Wrench, Lock, BadgeCheck, Users2, Megaphone, Target } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";
import { OrganizationalStructure } from "@/components/ui/OrganizationalStructure";

const orgStructure = [
    { title: "Direction Générale", description: "Définit la vision stratégique et assure le leadership global de l'entreprise.", icon: Flag },
    { title: "Systèmes d'Information", description: "Supervise l'infrastructure technologique et la sécurité des données.", icon: ShieldCheck },
    { title: "Gestion de Projet", description: "Planifie, exécute et livre les projets clients avec succès.", icon: FolderGit2 },
    { title: "Développement", description: "Conçoit et développe des solutions logicielles innovantes et sur mesure.", icon: Code },
    { title: "Infrastructure", description: "Gère et maintient la robustesse et la performance de l'infrastructure.", icon: Network },
    { title: "Support et Maintenance", description: "Fournit une assistance technique et assure la continuité des services.", icon: Wrench },
    { title: "Sécurité Informatique", description: "Protège les actifs numériques de l'entreprise et de ses clients.", icon: Lock },
    { title: "Qualité et Assurance", description: "Garantit que les produits et services respectent les plus hauts standards.", icon: BadgeCheck },
    { title: "Ressources Humaines", description: "Attire, développe et retient les meilleurs talents de l'industrie.", icon: Users2 },
    { title: "Marketing et Ventes", description: "Promeut nos solutions et construit des relations durables avec nos clients.", icon: Megaphone },
];

const values = [
    { name: 'Équité', description: "Nous réalisons l'égalité en milieu de travail : Nous faisons en sorte que personne ne puisse se voir refuser un emploi, des avantages ou une promotion pour des raisons qui ne sont pas liées à la compétence.", iconName: 'Scale', color: 'hsl(var(--chart-1))' },
    { name: 'Économie', description: "Nous sommes une entreprise Éco-Responsable : Nous avons une responsabilité envers l'environnement. Cela implique une prise de conscience des impacts que nos actions - et celles des autres - ont sur le monde qui nous entoure et sur les générations futures. En tant que entreprise citoyenne, nous avons un devoir de protection de notre planète et de ses habitants et la seule façon de le faire est d'être plus conscients de nos actions et de leurs conséquences. L'éco-responsabilité est l'un des outils les plus puissants à notre disposition pour contribuer à la préservation de notre belle planète.", iconName: 'Recycle', color: 'hsl(var(--chart-2))' },
    { name: 'Collaboration', description: "Nous ne gérons pas seulement les ressources humaines, mais les personnes. Chez nous, c’est l’humain avant tout.", iconName: 'Users', color: 'hsl(var(--chart-3))' },
    { name: 'Partage', description: "Le partage de nos bonnes pratiques favorise la collaboration et la cohésion au sein de notre entreprise. Nous voulons que nos collaborateurs partagent leurs connaissances et leurs idées afin de participer activement à un environnement de travail positif où les équipes travaillent ensemble vers des objectifs communs. La collaboration est un facteur crucial pour le succès de notre entreprise. Elle améliore la productivité, facilite le partage des connaissances, apporte une nouvelle approche de gestion de projet et renforce le climat social.", iconName: 'Share', color: 'hsl(var(--chart-4))' }
];

export default function AProposPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "about-us-header");
  const companyImage = placeholderImages.placeholderImages.find(p => p.id === "company-logo-large");
  const visionImage = placeholderImages.placeholderImages.find(p => p.id === "vision-image");
  const missionImage = placeholderImages.placeholderImages.find(p => p.id === "mission-image");
  const engagementImage = placeholderImages.placeholderImages.find(p => p.id === "engagement-image");

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
            À propos de nous
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Découvrez notre histoire, nos valeurs et ce qui nous pousse à innover chaque jour.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            {companyImage && (
                <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={companyImage.imageUrl}
                        alt={companyImage.description}
                        data-ai-hint={companyImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre entreprise</h2>
                 <p className="mt-4 text-muted-foreground">
                    BROKOU INC. est une entreprise spécialisée dans la gouvernance des TI, les solutions d'affaires, les réseaux et le support technique en informatiqe. La gestion des projets TI est l'une des activités phares que nous avons consolidés à travers le temps. Se voulant être aussi un centre d’excellence dans l'acquisition des compétences en technologie de l'information, BROKOU met ainsi le cap vers une destination plus créatrice d'emplois valorisants.
                 </p>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre vision</h2>
                 <p className="mt-4 text-muted-foreground">
                    Fournir une accessibilité aux solutions d'affaires de qualité...
                 </p>
            </div>
            {visionImage && (
                <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={visionImage.imageUrl}
                        alt={visionImage.description}
                        data-ai-hint={visionImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
             {missionImage && (
                <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={missionImage.imageUrl}
                        alt={missionImage.description}
                        data-ai-hint={missionImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre mission</h2>
                 <p className="mt-4 text-muted-foreground">
                    Vous accompagner avec des processus d’acquisition responsables. Avant notre première intervention, nous venons à votre rencontre pour vous écouter, échanger sur vos attentes, identifier vos besoins pour ainsi définir vos priorités. Il s’agit de mieux vous connaître et mieux comprendre vos enjeux. Cette approche est essentielle pour vous conseiller, bâtir le système d’information qui vous correspond et vous guider dans vos choix stratégiques en intégrant le développement durable.
                 </p>
            </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight">Nos valeurs</h2>
                  <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                      Nos valeurs fondamentales guident chacune de nos décisions et actions. Elles sont le socle de notre culture d'entreprise et de notre engagement envers nos clients. Survolez un segment pour en savoir plus.
                  </p>
              </div>
              <div className="w-full h-[400px] lg:h-[500px]">
                <ValuesChart data={values} />
              </div>
          </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            {engagementImage && (
                <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={engagementImage.imageUrl}
                        alt={engagementImage.description}
                        data-ai-hint={engagementImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre engagement</h2>
                 <p className="mt-4 text-muted-foreground">
                    Nous nous engageons pour un numérique responsable. Cela inclut le développement de solutions durables, la protection de la vie privée, l'accessibilité pour tous et un impact sociétal positif. Nous croyons en une technologie qui sert l'humain et la planète.
                 </p>
                 <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3"><Recycle className="h-5 w-5 text-primary mt-1" /><span>Éco-conception de nos solutions</span></li>
                    <li className="flex items-start gap-3"><Scale className="h-5 w-5 text-primary mt-1" /><span>Éthique et transparence des données</span></li>
                    <li className="flex items-start gap-3"><Target className="h-5 w-5 text-primary mt-1" /><span>Impact social positif</span></li>
                 </ul>
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
              <h2 className="text-2xl md:text-3xl font-bold">NOUS VISONS LE MÊME BUT : <br/>VOTRE TRANQUILLITÉ D'ESPRIT.</h2>
              <Button variant="secondary" asChild>
                  <Link href="/contact">Contactez-nous <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
          </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Structure organisationnelle</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              BROKOU INC. s'est dotée d'une structure organisationnelle permet une répartition claire des rôles et responsabilités, favorisant une gestion efficace des projets TI de toutes tailles.
            </p>
          </div>
          <OrganizationalStructure items={orgStructure} />
        </div>
      </section>
    </div>
  );
}
