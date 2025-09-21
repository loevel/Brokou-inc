import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Lightbulb, Users, Heart, Target, Scale, Recycle, ArrowRight } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";

const orgStructure = [
    { title: "1. Direction Générale", description: "Définit la vision stratégique et assure le leadership global de l'entreprise." },
    { title: "2. Direction des Systèmes d'Information", description: "Supervise l'infrastructure technologique et la sécurité des données." },
    { title: "3. Gestion de Projet", description: "Planifie, exécute et livre les projets clients avec succès." },
    { title: "4. Développement et Ingénierie", description: "Conçoit et développe des solutions logicielles innovantes et sur mesure." },
    { title: "5. Infrastructure et Réseaux", description: "Gère et maintient la robustesse et la performance de l'infrastructure." },
    { title: "6. Support et Maintenance", description: "Fournit une assistance technique et assure la continuité des services." },
    { title: "7. Sécurité Informatique", description: "Protège les actifs numériques de l'entreprise et de ses clients." },
    { title: "8. Qualité et Assurance", description: "Garantit que les produits et services respectent les plus hauts standards." },
    { title: "9. Ressources Humaines et Formation", description: "Attire, développe et retient les meilleurs talents de l'industrie." },
    { title: "10. Marketing et Ventes", description: "Promeut nos solutions et construit des relations durables avec nos clients." },
];


export default function AProposPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "about-us-header");
  const companyImage = placeholderImages.placeholderImages.find(p => p.id === "company-logo-large");
  const visionImage = placeholderImages.placeholderImages.find(p => p.id === "vision-image");
  const missionImage = placeholderImages.placeholderImages.find(p => p.id === "mission-image");
  const engagementImage = placeholderImages.placeholderImages.find(p => p.id === "engagement-image");

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
            À propos de nous
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Découvrez notre histoire, nos valeurs et ce qui nous pousse à innover chaque jour.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            {companyImage && (
                <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={companyImage.imageUrl}
                        alt={companyImage.description}
                        data-ai-hint={companyImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre entreprise</h2>
                 <p className="mt-4 text-muted-foreground">
                    Fondée sur des principes d'innovation et d'intégrité, Brokou Inc. est un leader dans le domaine des solutions technologiques. Nous nous engageons à fournir une excellence inégalée et des résultats qui comptent. Notre approche est construite sur des piliers solides qui garantissent votre succès.
                 </p>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre vision</h2>
                 <p className="mt-4 text-muted-foreground">
                    Devenir le partenaire technologique de référence en Europe, reconnu pour notre capacité à transformer les défis complexes en opportunités de croissance durable pour nos clients.
                 </p>
            </div>
            {visionImage && (
                <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={visionImage.imageUrl}
                        alt={visionImage.description}
                        data-ai-hint={visionImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
             {missionImage && (
                <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={missionImage.imageUrl}
                        alt={missionImage.description}
                        data-ai-hint={missionImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre mission</h2>
                 <p className="mt-4 text-muted-foreground">
                    Fournir des solutions technologiques innovantes et sur mesure qui permettent à nos clients d'atteindre leurs objectifs stratégiques, d'optimiser leur efficacité opérationnelle et de se démarquer dans un monde numérique en constante évolution.
                 </p>
            </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight">Nos valeurs</h2>
                  <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                      Nos valeurs fondamentales guident chacune de nos décisions et actions. Elles sont le socle de notre culture d'entreprise et de notre engagement envers nos clients.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card className="text-center p-6">
                      <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                      <p className="text-sm text-muted-foreground">Nous repoussons les limites pour créer des solutions d'avenir.</p>
                  </Card>
                  <Card className="text-center p-6">
                      <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Intégrité</h3>
                      <p className="text-sm text-muted-foreground">Nous agissons avec honnêteté et transparence en toutes circonstances.</p>
                  </Card>
                  <Card className="text-center p-6">
                      <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Partenariat</h3>
                      <p className="text-sm text-muted-foreground">Nous collaborons étroitement avec nos clients pour assurer leur succès.</p>
                  </Card>
                   <Card className="text-center p-6">
                      <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Passion</h3>
                      <p className="text-sm text-muted-foreground">Notre passion pour la technologie nous pousse à l'excellence.</p>
                  </Card>
              </div>
          </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            {engagementImage && (
                <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={engagementImage.imageUrl}
                        alt={engagementImage.description}
                        data-ai-hint={engagementImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div>
                 <h2 className="text-3xl font-bold tracking-tight">Notre engagement</h2>
                 <p className="mt-4 text-muted-foreground">
                    Nous nous engageons pour un numérique responsable. Cela inclut le développement de solutions durables, la protection de la vie privée, l'accessibilité pour tous et un impact sociétal positif. Nous croyons en une technologie qui sert l'humain et la planète.
                 </p>
                 <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3"><Recycle className="h-5 w-5 text-primary mt-1" /><span>Éco-conception de nos solutions</span></li>
                    <li className="flex items-start gap-3"><Scale className="h-5 w-5 text-primary mt-1" /><span>Éthique et transparence des données</span></li>
                    <li className="flex items-start gap-3"><Target className="h-5 w-5 text-primary mt-1" /><span>Impact social positif</span></li>
                 </ul>
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
              <h2 className="text-2xl md:text-3xl font-bold">NOUS VISONS LE MÊME BUT : <br/>VOTRE TRANQUILLITÉ D'ESPRIT.</h2>
              <Button variant="secondary" asChild>
                  <Link href="/contact">Contactez-nous <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
          </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Structure organisationnelle</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Une organisation claire et efficace au service de nos ambitions et de la réussite de vos projets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {orgStructure.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
