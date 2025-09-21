"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { JobOffer } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ActionsCell = ({ offer }: { offer: JobOffer }) => {
  return (
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
        <DropdownMenuItem>Modifier</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
    cell: ({ row }) => {
      const offer = row.original;
      return <ActionsCell offer={offer} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
