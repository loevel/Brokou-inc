"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { Service } from "@/lib/types";
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

const ActionsCell = ({ service }: { service: Service }) => {
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
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(service.id)}>
          Copier l'ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Modifier</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Service>[] = [
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
    cell: ({ row }) => {
      const service = row.original;
      return <ActionsCell service={service} />;
    },
  },
];
