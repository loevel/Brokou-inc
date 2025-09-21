
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import type { Service } from "@/lib/types";

type SerializableService = Omit<Service, "icon">;

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Le nom doit contenir au moins 3 caractères.",
  }),
  iconName: z.enum(["Lightbulb", "Briefcase", "BarChart", "Megaphone", "Code", "Cloud", "Users"]),
  description_short: z.string().min(10, {
    message: "La description courte doit contenir au moins 10 caractères.",
  }),
  description_long: z.string().min(20, {
    message: "La description longue doit contenir au moins 20 caractères.",
  }),
  imageId: z.string().min(3, {
    message: "L'ID de l'image doit contenir au moins 3 caractères."
  }),
});

interface EditServiceFormProps {
  service: SerializableService;
  onServiceUpdated: (updatedService: SerializableService) => void;
}

export function EditServiceForm({ service, onServiceUpdated }: EditServiceFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: service.name,
      iconName: service.iconName,
      description_short: service.description_short,
      description_long: service.description_long,
      imageId: service.imageId,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const updatedService: SerializableService = {
        id: service.id,
        ...values
    }

    onServiceUpdated(updatedService);

    toast({
      title: "Service modifié !",
      description: "Le service a été mis à jour avec succès.",
    });

    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du service</FormLabel>
              <FormControl>
                <Input placeholder="Conseil Stratégique" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="iconName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icône</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une icône" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Lightbulb">Lightbulb</SelectItem>
                  <SelectItem value="Briefcase">Briefcase</SelectItem>
                  <SelectItem value="BarChart">BarChart</SelectItem>
                  <SelectItem value="Megaphone">Megaphone</SelectItem>
                  <SelectItem value="Code">Code</SelectItem>
                  <SelectItem value="Cloud">Cloud</SelectItem>
                  <SelectItem value="Users">Users</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description_short"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description Courte</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description courte pour la carte de service..."
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description_long"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description Longue</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description détaillée pour la page du service..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID de l'image</FormLabel>
              <FormControl>
                <Input placeholder="service-consulting" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Enregistrer les modifications
        </Button>
      </form>
    </Form>
  );
}
