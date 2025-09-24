
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import placeholderImages from "@/lib/placeholder-images.json";
import { FileText, Phone, Laptop, ClipboardList, PenSquare, ArrowRight, Lightbulb, UserCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Processus de Recrutement - BROKOU INC",
  description: "Découvrez comment se déroule notre processus de recrutement, de la candidature à l'embauche.",
};

const recruitmentProcess = [
    { 
        title: "1. Dépôt de votre CV", 
        icon: FileText, 
        description: "Tout commence par votre candidature. Postulez à une offre qui vous intéresse ou envoyez-nous une candidature spontanée. Notre équipe examine chaque CV avec la plus grande attention pour déceler votre potentiel." 
    },
    { 
        title: "2. Entrevue téléphonique", 
        icon: Phone, 
        description: "Si votre profil correspond, un membre de notre équipe de recrutement vous contactera pour un premier échange. C'est l'occasion de discuter de votre parcours, de vos motivations et de répondre à vos premières questions." 
    },
    { 
        title: "3. Entrevue de sélection", 
        icon: Laptop, 
        description: "Cette étape, généralement menée par vidéoconférence, implique une rencontre avec le gestionnaire du poste et potentiellement d'autres membres de l'équipe. Nous évaluerons vos compétences techniques et comportementales à travers des discussions et des mises en situation." 
    },
    { 
        title: "4. Suivi de votre candidature", 
        icon: ClipboardList, 
        description: "La communication est essentielle. Quelle que soit l'issue du processus, nous nous engageons à vous fournir un retour constructif et à vous tenir informé de l'avancement de votre candidature." 
    },
    { 
        title: "5. Offre d'embauche", 
        icon: PenSquare, 
        description: "Félicitations ! Si vous êtes le talent que nous recherchons, nous vous ferons une offre d'emploi formelle. Bienvenue chez BROKOU INC., où votre nouvelle aventure commence." 
    }
];

const candidateTips = [
    {
        icon: Lightbulb,
        title: "Personnalisez votre candidature",
        description: "Montrez-nous que vous connaissez BROKOU INC. et expliquez pourquoi vous êtes le candidat idéal pour ce poste en particulier."
    },
    {
        icon: UserCheck,
        title: "Mettez en avant vos réalisations",
        description: "Plutôt que de lister des tâches, parlez-nous de vos succès concrets avec des exemples chiffrés lorsque c'est possible."
    },
    {
        icon: Sparkles,
        title: "Soyez vous-même",
        description: "Nous cherchons des personnalités authentiques qui partagent nos valeurs. Votre personnalité est aussi importante que vos compétences."
    }
];


export default function RecruitmentProcessPage() {
    const headerImage = placeholderImages.placeholderImages.find(p => p.id === "recruitment-header");

    return (
        <div>
            <section className="relative flex items-center justify-center min-h-[60vh] bg-secondary">
                {headerImage && (
                    <div className="absolute inset-0">
                        <Image 
                            src={headerImage.imageUrl} 
                            alt={headerImage.description}
                            data-ai-hint={headerImage.imageHint}
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                )}
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Notre Processus de Recrutement
                    </h1>
                    <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
                        Nous croyons en un processus transparent et humain pour trouver les meilleurs talents qui partageront nos valeurs et notre vision.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 hidden md:block"></div>
                        
                        {recruitmentProcess.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`relative flex md:items-center mb-16 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <CardHeader>
                                                <CardTitle>{step.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{step.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="absolute md:relative left-0 md:left-auto top-4 md:top-auto -translate-x-1/2 md:translate-x-0">
                                         <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center border-4 border-background shadow-md">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                     <div className="w-1/2 hidden md:block"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

             <section className="py-20 lg:py-24 bg-secondary">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Conseils pour votre candidature</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Mettez toutes les chances de votre côté.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {candidateTips.map((tip, index) => {
                             const Icon = tip.icon;
                            return(
                            <Card key={index} className="text-center p-8">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <CardTitle className="mb-2">{tip.title}</CardTitle>
                                <CardDescription>{tip.description}</CardDescription>
                            </Card>
                        )})}
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-24 text-center bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold">Prêt(e) à nous rejoindre ?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
                        Votre prochaine opportunité professionnelle vous attend. Consultez nos offres et trouvez le poste qui vous correspond.
                    </p>
                    <div className="mt-8">
                        <Button variant="secondary" size="lg" asChild>
                            <Link href="/carrieres#job-offers">
                                Voir les offres d'emploi <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
