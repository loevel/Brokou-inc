import { services } from "@/lib/data";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import type { Service } from "@/lib/types";

export default function GestionServicesPage() {
  const serializableServices = services.map(service => {
    const { icon, ...rest } = service;
    return rest;
  }) as Omit<Service, 'icon'>[];

  return (
    <div>
      <DataTable columns={columns} data={serializableServices} />
    </div>
  );
}
