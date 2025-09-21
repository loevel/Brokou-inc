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
import { AddServiceForm } from "./add-service-form";
import type { Service } from "@/lib/types";

type SerializableService = Omit<Service, "icon">;

interface DataTableProps<TData extends SerializableService, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onServiceAdded: (newService: SerializableService) => void;
  onServiceUpdated: (updatedService: SerializableService) => void;
  onServiceDeleted: (serviceId: string) => void;
}

export function DataTable<TData extends SerializableService, TValue>({
  columns,
  data,
  onServiceAdded,
  onServiceUpdated,
  onServiceDeleted,
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
      onServiceUpdated: (updatedService: SerializableService) => {
        onServiceUpdated(updatedService);
      },
      onServiceDeleted: (serviceId: string) => {
        onServiceDeleted(serviceId);
      }
    }
  });

  const handleServiceAdded = (newService: SerializableService) => {
    onServiceAdded(newService);
    setIsAddDialogOpen(false);
  };

  return (
    <div>
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Gestion des Services</h1>
                <p className="text-muted-foreground">Ajoutez, modifiez ou supprimez les services proposés.</p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Ajouter un service
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Ajouter un nouveau service</DialogTitle>
                  <DialogDescription>
                    Remplissez les détails du service ci-dessous.
                  </DialogDescription>
                </DialogHeader>
                <AddServiceForm onServiceAdded={handleServiceAdded} />
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
