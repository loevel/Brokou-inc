"use client";

import { useState } from "react";
import { services as initialServices } from "@/lib/data";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import type { Service } from "@/lib/types";
import { getIcon } from "@/lib/data";

export default function GestionServicesPage() {
  const [services, setServices] = useState<Service[]>(initialServices);

  const handleServiceAdded = (newService: Omit<Service, 'icon'>) => {
    const fullNewService: Service = {
      ...newService,
      icon: getIcon(newService.iconName),
    };
    setServices((prevServices) => [fullNewService, ...prevServices]);
  };
  
  const handleServiceUpdated = (updatedService: Omit<Service, 'icon'>) => {
    setServices((prevServices) => 
        prevServices.map(service => service.id === updatedService.id ? { ...updatedService, icon: getIcon(updatedService.iconName) } : service)
    );
  };

  const handleServiceDeleted = (serviceId: string) => {
    setServices((prevServices) => prevServices.filter(service => service.id !== serviceId));
  }

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
        onServiceUpdated={handleServiceUpdated}
        onServiceDeleted={handleServiceDeleted}
      />
    </div>
  );
}
