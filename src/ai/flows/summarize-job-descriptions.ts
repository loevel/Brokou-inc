'use server';

/**
 * @fileOverview A flow to summarize job descriptions for the Careers page.
 *
 * - summarizeJobDescription - A function that summarizes a job description.
 * - SummarizeJobDescriptionInput - The input type for the summarizeJobDescription function.
 * - SummarizeJobDescriptionOutput - The return type for the summarizeJobDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeJobDescriptionInputSchema = z.object({
  description: z
    .string()
    .describe('The full job description to be summarized.'),
  activities: z.array(z.string()).describe('List of responsibilities or activities.'),
  deliverables: z.array(z.string()).describe('List of expected deliverables.'),
  requirements: z.array(z.string()).describe('List of job requirements.'),
});
export type SummarizeJobDescriptionInput = z.infer<typeof SummarizeJobDescriptionInputSchema>;

const SummarizeJobDescriptionOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise and engaging summary of the job description in French.'),
});
export type SummarizeJobDescriptionOutput = z.infer<typeof SummarizeJobDescriptionOutputSchema>;

export async function summarizeJobDescription(
  input: SummarizeJobDescriptionInput
): Promise<SummarizeJobDescriptionOutput> {
  return summarizeJobDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeJobDescriptionPrompt',
  input: {schema: SummarizeJobDescriptionInputSchema},
  output: {schema: SummarizeJobDescriptionOutputSchema},
  prompt: `Vous êtes un expert en recrutement. Veuillez fournir un résumé concis et engageant en français de la description de poste suivante, en synthétisant les informations des sections ci-dessous.

Description générale:
{{{description}}}

Responsabilités:
{{#each activities}}
- {{{this}}}
{{/each}}

Biens livrables:
{{#each deliverables}}
- {{{this}}}
{{/each}}

Exigences:
{{#each requirements}}
- {{{this}}}
{{/each}}
`,
});

const summarizeJobDescriptionFlow = ai.defineFlow(
  {
    name: 'summarizeJobDescriptionFlow',
    inputSchema: SummarizeJobDescriptionInputSchema,
    outputSchema: SummarizeJobDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
