
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";

export const metadata = {
  title: "Politique de confidentialité - BROKOU INC",
  description: "Consultez la politique de confidentialité du site web de BROKOU INC.",
};

export default function PolitiqueDeConfidentialitePage() {
  const headerImage = placeholderImages.placeholderImages.find(p => p.id === "privacy-header");

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
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Dernière mise à jour : 24 juillet 2024
          </p>
        </div>
      </section>
      
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="prose dark:prose-invert max-w-4xl mx-auto font-body">
            <h2>Introduction</h2>
            <p>
              BROKOU INC. ("nous", "notre" ou "nos") s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web www.brokou.com (le "Site"). Veuillez lire attentivement cette politique de confidentialité. Si vous n'êtes pas d'accord avec les termes de cette politique de confidentialité, veuillez ne pas accéder au site.
            </p>

            <h2>Collecte de vos informations</h2>
            <p>
              Nous pouvons collecter des informations vous concernant de différentes manières. Les informations que nous pouvons collecter sur le Site incluent :
            </p>
            <h3>Données personnelles</h3>
            <p>
                Les informations personnellement identifiables, telles que votre nom, votre adresse e-mail et votre numéro de téléphone, que vous nous fournissez volontairement lorsque vous nous contactez via le formulaire de contact.
            </p>
            <h3>Données de navigation</h3>
            <p>
                Les informations que votre navigateur envoie automatiquement chaque fois que vous visitez le Site, telles que votre adresse IP, le type et la version de votre navigateur, les pages de notre Site que vous visitez, l'heure et la date de votre visite, le temps passé sur ces pages et d'autres statistiques.
            </p>

            <h2>Utilisation de vos informations</h2>
            <p>
              Avoir des informations précises sur vous nous permet de vous offrir une expérience fluide, efficace et personnalisée. Spécifiquement, nous pouvons utiliser les informations collectées à votre sujet via le Site pour :
            </p>
            <ul>
                <li>Répondre à vos demandes et questions.</li>
                <li>Améliorer notre Site et nos services.</li>
                <li>Prévenir les activités frauduleuses et surveiller la sécurité.</li>
                <li>Compiler des données statistiques anonymes pour une utilisation interne ou avec des tiers.</li>
            </ul>

            <h2>Divulgation de vos informations</h2>
            <p>
              Nous ne partagerons pas les informations que nous avons collectées à votre sujet avec des tiers, sauf dans les situations suivantes :
            </p>
            <ul>
                <li>Si la divulgation est nécessaire pour se conformer à une obligation légale.</li>
                <li>Pour protéger et défendre les droits ou la propriété de BROKOU INC.</li>
                <li>Pour prévenir ou enquêter sur d'éventuels actes répréhensibles en rapport avec le Site.</li>
            </ul>

            <h2>Sécurité de vos informations</h2>
            <p>
              Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, veuillez être conscient que malgré nos efforts, aucune mesure de sécurité n'est parfaite ou impénétrable, et aucune méthode de transmission de données ne peut être garantie contre toute interception ou autre type de mauvaise utilisation.
            </p>

            <h2>Contactez-nous</h2>
            <p>
              Si vous avez des questions ou des commentaires sur cette politique de confidentialité, veuillez nous contacter via notre <a href="/contact">page de contact</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );