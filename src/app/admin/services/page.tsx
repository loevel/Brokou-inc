"use client";

import { useState } from "react";
import { services as initialServices } from "@/lib/data";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import type { Service } from "@/lib/types";
import { getIcon } from "@/lib/data";

export default function GestionServicesPage() {
  // We need to keep the full service object in state, including the icon component
  const [services, setServices] = useState<Service[]>(initialServices);

  const handleServiceAdded = (newService: Omit<Service, 'icon'>) => {
    const fullNewService: Service = {
      ...newService,
      icon: getIcon(newService.iconName),
    };
    setServices((prevServices) => [fullNewService, ...prevServices]);
  };

  // The data passed to the table needs to be serializable
  const serializableServices = services.map(service => {
    const { icon, ...rest } = service;
    return rest;
  });

  return (
    <div>
      <DataTable 
        columns={columns} 
        data={serializableServices} 
        onServiceAdded={handleServiceAdded}
      />
    </div>
  );
}
