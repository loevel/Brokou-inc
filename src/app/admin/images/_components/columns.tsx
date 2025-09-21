"use client";

import * as React from "react";
import { ColumnDef, Row, Table } from "@tanstack/react-table";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
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
import { useToast } from "@/hooks/use-toast";
import { EditImageForm } from "./edit-image-form";
import Image from "next/image";


declare module '@tanstack/react-table' {
  interface TableMeta<TData> {
    onImageUpdated: (updatedImage: TData) => void;
    onImageDeleted: (imageId: string) => void;
  }
}

const ActionsCell = ({ row, table }: { row: Row<ImagePlaceholder>, table: Table<ImagePlaceholder> }) => {
  const image = row.original;
  const { toast } = useToast();
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

  const handleImageUpdated = (updatedImage: ImagePlaceholder) => {
    table.options.meta?.onImageUpdated(updatedImage);
    setIsEditDialogOpen(false);
  };

  const handleImageDeleted = () => {
    // Simulate API call
    table.options.meta?.onImageDeleted(image.id);
    toast({
      title: "Image supprimée !",
      description: "L'image a été supprimée avec succès.",
      variant: "destructive"
    });
    setIsDeleteDialogOpen(false);
  }
  
  return (
    <>
    {/* Edit Dialog */}
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier l'image</DialogTitle>
          <DialogDescription>
            Mettez à jour les détails de l'image ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <EditImageForm image={image} onImageUpdated={handleImageUpdated} />
      </DialogContent>
    </Dialog>
    
    {/* Delete Alert Dialog */}
    <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer cette image ?</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action est irréversible. L'image avec l'ID "{image.id}" sera définitivement supprimée.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleImageDeleted} className="bg-destructive hover:bg-destructive/90">Supprimer</AlertDialogAction>
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
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(image.id)}>
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

export const columns: ColumnDef<ImagePlaceholder>[] = [
    {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
        const imageUrl = row.original.imageUrl;
        return <Image src={imageUrl} alt={row.original.description} width={40} height={40} className="rounded-md object-cover" />
    }
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "imageHint",
    header: "Indice AI",
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
