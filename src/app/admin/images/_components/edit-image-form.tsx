
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

const formSchema = z.object({
  id: z.string().min(3, {
    message: "L'ID doit contenir au moins 3 caractères.",
  }),
  description: z.string().min(5, {
    message: "La description doit contenir au moins 5 caractères.",
  }),
  imageUrl: z.string().min(1, { message: "L'URL est requise." }),
  imageHint: z.string().min(2, {
    message: "L'indice AI doit contenir au moins 2 caractères.",
  }),
});

interface EditImageFormProps {
  image: ImagePlaceholder;
  onImageUpdated: (updatedImage: ImagePlaceholder) => void;
}

export function EditImageForm({ image, onImageUpdated }: EditImageFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: image.id,
      description: image.description,
      imageUrl: image.imageUrl,
      imageHint: image.imageHint,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const updatedImage: ImagePlaceholder = { ...values };

    onImageUpdated(updatedImage);

    toast({
      title: "Image modifiée !",
      description: "L'image a été mise à jour avec succès.",
    });

    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="partner-logo-1" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Logo de notre partenaire" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de l'image</FormLabel>
              <FormControl>
                <Input placeholder="https://picsum.photos/seed/p1/60/60" {...field} />
              </FormControl>
               <FormDescription>
                Utilisez une URL complète (https://...) ou un chemin local vers le dossier `public` (ex: /images/clients/logo.svg).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageHint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Indice AI</FormLabel>
              <FormControl>
                <Input placeholder="company logo" {...field} />
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
