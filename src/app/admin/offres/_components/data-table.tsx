
"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddOfferForm } from "./add-offer-form";
import type { JobOffer } from "@/lib/types";
import { ImportOffers } from "./import-offers";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onOfferAdded: (offerData: Omit<JobOffer, 'id' | 'isActive'>) => Promise<JobOffer | null>;
  onOfferUpdated: (id: string, offerData: Omit<JobOffer, 'id' | 'isActive'>) => Promise<JobOffer | null>;
  onOfferDeleted: (offerId: string) => Promise<void>;
  onToggleStatus: (offerId: string, currentStatus: boolean) => void;
  pendingStatusChange: boolean;
}

export function DataTable<TData extends JobOffer, TValue>({
  columns,
  data,
  onOfferAdded,
  onOfferUpdated,
  onOfferDeleted,
  onToggleStatus,
  pendingStatusChange
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);
  const [isImportDialogOpen, setIsImportDialogOpen] = React.useState(false);
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    meta: {
      onOfferUpdated: onOfferUpdated,
      onOfferDeleted: (offerId: string) => {
        onOfferDeleted(offerId);
      },
      onToggleStatus,
      pendingStatusChange
    }
  });

  const handleBulkOffersAdded = (offers: (Omit<JobOffer, 'id' | 'isActive'>)[]) => {
    // This function will be called by the import component
    Promise.all(offers.map(offer => onOfferAdded(offer)))
      .then(() => {
        setIsImportDialogOpen(false);
      });
  };

  return (
    <div>
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Gestion des Offres d'Emploi</h1>
                <p className="text-muted-foreground">Ajoutez, modifiez ou supprimez les offres d'emploi.</p>
            </div>
            <div className="flex gap-2">
                <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Importer
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Importer des offres d'emploi</DialogTitle>
                      <DialogDescription>
                        Sélectionnez un fichier JSON pour importer plusieurs offres. Vous pourrez les valider une par une.
                      </DialogDescription>
                    </DialogHeader>
                    <ImportOffers onOffersValidated={handleBulkOffersAdded} />
                  </DialogContent>
                </Dialog>

                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Ajouter une offre
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Ajouter une nouvelle offre</DialogTitle>
                      <DialogDescription>
                        Remplissez les détails de l'offre d'emploi ci-dessous.
                      </DialogDescription>
                    </DialogHeader>
                    <AddOfferForm 
                      onOfferAdded={onOfferAdded} 
                      onFormSubmitted={() => setIsAddDialogOpen(false)}
                    />
                  </DialogContent>
                </Dialog>
            </div>
        </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Aucune offre d'emploi.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Précédent
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}
