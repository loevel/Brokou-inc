
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

export const metadata = {
  title: "Conditions d'utilisation - BROKOU INC",
  description: "Consultez les conditions d'utilisation du site web de BROKOU INC.",
};

export default function ConditionsUtilisationPage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "terms-header");

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
            Conditions d'utilisation
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Dernière mise à jour : 24 juillet 2024
          </p>
        </div>
      </section>
      
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="prose dark:prose-invert max-w-4xl mx-auto">
            <h2>1. Introduction</h2>
            <p>
              Bienvenue sur le site web de BROKOU INC. (ci-après "le Site"). En accédant à notre Site et en l'utilisant, vous acceptez d'être lié par les présentes conditions d'utilisation ("Conditions"). Si vous n'acceptez pas ces Conditions, veuillez ne pas utiliser le Site.
            </p>

            <h2>2. Utilisation du Site</h2>
            <p>
              Vous vous engagez à utiliser le Site uniquement à des fins légales et d'une manière qui ne porte pas atteinte aux droits de, ne restreint pas ou n'inhibe pas l'utilisation et la jouissance du Site par un tiers. Les conduites interdites incluent le harcèlement ou le fait de causer de la détresse ou des inconvénients à toute personne, la transmission de contenu obscène ou offensant ou la perturbation du flux normal de dialogue au sein du Site.
            </p>

            <h2>3. Propriété Intellectuelle</h2>
            <p>
              Tous les contenus présents sur ce Site, y compris, mais sans s'y limiter, les textes, graphiques, logos, icônes, images, clips audio, téléchargements numériques, compilations de données et logiciels, sont la propriété de BROKOU INC. ou de ses fournisseurs de contenu et sont protégés par les lois internationales sur le droit d'auteur.
            </p>

            <h2>4. Clause de non-responsabilité</h2>
            <p>
              Le Site et son contenu sont fournis "tels quels" et "selon la disponibilité" sans aucune représentation ou approbation faite et sans garantie d'aucune sorte, qu'elle soit expresse ou implicite, y compris, mais sans s'y limiter, les garanties implicites de qualité satisfaisante, d'adéquation à un usage particulier, de non-contrefaçon, de compatibilité, de sécurité et d'exactitude.
            </p>

            <h2>5. Limitation de responsabilité</h2>
            <p>
              En aucun cas, BROKOU INC. ne sera responsable de toute perte ou dommage, y compris, sans limitation, les pertes ou dommages indirects ou consécutifs, ou toute perte ou dommage que ce soit résultant de la perte de données ou de profits découlant de, ou en relation avec, l'utilisation de ce Site.
            </p>
            
            <h2>6. Exactitude des informations</h2>
            <p>
              Nous nous efforçons de garantir que les informations sur le Site sont correctes, mais nous ne garantissons pas leur exhaustivité ou leur exactitude ; nous ne nous engageons pas non plus à garantir que le Site reste disponible ou que le matériel sur le Site est maintenu à jour.
            </p>

            <h2>7. Modifications des Conditions</h2>
            <p>
              BROKOU INC. se réserve le droit de modifier ces Conditions à tout moment. Votre utilisation continue du Site après la publication des modifications constitue votre acceptation des nouvelles conditions. Veuillez consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
            </p>

            <h2>8. Droit applicable</h2>
            <p>
              Ces Conditions seront régies et interprétées conformément aux lois de la province de Québec, Canada. Tout litige découlant de ces conditions sera soumis à la juridiction exclusive des tribunaux de cette province.
            </p>
            
            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant ces Conditions d'utilisation, veuillez nous contacter via notre <a href="/contact">page de contact</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
