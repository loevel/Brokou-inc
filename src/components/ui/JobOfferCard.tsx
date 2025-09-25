
"use client";

import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, Bot, Loader2, Info } from 'lucide-react';
import type { JobOffer } from '@/lib/types';
import { summarizeJobDescription } from '@/ai/flows/summarize-job-descriptions';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from './alert';

interface JobOfferCardProps {
  offer: JobOffer;
}

const initialState = {
  summary: '',
  error: '',
};

function SummaryButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="secondary" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Génération du résumé...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Générer un résumé avec l'IA
        </>
      )}
    </Button>
  );
}

export function JobOfferCard({ offer }: JobOfferCardProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [state, formAction] = useActionState(async (prevState: any, formData: FormData) => {
        try {
        const result = await summarizeJobDescription({ 
            description: offer.description,
            activities: offer.activities,
            deliverables: offer.deliverables,
            requirements: offer.requirements,
         });
        return { summary: result.summary, error: '' };
        } catch (e: any) {
        return { summary: '', error: e.message || 'Une erreur est survenue.' };
        }
    }, initialState);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Card className="w-full flex flex-col md:flex-row transition-all hover:shadow-lg rounded-2xl">
        <CardHeader className="flex-1 p-6">
          <Badge variant={offer.type === 'Temps plein' ? 'default' : 'secondary'} className="w-fit mb-2">{offer.type}</Badge>
          <CardTitle className="text-xl mb-2">{offer.title}</CardTitle>
          <CardDescription asChild>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Brokou Inc.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{offer.location}</span>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-6 border-t md:border-t-0 md:border-l bg-secondary/50 md:w-auto flex flex-col justify-center items-center gap-4">
           <Button asChild className="w-full rounded-full">
            <Link href={`/carrieres/${offer.id}`}>Voir les détails</Link>
          </Button>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full rounded-full">
                <Info className="mr-2 h-4 w-4" />
                <span>Résumé IA</span>
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      
      <DialogContent>
        <DialogHeader>
            <DialogTitle>Résumé de l'offre par l'IA</DialogTitle>
            <DialogDescription>
                Obtenez un aperçu rapide du poste de "{offer.title}" grâce à l'intelligence artificielle.
            </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
              {state.summary ? (
                <Alert>
                    <Bot className="h-4 w-4" />
                    <AlertTitle>Résumé</AlertTitle>
                    <AlertDescription>{state.summary}</AlertDescription>
                </Alert>
            ) : state.error ? (
              <Alert variant="destructive">
                  <Bot className="h-4 w-4" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            ) : (
              <p className="text-sm text-center text-muted-foreground py-4">Cliquez sur le bouton ci-dessous pour générer un résumé.</p>
            )}
            <form action={formAction}>
                <SummaryButton />
            </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
