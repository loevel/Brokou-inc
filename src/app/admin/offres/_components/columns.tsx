"use client";

import { ColumnDef, Row, Table } from "@tanstack/react-table";
import type { JobOffer } from "@/lib/types";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EditOfferForm } from "./edit-offer-form";

declare module '@tanstack/react-table' {
  interface TableMeta<TData> {
    onOfferUpdated: (updatedOffer: TData) => void;
  }
}

const ActionsCell = ({ row, table }: { row: Row<JobOffer>, table: Table<JobOffer> }) => {
  const offer = row.original;
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);

  const handleOfferUpdated = (updatedOffer: JobOffer) => {
    table.options.meta?.onOfferUpdated(updatedOffer);
    setIsEditDialogOpen(false);
  };
  
  return (
    <>
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier l'offre d'emploi</DialogTitle>
          <DialogDescription>
            Mettez à jour les détails de l'offre ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <EditOfferForm offer={offer} onOfferUpdated={handleOfferUpdated} />
      </DialogContent>
    </Dialog>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Ouvrir le menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(offer.id)}>
          Copier l'ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>Modifier</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  );
};

export const columns: ColumnDef<JobOffer>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Titre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "location",
    header: "Lieu",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
        const type = row.original.type;
        return <Badge variant={type === 'Temps plein' ? 'default' : 'secondary'}>{type}</Badge>;
    }
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      return <ActionsCell row={row} table={table} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
