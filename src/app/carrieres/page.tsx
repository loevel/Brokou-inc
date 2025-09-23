
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { JobOfferCard } from "@/components/ui/JobOfferCard";
import { jobOffers } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, HeartHandshake, ShieldCheck, ThumbsUp, ArrowRight, Search } from "lucide-react";
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

const CitizenCompanyFeature = ({ icon: Icon, title, description, colorClass }: { icon: React.ElementType, title: React.ReactNode, description: string, colorClass: string }) => (
    <div className="bg-secondary/50 rounded-2xl p-6 flex flex-col items-start gap-4 h-full">
        <div className={`p-2 bg-primary/10 rounded-full`}>
            <Icon className={`h-6 w-6 ${colorClass}`} />
        </div>
        <div className="flex-grow">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground mt-1">{description}</p>
        </div>
    </div>
);

export default function CarrieresPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "careers-header");
  const ctaImage = placeholderImages.placeholderImages.find(p => p.id === "careers-cta-background");

  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState<JobOffer["type"] | "all">("all");

  const locations = useMemo(() => ["all", ...Array.from(new Set(jobOffers.map(o => o.location)))], []);
  const types: (JobOffer["type"] | "all")[] = ["all", "Temps plein", "Temps partiel", "Contrat"];

  const filteredOffers = useMemo(() => {
    return jobOffers.filter(offer => {
      const matchesSearch = searchTerm === "" || offer.title.toLowerCase().includes(searchTerm.toLowerCase()) || offer.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === "all" || offer.location === locationFilter;
      const matchesType = typeFilter === "all" || offer.type === typeFilter;
      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchTerm, locationFilter, typeFilter]);

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
