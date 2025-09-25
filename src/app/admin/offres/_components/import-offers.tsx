
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import type { JobOffer } from "@/lib/types";
import { createJobOffer } from "@/lib/job-offers.service";
import { Loader2, FileCheck2, FileJson, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

type OfferToImport = Omit<JobOffer, 'id' | 'isActive'>;

const fileSchema = z.object({
  file: z.instanceof(FileList).refine(files => files?.length === 1, "Un fichier est requis."),
});

const offerSchema = z.object({
  title: z.string(),
  location: z.string(),
  type: z.enum(["Temps plein", "Temps partiel", "Contrat"]),
  description: z.string(),
  introduction: z.string(),
  activities: z.array(z.string()),
  deliverables: z.array(z.string()),
  requirements: z.array(z.string()),
  mode: z.string(),
  validityDate: z.string(),
  remuneration: z.string(),
  status: z.string(),
  startDate: z.string(),
  duration_months: z.number().optional(),
  socialBenefits: z.boolean(),
});

const offersArraySchema = z.array(offerSchema);

interface ImportOffersProps {
  onOffersValidated: (offers: OfferToImport[]) => void;
}

export function ImportOffers({ onOffersValidated }: ImportOffersProps) {
  const { toast } = useToast();
  const [offersToValidate, setOffersToValidate] = useState<OfferToImport[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof fileSchema>>({
    resolver: zodResolver(fileSchema),
  });

  const handleFileParse = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target?.result;
          const parsedJson = JSON.parse(content as string);
          const validatedOffers = offersArraySchema.parse(parsedJson);
          setOffersToValidate(validatedOffers);
          setError(null);
          setCurrentIndex(0);
        } catch (err) {
          if (err instanceof z.ZodError) {
             setError(`Erreur de validation du JSON: ${err.issues.map(i => `${i.path.join('.')}: ${i.message}`).join(', ')}`);
          } else {
             setError("Erreur lors de la lecture ou de la validation du fichier. Assurez-vous que c'est un JSON valide avec le bon format.");
          }
          setOffersToValidate([]);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleValidateAndSave = async () => {
    setIsProcessing(true);
    try {
      const currentOffer = offersToValidate[currentIndex];
      await createJobOffer(currentOffer);
      toast({
        title: "Offre validée et enregistrée !",
        description: `L'offre "${currentOffer.title}" a été ajoutée à la base de données.`,
      });

      if (currentIndex < offersToValidate.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        onOffersValidated(offersToValidate);
        toast({
          title: "Importation terminée !",
          description: "Toutes les offres ont été traitées avec succès.",
        });
      }
    } catch (err) {
      toast({
        title: "Erreur lors de l'enregistrement",
        description: "Cette offre n'a pas pu être enregistrée. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const currentOffer = offersToValidate[currentIndex];
  const progress = offersToValidate.length > 0 ? ((currentIndex + 1) / offersToValidate.length) * 100 : 0;

  if (offersToValidate.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
            <FileJson className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-2">Glissez et déposez un fichier JSON ici, ou</p>
            <Input id="json-file" type="file" accept=".json" onChange={handleFileParse} className="w-auto" />
        </div>
        {error && (
             <Alert variant="destructive">
                <AlertTitle>Erreur d'importation</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
       <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
                <span>Validation des offres</span>
                <span>{currentIndex + 1} / {offersToValidate.length}</span>
            </div>
            <Progress value={progress} />
       </div>

      <Card>
        <CardHeader>
          <CardTitle>{currentOffer.title}</CardTitle>
          <CardDescription>{currentOffer.location} - {currentOffer.type}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 max-h-96 overflow-y-auto pr-6">
            <div>
                <h4 className="font-semibold">Introduction</h4>
                <p className="text-sm text-muted-foreground">{currentOffer.introduction}</p>
            </div>
             <div>
                <h4 className="font-semibold">Description</h4>
                <p className="text-sm text-muted-foreground">{currentOffer.description}</p>
            </div>
             <div>
                <h4 className="font-semibold">Responsabilités</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {currentOffer.activities.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
             <div>
                <h4 className="font-semibold">Exigences</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {currentOffer.requirements.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleValidateAndSave} disabled={isProcessing} className="w-full">
            {isProcessing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <FileCheck2 className="mr-2 h-4 w-4" />
            )}
            Valider et Enregistrer
          </Button>
        </CardFooter>
      </Card>
      
       {currentIndex === offersToValidate.length - 1 && (
            <Alert>
                <Check className="h-4 w-4" />
                <AlertTitle>Dernière offre</AlertTitle>
                <AlertDescription>Ceci est la dernière offre à valider.</AlertDescription>
            </Alert>
        )}
    </div>
  );
}
