"use client";

import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, Bot, Loader2, ChevronsUpDown } from 'lucide-react';
import type { JobOffer } from '@/lib/types';
import { summarizeJobDescription } from '@/ai/flows/summarize-job-descriptions';

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
    <Button type="submit" variant="secondary" size="sm" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Génération...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Résumer avec l'IA
        </>
      )}
    </Button>
  );
}

export function JobOfferCard({ offer }: JobOfferCardProps) {
  const [state, formAction] = useActionState(async (prevState: any, formData: FormData) => {
    try {
      const result = await summarizeJobDescription({ jobDescription: offer.description });
      return { summary: result.summary, error: '' };
    } catch (e: any) {
      return { summary: '', error: e.message || 'Une erreur est survenue.' };
    }
  }, initialState);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="text-xl mb-2">{offer.title}</CardTitle>
            <Badge variant={offer.type === 'Temps plein' ? 'default' : 'secondary'}>{offer.type}</Badge>
        </div>
        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>Brokou Inc.</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{offer.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-2 text-primary">
                Voir la description et le résumé IA
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <h4 className="font-semibold">Description complète</h4>
              <p className="text-muted-foreground whitespace-pre-wrap">{offer.description}</p>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-semibold">Résumé par l'IA</h4>
                {state.summary ? (
                  <p className="text-muted-foreground p-4 bg-secondary rounded-md border">{state.summary}</p>
                ) : state.error ? (
                  <p className="text-destructive">{state.error}</p>
                ) : (
                  <p className="text-sm text-muted-foreground">Cliquez sur le bouton pour générer un résumé.</p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <form action={formAction}>
          <SummaryButton />
        </form>
        <Button>Postuler</Button>
      </CardFooter>
    </Card>
  );
}

function Separator() {
    return <div className="bg-border h-[1px] w-full my-4" />
}
