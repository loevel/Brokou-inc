
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

  return (
    <div>
      <DataTable columns={columns} data={jobOffers} onOfferAdded={handleOfferAdded} />
    </div>
  );
}
