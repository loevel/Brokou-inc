import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Trophy, Users, Eye } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";

const teamMembers = [
  { name: "Alice Dupont", role: "CEO & Fondatrice", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
  { name: "Bob Martin", role: "Directeur Technique", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { name: "Clara Dubois", role: "Responsable Marketing", avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
  { name: "David Petit", role: "Chef de Projet Senior", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026708c" },
];

export default function AProposPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "about-us-header");

  return (
    <div>
      <section className="relative py-24 md:py-32 bg-secondary">
        {headerImage && (
             <div className="absolute inset-0">
                <Image 
                    src={headerImage.imageUrl} 
                    alt={headerImage.description}
                    data-ai-hint={headerImage.imageHint}
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
             </div>
        )}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            À Propos de Brokou Inc.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Apprenez à connaître l'équipe, la mission et les valeurs qui nous animent.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre Histoire</h2>
                 <p className="mt-4 text-muted-foreground">
                    Fondée en 2020, Brokou Inc. est née de la volonté de simplifier la complexité technologique pour les entreprises de toutes tailles. Nous avons commencé avec une petite équipe de passionnés et sommes devenus un partenaire de confiance pour la transformation numérique.
                 </p>
                 <p className="mt-4 text-muted-foreground">
                    Notre parcours est marqué par un engagement constant envers l'innovation, l'excellence et, surtout, le succès de nos clients. Chaque projet est une nouvelle opportunité de repousser les limites et de créer de la valeur durable.
                 </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Mission</CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-muted-foreground">Rendre la technologie accessible et puissante pour tous.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Vision</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-muted-foreground">Être le leader de la transformation numérique en Europe.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Notre Équipe</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Rencontrez les esprits créatifs et les experts techniques qui font le succès de Brokou Inc.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
