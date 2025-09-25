
"use client";

import { useState, useEffect, useTransition } from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import type { JobOffer } from "@/lib/types";
import { createJobOffer, deleteJobOffer, getAllJobOffers, toggleJobOfferStatus, updateJobOffer } from "@/lib/job-offers.service";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function GestionOffresPage() {
  const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function fetchOffers() {
      try {
        const offers = await getAllJobOffers({ activeOnly: false });
        setJobOffers(offers);
      } catch (error) {
        toast({
          title: "Erreur",
          description: "Impossible de charger les offres d'emploi.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
    fetchOffers();
  }, [toast]);


  const handleOfferAdded = async (offerData: Omit<JobOffer, 'id' | 'isActive'>) => {
    try {
      const newOffer = await createJobOffer(offerData);
      setJobOffers((prevOffers) => [newOffer, ...prevOffers]);
      return newOffer;
    } catch (error) {
      console.error(error);
      toast({
        title: "Erreur",
        description: "Impossible de créer l'offre d'emploi.",
        variant: "destructive",
      });
      return null;
    }
  };

  const handleOfferUpdated = async (id: string, offerData: Omit<JobOffer, 'id' | 'isActive'>) => {
    try {
      const updatedOffer = await updateJobOffer(id, offerData);
      setJobOffers((prevOffers) => 
          prevOffers.map(offer => offer.id === updatedOffer.id ? updatedOffer : offer)
      );
      return updatedOffer;
    } catch (error) {
      console.error(error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour l'offre d'emploi.",
        variant: "destructive",
      });
      return null;
    }
  };
  
  const handleOfferDeleted = async (offerId: string) => {
    try {
      await deleteJobOffer(offerId);
      setJobOffers((prevOffers) => prevOffers.filter(offer => offer.id !== offerId));
       toast({
        title: "Offre supprimée !",
        description: "L'offre a été supprimée avec succès.",
      });
    } catch (error) {
        console.error(error);
        toast({
            title: "Erreur",
            description: "Impossible de supprimer l'offre d'emploi.",
            variant: "destructive",
        });
    }
  }

  const handleToggleStatus = (id: string, currentStatus: boolean) => {
    startTransition(async () => {
        try {
            const updatedOffer = await toggleJobOfferStatus(id, !currentStatus);
            setJobOffers(prev => prev.map(o => o.id === id ? updatedOffer : o));
            toast({
                title: "Statut mis à jour",
                description: `L'offre a été ${updatedOffer.isActive ? 'activée' : 'désactivée'}.`
            });
        } catch (error) {
            toast({
                title: "Erreur",
                description: "Impossible de changer le statut de l'offre.",
                variant: "destructive"
            });
        }
    });
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div>
      <DataTable 
        columns={columns} 
        data={jobOffers} 
        onOfferAdded={handleOfferAdded}
        onOfferUpdated={handleOfferUpdated}
        onOfferDeleted={handleOfferDeleted}
        onToggleStatus={handleToggleStatus}
        pendingStatusChange={isPending}
       />
    </div>
  );
}
