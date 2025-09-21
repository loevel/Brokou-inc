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
  jobDescription: z
    .string()
    .describe('The full job description to be summarized.'),
});
export type SummarizeJobDescriptionInput = z.infer<typeof SummarizeJobDescriptionInputSchema>;

const SummarizeJobDescriptionOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise and engaging summary of the job description.'),
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
  prompt: `You are a recruiting expert. Please provide a concise and engaging summary of the following job description:\n\n{{{jobDescription}}}`,
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
