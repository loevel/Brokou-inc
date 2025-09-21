"use client";

import * as React from "react";
import { ColumnDef, Row, Table } from "@tanstack/react-table";
import type { Service } from "@/lib/types";
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { EditServiceForm } from "./edit-service-form";


// Because the 'icon' prop is a component, it is not serializable.
// We pass the serializable parts of the service to the data table.
type SerializableService = Omit<Service, "icon">;

declare module '@tanstack/react-table' {
  interface TableMeta<TData> {
    onServiceUpdated: (updatedService: SerializableService) => void;
    onServiceDeleted: (serviceId: string) => void;
  }
}

const ActionsCell = ({ row, table }: { row: Row<SerializableService>, table: Table<SerializableService> }) => {
  const service = row.original;
  const { toast } = useToast();
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

  const handleServiceUpdated = (updatedService: SerializableService) => {
    table.options.meta?.onServiceUpdated(updatedService);
    setIsEditDialogOpen(false);
  };

  const handleServiceDeleted = () => {
    table.options.meta?.onServiceDeleted(service.id);
    toast({
      title: "Service supprimé !",
      description: "Le service a été supprimé avec succès.",
    });
    setIsDeleteDialogOpen(false);
  }
  
  return (
    <>
    {/* Edit Dialog */}
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier le service</DialogTitle>
          <DialogDescription>
            Mettez à jour les détails du service ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <EditServiceForm service={service} onServiceUpdated={handleServiceUpdated} />
      </DialogContent>
    </Dialog>
    
    {/* Delete Alert Dialog */}
    <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer ce service ?</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action est irréversible. Le service "{service.name}" sera définitivement supprimé.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleServiceDeleted}>Supprimer</AlertDialogAction>
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
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(service.id)}>
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

export const columns: ColumnDef<SerializableService>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description_short",
    header: "Description Courte",
    cell: ({ row }) => {
        const description = row.original.description_short;
        return <div className="max-w-xs truncate">{description}</div>
    }
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      return <ActionsCell row={row} table={table as Table<SerializableService>} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
