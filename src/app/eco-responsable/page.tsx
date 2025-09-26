
"use client";

import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Trash2, Droplets, Sofa, Repeat, Briefcase } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ideas = [
  {
    title: "Énergie",
    description: "Nous faisons tout ce qui est possible pour économiser l'énergie. Les équipements informatiques/électroniques et les luminaires sont deux éléments de notre espace de travail dont l'utilisation affecte directement notre consommation d'énergie et nos factures d'électricité. Nous veillons à éteindre nos appareils pendant les périodes de non-utilisation et utilisons des ampoules DEL.",
    icon: Zap,
    imageId: "eco-energy"
  },
  {
    title: "Déchets",
    description: "Nous réduisons au maximum nos déchets. Nous effectuons le triage systématique de nos déchets pour maximiser le recyclage. Faire le tri est une tâche facile si chaque type de matière recyclable a son contenant. Ainsi, moins de déchets sont acheminés vers les sites d'enfouissement.",
    icon: Trash2,
    imageId: "eco-waste"
  },
  {
    title: "Eau",
    description: "Nous économisons de l'eau à la maison et nous encourageons de le faire aussi à la maison. Nous revoyons constamment nos habitudes pour réduire notre consommation d'eau.",
    icon: Droplets,
    imageId: "eco-water"
  },
  {
    title: "Meubles",
    description: "Nous prolongeons la durée de vie de nos meubles. Nous privilégions la réparation et l'entretien de nos meubles.",
    icon: Sofa,
    imageId: "eco-furniture"
  },
  {
    title: "Articles réutilisables",
    description: "Nous achetons des articles que nous pouvons recharger, remplir et réutiliser plusieurs fois pour ainsi économiser de l'argent à long terme.",
    icon: Repeat,
    imageId: "eco-reusable"
  },
  {
    title: "Solutions d'affaires durables",
    description: "Toutes nos solutions sont accompagnées des options qui permettent de conforter notre vision d'entreprise citoyenne et éco-responsable.",
    icon: Briefcase,
    imageId: "eco-solutions"
  }
];

const IdeaCard = ({ idea }: { idea: typeof ideas[0] }) => {
    const image = placeholderImages.placeholderImages.find(p => p.id === idea.imageId);
    const Icon = idea.icon;
    return (
        <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            {image && (
                <div className="relative h-48 w-full">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-fill"
                    />
                </div>
            )}
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle>{idea.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{idea.description}</p>
            </CardContent>
        </Card>
    );
};

export default function EcoResponsablePage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const windmillsImage = placeholderImages.placeholderImages.find(p => p.id === "eco-windmills");
  const landscapeImage = placeholderImages.placeholderImages.find(p => p.id === "eco-landscape");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>('.animated-section');
        sections.forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        });
    }, mainRef);
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={mainRef}>
      <section className="py-20 lg:py-24 animated-section">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">C'est Quoi Être Éco-Responsable ?</h1>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary animated-section">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            {windmillsImage && (
                 <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={windmillsImage.imageUrl}
                        alt={windmillsImage.description}
                        data-ai-hint={windmillsImage.imageHint}
                        fill
                        className="object-cover"
                    />
                 </div>
            )}
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Une responsabilité envers l'environnement</h2>
                 <p className="mt-4 text-muted-foreground">
                    Cela implique une prise de conscience des impacts que nos actions - et celles des autres - ont sur le monde qui nous entoure et sur les générations futures. En tant que citoyen, nous avons un devoir de protection de notre planète et de ses habitants et la seule façon de le faire est d'être plus conscients de nos actions et de leurs conséquences. L'éco-responsabilité est l'un des outils les plus puissants à notre disposition pour contribuer à la préservation de notre belle planète.
                 </p>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 animated-section">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Un quotidien plus durable</h2>
        </div>
      </section>

       <section className="py-20 lg:py-24 bg-secondary animated-section">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            {landscapeImage && (
                 <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={landscapeImage.imageUrl}
                        alt={landscapeImage.description}
                        data-ai-hint={landscapeImage.imageHint}
                        fill
                        className="object-cover"
                    />
                 </div>
            )}
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Adopter un mode de vie plus durable à la maison</h2>
                 <p className="mt-4 text-muted-foreground">
                    Nous voulons habiliter les gens à adopter un mode de vie plus durable. C'est pourquoi nous nous concentrons sur des articles abordables qui sont économes en ressources et en énergie. Avec nos options écoénergétiques, nous ouvrons la voie vers des maisons plus soucieuses du développement durable, et ce, pour le plus grand nombre.
                 </p>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 animated-section">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nos idées pour un lieu de vie durable</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ideas.map((idea) => (
                    <IdeaCard key={idea.title} idea={idea} />
                ))}
            </div>
        </div>
      </section>

    </div>
  );
}
