
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
import { Loader2, Lightbulb, Briefcase, BarChart, Megaphone, Code, Cloud, Users } from "lucide-react";
import { useState } from "react";
import type { Service } from "@/lib/types";
import { getIcon } from "@/lib/data";

const iconOptions = [
    { value: "Lightbulb", label: "Idée & Stratégie", icon: Lightbulb },
    { value: "Briefcase", label: "Affaires & Transformation", icon: Briefcase },
    { value: "BarChart", label: "Données & Analyse", icon: BarChart },
    { value: "Megaphone", label: "Marketing", icon: Megaphone },
    { value: "Code", label: "Développement", icon: Code },
    { value: "Cloud", label: "Cloud & Infrastructure", icon: Cloud },
    { value: "Users", label: "Utilisateurs & RH", icon: Users },
];

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

interface AddServiceFormProps {
  onServiceAdded: (newService: Omit<Service, 'icon'>) => void;
}

export function AddServiceForm({ onServiceAdded }: AddServiceFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      iconName: "Lightbulb",
      description_short: "",
      description_long: "",
      imageId: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const newService: Omit<Service, 'icon'> = {
        id: `service-${Date.now()}`,
        ...values
    }

    onServiceAdded(newService);

    toast({
      title: "Service ajouté !",
      description: "Le nouveau service a été créé avec succès.",
    });

    form.reset();
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
                  {iconOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                              <option.icon className="h-4 w-4" />
                              <span>{option.label}</span>
                          </div>
                      </SelectItem>
                  ))}
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
          Ajouter le service
        </Button>
      </form>
    </Form>
  );
}
