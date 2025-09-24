
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useLayoutEffect, useRef } from "react";
import { JobOfferCard } from "@/components/ui/JobOfferCard";
import { jobOffers } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, HeartHandshake, ShieldCheck, ThumbsUp, ArrowRight, Search, Mail, Mailbox, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { JobOffer } from "@/lib/types";
import { gsap } from "gsap";

const CitizenCompanyFeature = ({ icon: Icon, title, description, colorClass }: { icon: React.ElementType, title: React.ReactNode, description: string, colorClass: string }) => (
    <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-start gap-4 h-full">
        <div className={`p-2 bg-primary/10 rounded-full`}>
            <Icon className={`h-6 w-6 ${colorClass}`} />
        </div>
        <div className="flex-grow">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground mt-1">{description}</p>
        </div>
    </div>
);

const demandedJobs = [
    { title: "Directeur ou directrice de comptes", link: "#job-offers" },
    { title: "Développeur ou développeuse TI", link: "/carrieres/dev-fullstack" },
    { title: "Chef de projet", link: "/carrieres/chef-projet" },
    { title: "Conseiller ou conseillère en service à la clientèle", link: "#job-offers" },
];

export default function CarrieresPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "careers-header");
  const ctaImage = placeholderImages.placeholderImages.find(p => p.id === "careers-cta-background");
  const forbesImage = placeholderImages.placeholderImages.find(p => p.id === "forbes-badge");
  const whyWorkCollage1 = placeholderImages.placeholderImages.find(p => p.id === "why-work-1");
  const whyWorkCollage2 = placeholderImages.placeholderImages.find(p => p.id === "why-work-2");
  const whyWorkCollage3 = placeholderImages.placeholderImages.find(p => p.id === "why-work-3");
  const whyWorkCollage4 = placeholderImages.placeholderImages.find(p => p.id === "why-work-4");

  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState<JobOffer["type"] | "all">("all");
  const [modeFilter, setModeFilter] = useState("all");

  const locations = useMemo(() => ["all", ...Array.from(new Set(jobOffers.map(o => o.location)))], []);
  const types: (JobOffer["type"] | "all")[] = ["all", "Temps plein", "Temps partiel", "Contrat"];
  const modes = useMemo(() => ["all", ...Array.from(new Set(jobOffers.map(o => o.mode)))], []);

  const filteredOffers = useMemo(() => {
    return jobOffers.filter(offer => {
      const matchesSearch = searchTerm === "" || offer.title.toLowerCase().includes(searchTerm.toLowerCase()) || offer.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === "all" || offer.location === locationFilter;
      const matchesType = typeFilter === "all" || offer.type === typeFilter;
      const matchesMode = modeFilter === "all" || offer.mode === modeFilter;
      return matchesSearch && matchesLocation && matchesType && matchesMode;
    });
  }, [searchTerm, locationFilter, typeFilter, modeFilter]);
  
  const comp = useRef(null);

   useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from("#title", {
                opacity: 0,
                y: '+=30',
                duration: 1,
                ease: 'power3.out'
            })
            .from("#subtitle", {
                opacity: 0,
                y: '+=30',
                duration: 1,
                delay: -0.8,
                ease: 'power3.out'
            })
            .from("#cta-button", {
                opacity: 0,
                y: '+=30',
                duration: 1,
                delay: -0.8,
                ease: 'power3.out'
            });

        }, comp);
        
        return () => ctx.revert();
    }, []);

  return (
    <div ref={comp}>
      <section className="relative flex items-center justify-center min-h-[95vh] bg-secondary">
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
          <h1 id="title" className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Trouver un emploi chez BROKOU INC.
          </h1>
          <p id="subtitle" className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
            Nous sommes une belle entreprise Québécoise et nous avons à cœur d'être un employeur de choix depuis quelques années . Réalisez vos ambitions et trouvez votre prochain défi parmi plusieurs types d’emplois dans plusieurs domaines des technologies de l’information et les communications.
          </p>
           <div id="cta-button" className="mt-8">
                <Button size="lg" asChild>
                    <Link href="#job-offers">
                        Voir les offres d'emploi
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Emplois en demande</h2>
                    <p className="mt-2 text-muted-foreground">
                        Nous recrutons en continu pour ces postes clés. Postulez pour faire partie de notre banque de candidatures et ne rater aucune offre.
                    </p>
                    <div className="mt-6 space-y-3">
                        {demandedJobs.map(job => (
                            <Button key={job.title} variant="outline" asChild className="w-full justify-between h-12 text-base">
                                <Link href={job.link}>
                                    <span>{job.title}</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <Card className="bg-primary/5 border-primary/20 p-8 text-center flex flex-col items-center">
                        <div className="p-3 bg-primary/10 rounded-full mb-4">
                           <Mailbox className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Candidature spontanée</h3>
                        <p className="mt-2 text-muted-foreground flex-grow">
                           Vous voulez travailler chez BROKOU INC., mais vous ne trouvez pas d'offre qui correspond à votre profil? Faites-vous connaître en nous envoyant votre CV.
                        </p>
                        <Button asChild className="mt-6">
                            <a href="mailto:emploi@brokou.com?subject=Candidature%20spontanée">
                                <Send className="mr-2 h-4 w-4"/>
                                Soumettre une candidature
                            </a>
                        </Button>
                    </Card>
                    {forbesImage && (
                        <div className="flex justify-center">
                             <Image
                                src={forbesImage.imageUrl}
                                alt={forbesImage.description}
                                data-ai-hint={forbesImage.imageHint}
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Pourquoi travailler chez BROKOU INC.?</h2>
                    
                    <h3 className="text-xl font-semibold text-primary">Des conditions de travail avantageuses</h3>
                    <p className="mt-2 text-muted-foreground">Évoluez au sein d'une entreprise qui vous permet de vous réaliser autant dans votre vie professionnelle que personnelle.</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /><span>Télétravail selon la nature du poste</span></li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /><span>Salaire concurrentiel</span></li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /><span>Boni annuel en fonction de la performance</span></li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /><span>Conciliation travail et vie personnelle</span></li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /><span>Formation continue et mentorat</span></li>
                    </ul>

                    <h3 className="text-xl font-semibold text-primary mt-8">Des valeurs qui donnent un sens à votre travail</h3>
                    <p className="mt-2 text-muted-foreground">Notre entreprise citoyenne partage des valeurs qui vous sont importantes et fait partie de votre quotidien.</p>
                    <Button variant="link" asChild className="px-0 mt-2">
                        <Link href="/a-propos">En savoir plus sur nos valeurs <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    {whyWorkCollage1 && <Image src={whyWorkCollage1.imageUrl} alt={whyWorkCollage1.description} data-ai-hint={whyWorkCollage1.imageHint} width={300} height={300} className="rounded-lg object-cover aspect-square" />}
                    {whyWorkCollage2 && <Image src={whyWorkCollage2.imageUrl} alt={whyWorkCollage2.description} data-ai-hint={whyWorkCollage2.imageHint} width={300} height={300} className="rounded-lg object-cover aspect-square" />}
                    {whyWorkCollage3 && <Image src={whyWorkCollage3.imageUrl} alt={whyWorkCollage3.description} data-ai-hint={whyWorkCollage3.imageHint} width={300} height={300} className="rounded-lg object-cover aspect-square" />}
                    {whyWorkCollage4 && <Image src={whyWorkCollage4.imageUrl} alt={whyWorkCollage4.description} data-ai-hint={whyWorkCollage4.imageHint} width={300} height={300} className="rounded-lg object-cover aspect-square" />}
                </div>
            </div>
        </div>
      </section>

      <section id="job-offers" className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">
                Offres d'Emploi Actuelles
                </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filter Section */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <h3 className="text-xl font-semibold">Filtres</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="search-input" className="text-sm font-medium text-muted-foreground">Recherche</label>
                                <div className="relative mt-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="search-input"
                                        placeholder="Mot-clé..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="location-select" className="text-sm font-medium text-muted-foreground">Lieu</label>
                                <Select value={locationFilter} onValueChange={setLocationFilter}>
                                    <SelectTrigger id="location-select" className="mt-1">
                                        <SelectValue placeholder="Lieu" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {locations.map(location => (
                                        <SelectItem key={location} value={location}>
                                            {location === "all" ? "Tous les lieux" : location}
                                        </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="type-select" className="text-sm font-medium text-muted-foreground">Type de contrat</label>
                                <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value as JobOffer["type"] | "all")}>
                                <SelectTrigger id="type-select" className="mt-1">
                                    <SelectValue placeholder="Type de contrat" />
                                </SelectTrigger>
                                <SelectContent>
                                    {types.map(type => (
                                    <SelectItem key={type} value={type}>
                                        {type === "all" ? "Tous les types" : type}
                                    </SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                            </div>
                             <div>
                                <label htmlFor="mode-select" className="text-sm font-medium text-muted-foreground">Mode de travail</label>
                                <Select value={modeFilter} onValueChange={setModeFilter}>
                                <SelectTrigger id="mode-select" className="mt-1">
                                    <SelectValue placeholder="Mode de travail" />
                                </SelectTrigger>
                                <SelectContent>
                                    {modes.map(mode => (
                                    <SelectItem key={mode} value={mode}>
                                        {mode === "all" ? "Tous les modes" : mode}
                                    </SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Job Offers List */}
                <main className="lg:col-span-3">
                    <div className="space-y-6">
                    {filteredOffers.map((offer) => (
                        <JobOfferCard key={offer.id} offer={offer} />
                    ))}
                    </div>
                    {filteredOffers.length === 0 && (
                    <div className="text-center py-16 border rounded-lg bg-card mt-6">
                        <p className="text-lg font-semibold">Aucune offre ne correspond à votre recherche.</p>
                        <p className="text-muted-foreground mt-2">Essayez d'ajuster vos filtres ou revenez bientôt !</p>
                    </div>
                    )}
                </main>
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

      <section className="relative py-20 lg:py-24 bg-background">
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

    

    

