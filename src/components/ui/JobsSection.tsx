
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { jobOffers } from "@/lib/data";
import { JobOfferCard } from "@/components/ui/JobOfferCard";
import { ArrowRight } from "lucide-react";

export function JobsSection() {
    const featuredJobs = jobOffers.slice(0, 2);

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
                <div className="max-w-4xl mx-auto space-y-8">
                    {featuredJobs.map(offer => (
                        <JobOfferCard key={offer.id} offer={offer} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/carrieres">
                            Voir toutes les offres <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
