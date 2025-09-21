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
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddImageForm } from "./add-image-form";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

interface DataTableProps<TData extends ImagePlaceholder, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onImageAdded: (newImage: ImagePlaceholder) => void;
  onImageUpdated: (updatedImage: ImagePlaceholder) => void;
  onImageDeleted: (imageId: string) => void;
}

export function DataTable<TData extends ImagePlaceholder, TValue>({
  columns,
  data,
  onImageAdded,
  onImageUpdated,
  onImageDeleted,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);
  
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
      onImageUpdated: (updatedImage: ImagePlaceholder) => {
        onImageUpdated(updatedImage);
      },
      onImageDeleted: (imageId: string) => {
        onImageDeleted(imageId);
      }
    }
  });

  const handleImageAdded = (newImage: ImagePlaceholder) => {
    onImageAdded(newImage);
    setIsAddDialogOpen(false);
  };

  return (
    <div>
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Gestion des Images</h1>
                <p className="text-muted-foreground">Ajoutez, modifiez ou supprimez les images (partenaires, outils, etc.).</p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Ajouter une image
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Ajouter une nouvelle image</DialogTitle>
                  <DialogDescription>
                    Remplissez les détails de l'image ci-dessous.
                  </DialogDescription>
                </DialogHeader>
                <AddImageForm onImageAdded={handleImageAdded} />
              </DialogContent>
            </Dialog>
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
                  Aucun résultat.
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
