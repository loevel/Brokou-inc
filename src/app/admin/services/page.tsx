import { services } from "@/lib/data";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

export default function GestionServicesPage() {
  return (
    <div>
      <DataTable columns={columns} data={services} />
    </div>
  );
}
