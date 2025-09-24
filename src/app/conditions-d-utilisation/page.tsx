
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
            <h2>Préambule</h2>
            <p>
              Sous réserve de votre acceptation des présentes conditions d’utilisation (les « Conditions d’utilisation ») régissant votre utilisation du site Web appartenant à BROKOU INC. (« BROKOU », « nous », « notre ») accessible via le lien suivant : www.brokou.com (le « Site Web »), BROKOU vous autorise à utiliser le Site Web en tant qu’utilisateur (« Utilisateur, « vous » « votre »). Si vous n’acceptez pas les Conditions d’utilisation, veuillez ne pas utiliser le Site Web.
            </p>

            <h2>Objet du Site Web</h2>
            <p>
              Le principal objectif poursuivi par la mise en ligne du Site Web est de présenter l’entreprise exploitée par BROKOU, ainsi que ses ressources, ses domaines d’expertise, ses possibilités d’emploi et de fournir aux Utilisateurs de l’information d’ordre général liée aux activités de l’entreprise. Ainsi, tous les renseignements que contient le Site Web ne peuvent en aucun cas être considérés comme des conseils, avis ou recommandations émanant d’un professionnel, d’un consultant, d’un expert en technologie de l’information ou à quel qu’autre titre.
            </p>
            <p>
              Malgré tous les efforts raisonnables de BROKOU pour s’assurer que les documents et informations figurant sur le Site Web sont exacts, BROKOU ne peut garantir leur exactitude, leur intégralité, le fait qu’ils sont mis à jour, le fait qu’ils seront toujours disponibles, l’absence d’erreurs ou d’omissions dans le Site Web, que les vices seront corrigés ou que le Site Web et le ou les serveurs qui en permettent l’accès ne contiennent aucun virus ou autres composants nuisibles. Le Site Web, les documents et les informations qui s’y trouvent sont fournis « tels quels » et « selon leur disponibilité », sans déclaration, garantie ou condition de quelque sorte que ce soit, expresse ou implicite.
            </p>
            <p>
              BROKOU, ses administrateurs, ses mandataires ou ses employés ne seront en aucun cas tenus responsables des pertes, frais ou dommages-intérêts de quelque nature que ce soit (y compris, sans restriction, les dommages-intérêts par suite d’un préjudice causé à une entreprise, d’une perte de bénéfices, de programmes ou de données, d’une interruption des activités ou de toute autre perte pécuniaire ou économique), qu’ils soient directs, indirects, exemplaires, spéciaux, accessoires ou autres, découlant de l’utilisation ou du mauvais usage du présent Site Web ou du fait qu’il contient un vice, une inexactitude, une erreur ou une omission, peu importe la nature de l’action, même si BROKOU a été avisé de la survenance éventuelle de dommages-intérêts ou si ces dommages-intérêts sont raisonnablement prévisibles.
            </p>

            <h2>Sécurité</h2>
            <p>
              Vous acceptez que vous n’avez pas pris et que vous ne prendrez aucune action ayant pour objet de : (i) accéder à des données du Site Web qui ne vous sont pas destinées; (ii) violer la vie privée, voler l’identité ou obtenir des renseignements personnels à propos de tout autre Utilisateur (si applicable); (iii) sonder, scanner ou tester la vulnérabilité du Site Web et/ou contourner la sécurité sans autorisation appropriée; et (iv) tenter d’interférer avec l’entreprise de BROKOU.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              Sauf si autrement prévu, toute propriété intellectuelle (incluant les droits d’auteur, marques de commerce, marques de services, commerces et brevets) relatifs au Site Web (la « Propriété intellectuelle ») appartiennent ou sont contrôlés par ou donnés à licence par BROKOU ou ses personnes affiliées. Tout contenu étant affiché sur le Site Web est la propriété exclusive de BROKOU. La copie ou l’utilisation non autorisée de toute telle Propriété intellectuelle est strictement interdite. BROKOU peut utiliser des marques de commerce de tierces parties appartenant à d’autres entités sur le Site Web. Telles marques de commerce demeureront la propriété intellectuelle des tiers propriétaires en question. Rien aux présentes ne sera interprété comme accordant implicitement ou expressément autrement toute licence ou droit d’utiliser le nom, les marques de commerce de BROKOU ou le nom de commerce de BROKOU, le Site Web, ou toute information affichée ou y contenue sauf si expressément autorisé par ces Conditions d’utilisation ou avec la permission préalable écrite de BROKOU ou de la tierce partie qui peut être propriétaire de la propriété intellectuelle.
            </p>

            <h2>Liens externes</h2>
            <p>
              Le Site Web peut contenir des liens à des sites Web de tierces parties (« Sites Web de tierces parties ») et tels Sites Web de tierces parties peuvent être sujets à des conditions d’utilisation différentes. Conséquemment, BROKOU ne peut être responsable pour la disponibilité ou l’exactitude de tels Sites Web de tierces parties ainsi que le contenu, les informations, les produits ou services disponibles sur tels Sites Web de tierces parties.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Par votre utilisation du Site Web, vous consentez à ce que les présentes Conditions d’utilisation et toute question relative à sa validité et à son exécution soient régies par les lois de la province du Québec au Canada et soient soumises à la juridiction entière et exclusive des tribunaux du district judiciaire de Québec.
            </p>
            
            <h2>Modifications</h2>
            <p>
              BROKOU peut modifier de temps à autre et à sa seule et absolue discrétion les Conditions d’utilisation du Site Web sans préavis préalable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
