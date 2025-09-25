
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllJobOffers } from "@/lib/job-offers.service";
import { JobOfferCard } from "@/components/ui/JobOfferCard";
import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { JobOffer } from "@/lib/types";

export function JobsSection() {
    const [featuredJobs, setFeaturedJobs] = useState<JobOffer[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchJobs() {
            setLoading(true);
            const allJobs = await getAllJobOffers();
            setFeaturedJobs(allJobs.slice(0, 2));
            setLoading(false);
        }
        fetchJobs();
    }, []);

    return (
        <section id="jobs-home" className="bg-secondary min-h-[95vh] flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Rejoignez notre équipe
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Nous sommes toujours à la recherche de talents passionnés pour nous aider à innover. Découvrez nos opportunités.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {loading ? (
                        <div className="flex justify-center items-center h-48">
                            <Loader2 className="h-8 w-8 animate-spin" />
                        </div>
                    ) : featuredJobs.length > 0 ? (
                        featuredJobs.map(offer => (
                            <JobOfferCard key={offer.id} offer={offer} />
                        ))
                    ) : (
                         <div className="text-center py-16 border rounded-lg bg-card">
                            <p className="text-lg font-semibold">Aucune offre d'emploi pour le moment.</p>
                            <p className="text-muted-foreground mt-2">Revenez bientôt !</p>
                        </div>
                    )}
                </div>
                
                <div className="text-center mt-12">
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="/carrieres">
                            Voir toutes les offres <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
