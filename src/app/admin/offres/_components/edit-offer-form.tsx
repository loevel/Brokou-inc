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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import type { JobOffer } from "@/lib/types";

const formSchema = z.object({
  title: z.string().min(5, { message: "Le titre doit contenir au moins 5 caractères." }),
  location: z.string().min(2, { message: "Le lieu doit contenir au moins 2 caractères." }),
  type: z.enum(["Temps plein", "Temps partiel", "Contrat"]),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères." }),
  introduction: z.string().min(10, { message: "L'introduction doit contenir au moins 10 caractères." }),
  activities: z.string().min(10, { message: "Les activités doivent contenir au moins 10 caractères." }),
  deliverables: z.string().min(10, { message: "Les livrables doivent contenir au moins 10 caractères." }),
  requirements: z.string().min(10, { message: "Les exigences doivent contenir au moins 10 caractères." }),
  mode: z.string().min(2, { message: "Le mode de travail est requis." }),
  validityDate: z.string().min(10, { message: "La date de validité est requise (YYYY-MM-DD)." }),
  remuneration: z.string().min(3, { message: "La rémunération est requise." }),
  status: z.string().min(3, { message: "Le statut est requis." }),
  startDate: z.string().min(3, { message: "La date de début est requise." }),
  socialBenefits: z.boolean().default(false),
});

interface EditOfferFormProps {
  offer: JobOffer;
  onOfferUpdated: (updatedOffer: JobOffer) => void;
}

export function EditOfferForm({ offer, onOfferUpdated }: EditOfferFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: offer.title,
      location: offer.location,
      type: offer.type,
      description: offer.description,
      introduction: offer.introduction,
      activities: offer.activities.join('\n'),
      deliverables: offer.deliverables.join('\n'),
      requirements: offer.requirements.join('\n'),
      mode: offer.mode,
      validityDate: offer.validityDate,
      remuneration: offer.remuneration,
      status: offer.status,
      startDate: offer.startDate,
      socialBenefits: offer.socialBenefits,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const updatedOffer: JobOffer = {
        id: offer.id,
        ...values,
        activities: values.activities.split('\n').filter(s => s.trim() !== ''),
        deliverables: values.deliverables.split('\n').filter(s => s.trim() !== ''),
        requirements: values.requirements.split('\n').filter(s => s.trim() !== ''),
    }

    onOfferUpdated(updatedOffer);

    toast({
      title: "Offre modifiée !",
      description: "L'offre d'emploi a été mise à jour avec succès.",
    });

    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField control={form.control} name="title" render={({ field }) => ( <FormItem><FormLabel>Titre</FormLabel><FormControl><Input placeholder="Développeur Full-Stack" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="location" render={({ field }) => ( <FormItem><FormLabel>Lieu</FormLabel><FormControl><Input placeholder="Paris, France" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="type" render={({ field }) => ( <FormItem><FormLabel>Type de contrat</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Sélectionnez un type de contrat" /></SelectTrigger></FormControl><SelectContent><SelectItem value="Temps plein">Temps plein</SelectItem><SelectItem value="Temps partiel">Temps partiel</SelectItem><SelectItem value="Contrat">Contrat</SelectItem></SelectContent></Select><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="mode" render={({ field }) => ( <FormItem><FormLabel>Mode de travail</FormLabel><FormControl><Input placeholder="Hybride" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="validityDate" render={({ field }) => ( <FormItem><FormLabel>Date de fin de validité</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="remuneration" render={({ field }) => ( <FormItem><FormLabel>Rémunération</FormLabel><FormControl><Input placeholder="Selon profil" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="status" render={({ field }) => ( <FormItem><FormLabel>Statut</FormLabel><FormControl><Input placeholder="Permanent" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="startDate" render={({ field }) => ( <FormItem><FormLabel>Date d'entrée en fonction</FormLabel><FormControl><Input placeholder="Dès que possible" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="socialBenefits" render={({ field }) => ( <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 md:col-span-2"><FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl><div className="space-y-1 leading-none"><FormLabel>Avantages sociaux</FormLabel></div></FormItem> )} />
        <FormField control={form.control} name="introduction" render={({ field }) => ( <FormItem className="md:col-span-2"><FormLabel>Introduction</FormLabel><FormControl><Textarea placeholder="Courte introduction pour la carte..." {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="description" render={({ field }) => ( <FormItem className="md:col-span-2"><FormLabel>Description</FormLabel><FormControl><Textarea placeholder="Description générale du poste..." className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="activities" render={({ field }) => ( <FormItem className="md:col-span-2"><FormLabel>Activités à réaliser</FormLabel><FormControl><Textarea placeholder="Listez chaque activité sur une nouvelle ligne..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="deliverables" render={({ field }) => ( <FormItem className="md:col-span-2"><FormLabel>Biens livrables</FormLabel><FormControl><Textarea placeholder="Listez chaque livrable sur une nouvelle ligne..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="requirements" render={({ field }) => ( <FormItem className="md:col-span-2"><FormLabel>Exigences</FormLabel><FormControl><Textarea placeholder="Listez chaque exigence sur une nouvelle ligne..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <Button type="submit" className="w-full md:col-span-2" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Enregistrer les modifications
        </Button>
      </form>
    </Form>
  );
}
