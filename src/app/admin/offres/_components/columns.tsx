
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EditOfferForm } from "./edit-offer-form";
import { Switch } from "@/components/ui/switch";

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends JobOffer> {
    onOfferUpdated: (id: string, offerData: Omit<JobOffer, 'id' | 'isActive'>) => Promise<JobOffer | null>;
    onOfferDeleted: (offerId: string) => Promise<void>;
    onToggleStatus: (offerId: string, currentStatus: boolean) => void;
    pendingStatusChange: boolean;
  }
}

const ActionsCell = ({ row, table }: { row: Row<JobOffer>, table: Table<JobOffer> }) => {
  const offer = row.original;
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

  const handleOfferDeleted = () => {
    table.options.meta?.onOfferDeleted(offer.id);
    setIsDeleteDialogOpen(false);
  }
  
  return (
    <>
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Modifier l'offre d'emploi</DialogTitle>
          <DialogDescription>
            Mettez à jour les détails de l'offre ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <EditOfferForm 
            offer={offer} 
            onOfferUpdated={table.options.meta!.onOfferUpdated}
            onFormSubmitted={() => setIsEditDialogOpen(false)}
        />
      </DialogContent>
    </Dialog>

    <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer cette offre ?</AlertDialogTitle>
            <AlertDialogDescription>
                Cette action est irréversible. L'offre "{offer.title}" sera définitivement supprimée.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleOfferDeleted} className="bg-destructive hover:bg-destructive/90">Supprimer</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>

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
        <DropdownMenuItem className="text-destructive" onClick={() => setIsDeleteDialogOpen(true)}>Supprimer</DropdownMenuItem>
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
    accessorKey: "validityDate",
    header: "Date de fin",
  },
  {
    accessorKey: "isActive",
    header: "Actif",
    cell: ({ row, table }) => {
      const offer = row.original;
      return (
        <Switch
          checked={offer.isActive}
          onCheckedChange={() => table.options.meta?.onToggleStatus(offer.id, offer.isActive)}
          disabled={table.options.meta?.pendingStatusChange}
          aria-label="Toggle offer status"
        />
      );
    },
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
