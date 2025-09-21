import Image from "next/image";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone, Printer, Building2 } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";

export const metadata = {
  title: "Contact - BROKOU INC",
  description: "Contactez-nous pour toute question ou pour démarrer un projet. Nous sommes là pour vous aider.",
};

export default function ContactPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "contact-header");
  const address = "3755 E Boul Matte, Brossard, QC J4Y 2P4, Canada";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
                        <h3 className="text-lg font-semibold">Adresse du siège social</h3>
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{address}</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md mt-1">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Téléphone</h3>
                        <a href="tel:5149141934" className="text-muted-foreground hover:text-primary">(514) 914-1934</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md mt-1">
                        <Printer className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Télécopieur</h3>
                        <p className="text-muted-foreground">(450) 444-3318</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md mt-1">
                        <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Bureau de Québec</h3>
                        <p className="text-muted-foreground">(En cours d'aménagement)</p>
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

      <section className="py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Nous trouver</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Venez nous rendre visite à notre bureau.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.589953938551!2d-73.43577768444432!3d45.41913197910003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc905803423b705%3A0x1d1f0c5b3b1be4!2s3755%20Boulevard%20Matte%20E%2C%20Brossard%2C%20QC%20J4Y%202P4%2C%20Canada!5e0!3m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
