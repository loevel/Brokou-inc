
"use client";

import { useState } from "react";
import { jobOffers as initialJobOffers } from "@/lib/data";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import type { JobOffer } from "@/lib/types";

export default function GestionOffresPage() {
  const [jobOffers, setJobOffers] = useState<JobOffer[]>(initialJobOffers);

  const handleOfferAdded = (newOffer: JobOffer) => {
    setJobOffers((prevOffers) => [newOffer, ...prevOffers]);
  };

  const handleOfferUpdated = (updatedOffer: JobOffer) => {
    setJobOffers((prevOffers) => 
        prevOffers.map(offer => offer.id === updatedOffer.id ? updatedOffer : offer)
    );
  };
  
  const handleOfferDeleted = (offerId: string) => {
    setJobOffers((prevOffers) => prevOffers.filter(offer => offer.id !== offerId));
  }

  return (
    <div>
      <DataTable 
        columns={columns} 
        data={jobOffers} 
        onOfferAdded={handleOfferAdded}
        onOfferUpdated={handleOfferUpdated}
        onOfferDeleted={handleOfferDeleted}
       />
    </div>
  );
}
