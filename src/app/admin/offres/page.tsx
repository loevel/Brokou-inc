import { jobOffers } from "@/lib/data";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

export default function GestionOffresPage() {
  return (
    <div>
      <DataTable columns={columns} data={jobOffers} />
    </div>
  );
}
