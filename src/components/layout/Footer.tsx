import Link from "next/link";
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Image src="https://picsum.photos/seed/logo/120/40" alt="Brokou Inc. Logo" width={120} height={40} />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Solutions innovantes pour un monde en pleine transformation numérique.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">À Propos</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/carrieres" className="text-muted-foreground hover:text-primary transition-colors">Carrières</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">Espace Admin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span>3755 E Boul Matte, Brossard, QC J4Y 2P4, Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:5149141934" className="hover:text-primary transition-colors">(514) 914-1934</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@brokou.inc" className="hover:text-primary transition-colors">contact@brokou.inc</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {year} Brokou Inc. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
