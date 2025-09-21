import Image from "next/image";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";

export const metadata = {
  title: "Contact - Brokou Hub",
  description: "Contactez-nous pour toute question ou pour démarrer un projet. Nous sommes là pour vous aider.",
};

export default function ContactPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "contact-header");

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
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Une question ? Un projet en tête ? N'hésitez pas à nous contacter.
          </p>
        </div>
      </section>
      
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Entrons en contact</h2>
              <p className="mt-4 text-muted-foreground">
                Remplissez le formulaire ou utilisez nos coordonnées ci-dessous. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <div className="mt-8 space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md mt-1">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Notre Bureau</h3>
                        <p className="text-muted-foreground">123 Rue de l'Innovation, 75001 Paris, France</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md mt-1">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <a href="mailto:contact@brokou.inc" className="text-muted-foreground hover:text-primary">contact@brokou.inc</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md mt-1">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Téléphone</h3>
                        <a href="tel:+33123456789" className="text-muted-foreground hover:text-primary">+33 1 23 45 67 89</a>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="p-8 border rounded-lg bg-card shadow-lg">
                <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
