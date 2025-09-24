
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Est-ce que je peux consulter les échelles de salaire ?",
    answer: "La rémunération est discutée lors du processus d'entrevue et est basée sur l'expérience et les compétences. Nous nous assurons d'offrir des salaires compétitifs sur le marché.",
  },
  {
    question: "Comment puis-je créer une alerte-emploi ?",
    answer: "Actuellement, nous n'offrons pas de système d'alertes-emploi. Nous vous encourageons à consulter régulièrement notre page carrières pour les dernières opportunités.",
  },
  {
    question: "Je n'ai pas trouvé d'offre qui correspond à mon profil. Est-ce que je peux quand même vous envoyer mon CV ?",
    answer: "Absolument ! Nous sommes toujours à la recherche de talents. Vous pouvez nous envoyer une candidature spontanée via l'adresse email fournie sur cette page ou via notre formulaire de contact.",
  },
  {
    question: "Est-ce que je vais recevoir un courriel de confirmation après avoir soumis ma candidature ?",
    answer: "Oui, vous recevrez une confirmation de l'équipe emploie par courriel après avoir soumis votre candidature. Si vous ne la voyez pas, vérifiez votre dossier de courrier indésirable.",
  },
  {
    question: "Comment est-ce que je peux suivre l'avancement de ma candidature?",
    answer: "Notre équipe des ressources humaines vous contactera si votre profil correspond aux exigences du poste. En raison du volume de candidatures, nous ne pouvons pas fournir de mises à jour individuelles à chaque étape."
  }
];

export function FaqSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Foire aux questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
