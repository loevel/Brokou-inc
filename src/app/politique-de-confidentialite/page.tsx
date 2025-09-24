
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <div className="prose dark:prose-invert max-w-6xl mx-auto font-body mb-12">
             <p>La présente politique de confidentialité (la « Politique de Confidentialité ») encadre les pratiques de confidentialité de BROKOU INC. (« BROKOU », « nous », « notre ») relativement à notre utilisation des données à caractères personnels (ci-après « renseignements personnels ») recueillis par BROKOU ; - lors de votre utilisation de nos sites Web accessible via les liens suivant : www.brokou.com et www.brokou.ca (le « SITE »), - dans le cadre de vos échanges avec un recruteur de BROKOU et /ou démarches de candidature à un emploi proposé par BROKOU, qu’ils soient initiés par vous ou le recruteur de BROKOU. et vise notamment à renseigner: - l’utilisateur du site web (« UTILISATEUR », « vous », « votre », « vos ») - les candidats et potentiels candidats, “candidats”, “vous”, “votre”, “vos” Quant aux questions suivantes :</p>
            <ul>
              <li>Quels renseignements personnels nous recueillons auprès de vous ;</li>
              <li>De quelle façon nous utilisons vos renseignements et avec qui nous sommes susceptibles de les partager ;</li>
              <li>Quels sont vos choix offerts relativement à la cueillette, l’utilisation et la distribution des renseignements ;</li>
              <li>Quels types de procédures de sécurité sont mises en place pour protéger vos renseignements d’une perte, d’une mauvaise utilisation ou d’une modification des renseignements sous notre contrôle ; et</li>
              <li>De quelle façon vous pouvez corriger un renseignement inexact.</li>
            </ul>
            <p>Pour votre information, cette Politique de Confidentialité s’applique seulement aux renseignements recueillis par BROKOU dans le cadre de : votre utilisation du site web. vos échanges avec les recruteurs de BROKOU qu’ils soient à leur initiative ou à la vôtre, qu’ils aboutissent ou non à une candidature formalisée ou une embauche.</p>
            <p>Cette Politique de Confidentialité ne s’applique pas à tout renseignement recueilli en ligne ou hors ligne par toute autre entité, que cette entité soit ou non affiliée à BROKOU. BROKOU s’engage en tout état de cause à respecter les trois principes essentiels suivants :</p>
            <ul>
              <li>Nous collectons uniquement les données strictement nécessaires au regard de leur finalité ;</li>
              <li>Vous restez maître de vos renseignements personnels ; et</li>
              <li>Vos renseignements personnels sont traités de manière transparente, confidentielle et sécurisée.</li>
            </ul>
            <p>La présente politique de confidentialité se divise en deux sections :</p>
            <ul>
                <li>La première section vise les renseignements personnels régis par le Règlement (UE) 2016/679 du parlement européen et du conseil du 27 avril 2016, entré en vigueur le 25 mai 2018 (ci-après « RGPD ») ;</li>
                <li>La seconde section vise les renseignements personnels régis par la Loi sur la protection des renseignements personnels dans le secteur privé (ci-après « LPRPSP ») du Québec, Canada ; (dite Loi 25. Promulguée le 22 septembre 2021</li>
            </ul>
          </div>
          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                <AccordionItem value="item-0">
                    <AccordionTrigger className="text-2xl font-bold">SECTION 1 : RÈGLES APPLICABLES AUX PERSONNES CONCERNÉES PAR LES RENSEIGNEMENTS PERSONNELS RÉGIS PAR LE RGPD</AccordionTrigger>
                    <AccordionContent>
                        <div className="prose dark:prose-invert max-w-none font-body pt-4">
                            <h3>Article 1. Définitions</h3>
                            <p>Les termes, mentionnés ci-dessous ont, dans la présente Politique de confidentialité, la signification suivante :</p>
                            <p><strong>RESPONSABLE DE TRAITEMENT :</strong> désigne l’entité qui détermine les moyens et finalités d’un traitement de données à caractère personnel.</p>
                            <p><strong>RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS :</strong> désigne la personne responsable du respect du Règlement Général sur la protection des données personnelles et de la protection des renseignements personnels.</p>
                            <p><strong>UTILISATEUR :</strong> désigne toute personne majeure qui accède et navigue sur le SITE.</p>
                            <p><strong>CANDIDAT :</strong> désigne toute personne majeure intéressée par une opportunité d’emploi chez BROKOU et /ou toute personne majeure avec laquelle un recruteur initie un échange.</p>

                            <h3>Article 2. Pourquoi nous recueillons vos renseignements personnels ? Finalités du traitement</h3>
                            <p>Les renseignements personnels que nous recueillons sur vous sur le site BROKOU.ca et lors d’échanges, d’entretiens servent principalement à donner suite aux demandes en ligne et hors ligne que vous nous adressez. Vos différentes données sont susceptibles d’être collectées par BROKOU pour des finalités explicites, légitimes et déterminées afin d’assurer :</p>
                            <ul>
                            <li>Le bon fonctionnement et l’amélioration permanente du SITE, de ses services et de ses fonctionnalités ;</li>
                            <li>La réception à votre demande ou celle de.s s, d’éléments de candidature à un poste ;</li>
                            <li>La gestion de votre inscription aux évènements organisés par BROKOU ;</li>
                            <li>La gestion de vos demandes de contacts et de rendez-vous ;</li>
                            <li>La gestion de vos demandes de droit d’accès, de rectification et d’opposition, d’effacement, de limitation, de portabilité, et le droit d’introduire une réclamation auprès des autorités compétentes en la matière ; et</li>
                            <li>Élaborer et créer des statistiques commerciales.</li>
                            </ul>

                            <h3>Article 3. Identité du responsable de traitement</h3>
                            <p>Vos renseignements personnels sont collectés et traités par BROKOU. Le Responsable de la Protection des Renseignements personnels est le responsable du traitement des données collectées dans le cadre de l’exploitation du SITE et / ou dans le cadre de démarches de candidatures à un emploi Pour toute question relative à la gestion et à l’utilisation faite de vos renseignements personnels, vous pouvez nous joindre à ou par courrier postal à 3755 E Boul Matte, Brossard, QC J4Y 2P4.</p>
                            
                            <h3>Article 4. Collecte et traitement des données personnelles</h3>
                            <p>Lorsque :</p>
                            <ul>
                                <li>les Utilisateurs naviguent sur le SITE et/ou souhaitent bénéficier des services en ligne disponibles sur le SITE, BROKOU peut collecter certains de leurs renseignements personnels. Ces données sont traitées conformément aux finalités prévues lors de la collecte.</li>
                                <li>Les CANDIDATS s’entretiennent avec des recruteurs de BROKOU et progressent dans un parcours de recrutement au sein de BROKOU.</li>
                            </ul>
                            <p>Les données susceptibles d’être collectées, utilisées ou traitées par BROKOU pour la réalisation des finalités décrites à l’article 3 de la présente politique de confidentialité concernent :</p>
                            <ul>
                            <li>Des données d’identification (nom, prénom, courriel, numéro de téléphone, entreprise, fonction, le cas échéant copie de la carte d’identité, aux fins de preuve de l’exercice d’un droit d’accès, de rectification ou d’opposition ou pour répondre à une obligation légale) ;</li>
                            <li>Votre CV et informations liés à votre expérience professionnelle, votre poste actuel, votre cursus académique, vos diplômes et attestations,</li>
                            <li>Des données de connexion (adresses IP, logs de connexion) et les renseignements collectés par nos Témoins de connexion (pour des informations sur les renseignements collectés par ces Témoins de connexion, veuillez visiter notre Politique de gestion des témoins de connexion);</li>
                            <li>Vos préférences de navigation (langues, pays, etc.) ;</li>
                            <li>Votre parcours et votre historique de navigation sur notre SITE ;</li>
                            <li>Votre adresse IP ; et</li>
                            <li>Des renseignements relatifs à votre appareil, votre système d’exploitation ou votre navigateur.</li>
                            </ul>
                            <p>En particulier, BROKOU est susceptible de collecter des données à caractère personnel :</p>
                            <ul>
                            <li>Lors de votre visite du SITE ;</li>
                            <li>Lors de votre demande de contact auprès de BROKOU.</li>
                            <li>Par une communication en personne ou en ligne avec un employé de BROKOU autorisé à recevoir le renseignement personnel ou par courriel.</li>
                            </ul>
                            <p>Quel que soit le mode de collecte, BROKOU s’engage à vous informer des finalités du traitement, du caractère obligatoire ou facultatif des réponses à apporter, des conséquences éventuelles, à son égard, d’un défaut de réponse, des destinataires des données, de l’existence et des modalités d’exercice de ses droits d’accès, de rectification et d’opposition au traitement de ses données.</p>
                            
                            <h3>Article 5. Consentement</h3>
                            <p>Les données vous concernant peuvent être collectées via des plateformes professionnelles ou directement auprès de vous, lors de votre navigation sur le SITE, lors de contacts avec les recruteurs, ou lorsque vous remplissez une demande de contact par formulaire. Lorsque cela est nécessaire au regard des lois en vigueur, BROKOU s’engage, selon les cas, à recueillir votre consentement et/ou à vous permettre de vous opposer à l’utilisation de vos données pour certaines finalités.</p>
                            
                            <h3>Article 6. Destinataires des données</h3>
                            <p>L’accès à vos renseignements personnels est limité :</p>
                            <ul>
                            <li>Au personnel habilité des différents services de BROKOU (le personnel habilité des services recrutement et assignations, mandataires, communication, administratif, et informatique),</li>
                            <li>Aux Sous-traitants de BROKOU qui agissent au nom et pour le compte de BROKOU, notamment l’hébergeur du SITE,</li>
                            </ul>
                            <p>Vos données ne sont communiquées, échangées, à aucune autre personne que celles mentionnées ci-dessus.</p>

                            <h3>Article 7. Durée de conservation des données</h3>
                            <p>BROKOU s’engage à ce que les données collectées soient conservées sous une forme permettant votre identification pendant une durée qui n’excède pas la durée nécessaire aux finalités pour lesquelles ces données sont collectées et traitées. Cependant, le traitement des données est possible pour la preuve d’un droit ou d’un contrat. Ces données peuvent également être conservées dans l’objectif de respecter une obligation légale ou gardées dans des fichiers conformément aux règlements et lois applicables. Les données d’identification de l’UTILISATEUR sont conservées par BROKOU pendant une durée de trois (3) ans à compter du dernier contact avec l’UTILISATEUR. Les informations des CANDIDATS sont conservées par BROKOU pendant une période initiale de 23 mois, à compter du premier contact avec BROKOU, et peuvent faire l’objet d’une période de conservation supplémentaire de 24 mois, avec le consentement du CANDIDAT. Pour la gestion des demandes de droit sur vos données personnelles : vos données sont conservées 1 an. S’agissant des témoins de connexion, afin d’assurer le bon fonctionnement et l’amélioration permanente du SITE et de ses fonctionnalités, les données de fréquentation brutes associées à un identifiant sont conservées pendant une durée de mois. Au-delà de ce délai, elles sont supprimées ou anonymisées. (Pour plus de détails, consultez notre politique de gestion des témoins de connexion)</p>
                            
                            <h3>Article 8. Vos droits</h3>
                            <p>Conformément aux lois en vigueur, vous disposez des droits suivants :</p>
                            <ul>
                            <li>Vous pouvez accéder aux renseignements personnels que nous détenons à votre sujet ;</li>
                            <li>Vous pouvez faire rectifier les renseignements personnels inexacts et incomplets que nous détenons à votre sujet ;</li>
                            <li>Vous pouvez demander à mettre à jour ou compléter les renseignements personnels que nous détenons ;</li>
                            <li>Vous pouvez retirer à tout moment votre consentement ; et</li>
                            <li>Vous pouvez demander la désindexation de tout hyperlien qui permettrait votre identification sur notre site.</li>
                            </ul>
                            <p>Ces droits peuvent être exercés, par simple demande par courrier électronique à l’adresse communication@brokou.com, ou par courrier adressé à la direction de l’entreprise en indiquant vos coordonnées (nom, prénom, adresse et d’une copie d’un titre d’identité signé) et un motif légitime lorsque celui-ci est exigé par la loi.</p>

                            <h3>Article 9. Coordonnées du Responsable de la Protection des Renseignements personnels</h3>
                            <p>Pour toute demande d’information concernant la politique de protection des renseignements personnels du SITE, l’exercice de vos droits ou pour répondre à vos demandes, vous pouvez vous adresser à notre Chef de la Protection des Renseignements personnels. Vous pouvez le joindre à l’adresse communication@brokou.com, ou par courrier à la direction de l’entreprise au 3755 E Boul Matte, Brossard, QC J4Y 2P4.</p>

                            <h3>Article 10. Sécurité</h3>
                            <p>Nous nous engageons à mettre en œuvre toutes les mesures techniques et organisationnelles afin d’assurer la sécurité et la confidentialité de vos renseignements personnels. À ce titre, BROKOU prend les précautions utiles, pour préserver la sécurité des données et, notamment, empêcher qu’elles soient déformées, endommagées, ou que des tiers non autorisés y aient accès (protection physique des locaux, procédé d’authentification de nos clients avec accès personnel et sécurisé via des identifiants et mots de passe confidentiels, journalisation des connexions, chiffrement de certaines données…).</p>

                            <h3>Article 11. Témoins de connexion (« cookies »)</h3>
                            <p>Notre site web peut utiliser de temps à autre des témoins de connexion et autres technologies similaires afin de mieux vous reconnaître lorsque vous retournez sur le site web. Un témoin de connexion est un petit fichier de données entreposé sur l’ordinateur d’un utilisateur d’Internet par un serveur web. Les témoins de connexion sont utilisés pour nous aider à vous identifier lorsque vous retournez sur le site web et pour adapter l’information que vous recevez lorsque vous naviguez sur le site web. Pour plus d’informations, consultez notre Politique sur les Témoins.</p>
                            
                            <h3>Article 12. Vie privée des enfants</h3>
                            <p>Notre site web ne s’adresse en aucun cas à des mineurs.</p>

                            <h3>Article 13. Liens</h3>
                            <p>Ce site web peut contenir des liens à des sites non affiliés à BROKOU. BROKOU n’est pas responsable des pratiques de confidentialité de toutes autres entités ou de leurs sites web.</p>
                            
                            <h3>Article 14. Avis de changements</h3>
                            <p>BROKOU se réserve le droit de modifier cette Politique de Confidentialité en tout temps. Seule la Politique de Confidentialité actuelle, telle qu’établi sur le SITE, sera réputée effective. En utilisant le site web et/ou en nous fournissant vos renseignements personnels, vous consentez et acceptez les termes de cette Politique de Confidentialité et à tout amendement y apporté par votre utilisation continue.</p>

                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                     <AccordionTrigger className="text-2xl font-bold">SECTION 2 : RÈGLES APPLICABLES AUX PERSONNES CONCERNÉES PAR LES RENSEIGNEMENTS PERSONNELS RÉGIS PAR LA LPRPSP (QUÉBEC, CANADA)</AccordionTrigger>
                      <AccordionContent>
                        <div className="prose dark:prose-invert max-w-none font-body pt-4">
                            <p>Toutes collectes, usages, communication, conservation et destruction des renseignements personnels (ci-après tout « Traitements ») qui sont régis par la Loi sur la protection des renseignements personnels dans le secteur privé (ci-après « LPRPSP ») telle que modifiée par la Loi 25 du 23 septembre 2021 sur la protection des renseignements personnels dans le secteur privé bénéficient des protections visées par la présente section. Sans s’y limiter, la présente politique de confidentialité vise à vous informer :</p>
                            <ul>
                            <li>Des moyens utilisés pour BROKOU pour recueillir des renseignements personnels ;</li>
                            <li>De la nature des renseignements personnels qui sont recueillis par BROKOU et des fins poursuivies par ces renseignements personnels ;</li>
                            <li>De la façon dont BROKOU peut utiliser les renseignements personnels ainsi que des tiers auxquels BROKOU est susceptible de communiquer ces renseignements personnels, le cas échéant ;</li>
                            <li>Des différentes mesures de sécurité mises en place pour BROKOU afin de protéger le caractère confidentiel des renseignements personnels ; et</li>
                            <li>Des droits dont bénéficient toutes personnes concernées par les renseignements personnels collectés, utilisés, communiqués ou conservés par BROKOU, notamment les droits d’accès et de rectification.</li>
                            </ul>
                            <p>BROKOU s’engage en tout état de cause à respecter les trois principes essentiels suivants : Nous collectons uniquement les données strictement nécessaires au regard de leur finalité ; Vous restez maître de vos renseignements personnels ; et Vos données sont traitées de manière transparente, confidentielle et sécurisée.</p>

                            <h3>Article 1. Définitions</h3>
                            <p>Les termes, mentionnés ci-dessous, ont dans la présente Politique de confidentialité, la signification suivante :</p>
                            <p><strong>CHEF DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS :</strong> Désigne la personne chargée d’assurer le respect et la mise en œuvre de la LPRPSP. Elle est chargée de répondre aux demandes d’accès et de rectification des personnes concernées. Un UTILISATEUR peut communiquer au responsable en communiquant un courriel à cette adresse : communication@brokou.com ou par courrier postal en envoyant une lettre au 3755 E Boul Matte, Brossard, QC J4Y 2P4.</p>
                            <p><strong>UTILISATEUR :</strong> désigne toute personne qui accède et navigue sur le SITE soit en tant que simple internaute soit en tant que CLIENT.</p>
                            <p><strong>CANDIDAT :</strong> désigne toute personne majeure intéressée par une opportunité d’emploi chez BROKOU et /ou toute personne majeure avec laquelle un recruteur initie un échange</p>

                            <h3>Article 2. Fins des renseignements personnels</h3>
                            <p>Les fins des renseignements personnels régis par la LPRPSP sont substantiellement les mêmes que celles définies à l’article 2 de la Section 1 de la présente politique.</p>

                            <h3>Article 3. Identité et coordonnées du RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS</h3>
                            <p>Tel qu’identifié, notre RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS est le Chef de la protection des renseignements personnels de BROKOU. Toute personne peut communiquer avec le responsable en lui communiquant un courriel à cette adresse : communication@brokou.com ou en lui adressant une lettre au 3755 E Boul Matte, Brossard, QC J4Y 2P4.</p>

                            <h3>Article 4. Collecte et utilisation des renseignements personnels</h3>
                            <p>Lorsque les UTILISATEURS naviguent sur le SITE ou souhaitent bénéficier des services en ligne disponibles sur le SITE, Les CANDIDATS s’entretiennent avec des employés de BROKOU chargés du recrutement et progressent dans un parcours de recrutement au sein de BROKOU. BROKOU peut collecter certains renseignements personnels concernant les UTILISATEURS et CANDIDATS. Ces renseignements personnels sont utilisés afin d’accomplir les fins identifiées à l’article 2 de la présente section. Les renseignements personnels collectés sont les mêmes que ceux mentionnés à l’article 4 de la Section 1 de la présente politique, soit :</p>
                            <ul>
                            <li>Des données par l’UTILISATEUR au moyen d’un formulaire (nom, prénom, adresse courriel, numéro de téléphone, entreprise, fonction…) ;</li>
                            <li>Le cas échéant, copie de la carte d’identité, aux fins de preuve de l’exercice d’un droit d’accès, de rectification ou pour répondre à une obligation légale ;</li>
                            <li>Votre CV et informations liés à votre expérience professionnelle, votre poste actuel, votre cursus académique, vos diplômes et attestations,</li>
                            <li>Des données de connexion (adresses IP, logs de connexion) et les renseignements collectés par nos Témoins de connexion (pour des informations sur les renseignements collectés par ces Témoins de connexion, veuillez visiter notre « Politique de Gestion des Témoins de connexion »);</li>
                            <li>Les préférences de navigation (langues, pays, etc.) de l’UTILISATEUR ;</li>
                            <li>Le parcours et l’historique de navigation sur notre site de l’UTILISATEUR ;</li>
                            <li>L’adresse IP des UTILISATEURS; et</li>
                            <li>Les renseignements relatifs à l’appareil, le système d’exploitation et le navigateur utilisé par l’UTILISATEUR.</li>
                            </ul>
                            
                            <h3>Article 5. Moyens de collecte</h3>
                            <p>Les renseignements personnels sont principalement collectés par quatre moyens :</p>
                            <ul>
                            <li>Automatiquement lors de la visite du SITE. Cette collecte peut être réalisée, entre autres, des témoins de connexion installés sur votre appareil (voir à cet effet les informations mentionnées dans la Politique de Gestion des Témoins de connexion.)</li>
                            <li>Par la communication de formulaires en ligne remplis par les UTILISATEURS; et</li>
                            <li>Par une communication en personne avec un employé de BROKOU autorisé à recevoir le renseignement personnel ou par courriel.</li>
                            <li>Par le biais de plateformes professionnelles sur lesquelles vous exposez votre expérience professionnelle.</li>
                            </ul>

                            <h3>Article 6. Consentement</h3>
                            <p>Les données vous concernant peuvent être collectées via des plateformes professionnelles ou directement auprès de vous, lors de votre navigation sur le SITE, lors de contacts avec les recruteurs, ou lorsque vous remplissez une demande de contact par formulaire. Lorsque cela est nécessaire au regard de la LPRPSP, BROKOU s’engage, selon les cas, à recueillir votre consentement à la collecte, à l’utilisation ou à la communication de renseignements personnels.</p>

                            <h3>Article 7. Accès et communications des renseignements personnels</h3>
                            <p>L’accès à vos renseignements personnels est limité :</p>
                            <ul>
                            <li>Au personnel habilité des différents services de BROKOU (le personnel habilité des services recrutement et assignations, mandataires, communication, administratif, et informatique) ;</li>
                            <li>Aux sous-traitants de BROKOU qui agissent au nom et pour le compte de BROKOU, (notamment l’hébergeur du Site Web de BROKOU) ; et</li>
                            </ul>

                            <h3>Article 8. Durée de conservation des données</h3>
                            <p>BROKOU s’engage à ce que les renseignements personnels soient conservés pendant une durée n’excédant pas la durée nécessaire aux fins pour lesquelles les renseignements sont recueillis (lesquelles fins sont identifiées à l’article 2 de la présente section), à moins, bien sûr, qu’une loi applicable en prévoie autrement. Au-delà de ce délai de conservation, tous renseignements personnels seront détruits ou anonymisés. Les données d’identification de l’UTILISATEUR sont conservées par BROKOU pendant une durée à compter du dernier contact avec l’UTILISATEUR. Les informations des CANDIDATS sont conservées par BROKOU pendant une période initiale de 23 mois, à compter du premier contact avec BROKOU, et peuvent faire l’objet d’une période de conservation supplémentaire de 24 mois, avec le consentement du CANDIDAT. Les renseignements personnels visés par une demande de droit d’accès ou de rectification sont conservés pendant le temps requis pour permettre à la personne concernée d’épuiser les recours prévus par la loi et pour une période d’au moins un an suivant la décision concernant l’accès ou la rectification. S’agissant des renseignements collectés par des témoins de connexion, afin d’assurer le bon fonctionnement et l’amélioration permanente du SITE et de ses fonctionnalités, les données de fréquentation brutes associées à un identifiant sont conservées pendant une durée de six (6) mois . Au-delà de ce délai, elles sont supprimées ou anonymisées. (Pour plus de détails, consultez notre Politique de gestion des témoins de connexion)</p>

                            <h3>Article 9. Vos droits</h3>
                            <p>Vous disposez (i) d’un droit d’accès à vos renseignements personnels (ii) d’un droit de rectification de vos renseignements personnels et (iii) d’un droit de retrait de votre consentement à une utilisation ou communication de renseignements personnels.</p>
                            <h4>i) Demande d’accès</h4>
                            <p>Une personne concernée par un renseignement personnel ou une personne habilitée par la Loi sur la protection des renseignements personnels dans le secteur privé peut accéder à ses renseignements personnels en s’adressant directement au RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS de BROKOU selon la procédure prévue à l’article 10 de la présente section. Le RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS de BROKOU accordera cet accès à moins que :</p>
                            <ul>
                            <li>Une loi empêche BROKOU d’accorder l’accès ;</li>
                            <li>BROKOU possède un intérêt sérieux et légitime pour en refuser l’accès ; ou</li>
                            <li>Accorder cet accès risque de nuire sérieusement à un tiers.</li>
                            </ul>
                            <p>Un demandeur peut également demander d’obtenir une copie des renseignements personnels qui les concernent en présentant une demande écrite au RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS selon la procédure sous-mentionnée.</p>
                            <h4>ii) Demande de rectification</h4>
                            <p>Une personne concernée par un renseignement personnel ou une personne habilitée par la Loi sur la protection des renseignements personnels dans le secteur privé peut également adresser une demande de rectification des renseignements personnels. Une telle demande permettra de corriger les renseignements personnels conservés par BROKOU si :</p>
                            <ul>
                            <li>Les renseignements personnels sont inexacts ;</li>
                            <li>Les renseignements personnels sont périmés ;</li>
                            <li>Les renseignements personnels sont équivoques ;</li>
                            <li>Les renseignements personnels sont incomplets ; ou</li>
                            <li>Les renseignements personnels ont été recueillis de façon injustifiée.</li>
                            </ul>
                            <p>Alternativement, une personne concernée par un renseignement personnel peut adresser une demande de rectification demandant au RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS de détruire les renseignements personnels s’ils sont périmés ou s’ils ont été recueillis ou conservés de façon injustifiée. Toute demande de destruction ou de correction doit s’adresser par écrit au RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS en suivant la procédure prévue à l’article 10 de la présente section.</p>
                            <h4>iii) Demande de retrait de consentement</h4>
                            <p>Sous réserve des engagements contractuels avec BROKOU et de la législation applicable, une personne concernée bénéficiant de la protection de la Loi sur la protection des renseignements personnels dans le secteur privé peut retirer son consentement à certains usages ou communications de ses renseignements personnels. L’exercice de ce droit peut affecter les services de BROKOU à l’égard de la personne concernée. Un demandeur qui requiert le retrait de son consentement sera informé des conséquences de son retrait.</p>
                            
                            <h3>Article 10. Procédures pour les demandes d’accès ou de rectification</h3>
                            <p>Toutes demandes d’accès ou de rectification doivent être adressées par écrit au, de BROKOU. Un demandeur peut communiquer directement avec lui/elle en envoyant un courriel à cette adresse communication@brokou.com, ou par courrier postal au 3755 E Boul Matte, Brossard, QC J4Y 2P4. La demande doit être suffisamment détaillée pour permettre à notre Chef DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS d’évaluer et de repérer les renseignements personnels visés par la demande. Surtout le demandeur doit s’assurer que le responsable puisse le rejoindre afin que le responsable puisse lui prêter assistance pour préciser sa demande, pour faciliter l’identification des renseignements personnels visés par la demande, et, surtout, pour communiquer l’acceptation ou le refus de sa demande. Le CHEF DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS a le devoir de traiter ces demandes en 30 jours. Si la demande n’est pas traitée dans les délais, elle est réputée avoir été refusée.</p>

                            <h3>Article 11. Procédure de plainte</h3>
                            <p>Tout UTILISATEUR peut adresser une plainte quant à nos méthodes, pratiques et politiques de protection ou de gouvernance des renseignements personnels en communiquant directement à notre CHEF DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS à cette adresse courriel : communication@brokou.com, ou par courrier postal au 3755 E Boul Matte, Brossard, QC J4Y 2P4. Le RESPONSABLE DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS répondra à la plainte dans les 30 jours suivant sa réception. Si la plainte est acceptée, un bref résumé des changements apportés à nos méthodes, pratiques et politiques de protection ou de gouvernance des renseignements personnels vous sera formulé.</p>
                            
                            <h3>Article 12. Sécurité</h3>
                            <p>Nous nous engageons à mettre en œuvre toutes les mesures techniques et organisationnelles afin d’assurer la sécurité et la confidentialité de vos renseignements personnels. À ce titre, BROKOU prend les précautions utiles, pour préserver la sécurité des données et, notamment, empêcher qu’elles soient altérées, endommagées, ou que des tiers non autorisés y aient accès. Nous disposons en ce sens :</p>
                            <ul>
                            <li>D’une politique de gestion interne des accès (seuls les employés à qui il est nécessaire d'accéder aux renseignements personnels peuvent y accéder);</li>
                            <li>D'un calendrier des durées de conservation des renseignements personnels (lequel prévoit l'encadrement applicable à la conservation et à la destruction)</li>
                            <li>D’une procédure de gestion des incidents de confidentialité</li>
                            <li>D’une politique de protection interne des renseignements personnels (afin de définir les rôles des employés en cas d'incidents de confidentialités et pour assurer la protection des renseignements personnels).</li>
                            <li>De moyens de protection physique des locaux,</li>
                            <li>De la journalisation des connexions,</li>
                            <li>Du chiffrement des données en transit et aux repos</li>
                            </ul>

                            <h3>Article 13. Vie privée des enfants</h3>
                            <p>Notre SITE ne s’adresse en aucun cas à des mineurs.</p>

                            <h3>Article 14. Liens</h3>
                            <p>Ce SITE peut contenir des liens à des sites non affiliés à BROKOU. BROKOU n’est pas responsable des pratiques en matière de protection et de gestions des renseignements personnels de ces autres entités ou de leurs sites web.</p>
                            
                            <h3>Article 15. Politique de confidentialité</h3>
                            <p>BROKOU peut unilatéralement modifier la présente politique de protection des renseignements personnels. Avant d’appliquer les changements toutefois, BROKOU communiquera un avis sur le SITE qui identifiera les changements à venir. Nous vous invitons donc à revisiter la présente politique de temps à autre et de vérifier si elle aurait été modifiée. Pour faciliter cette démarche, nous avons inscrit la date de dernière mise à jour de la présente Politique. Votre utilisation du SITE, votre communication de vos renseignements personnels à un agent autorisé de BROKOU ou l’inscription de vos renseignements personnels sur un formulaire de BROKOU à compter de la réception de cette version sera réputée constituer une acceptation des modifications apportées.</p>

                            <h3>Article 16. Autres</h3>
                            <p>Pour toute question sur l’un de vos droits, si vous désirez poser des questions à BROKOU ou pour tous commentaires veuillez contacter le CHEF DE LA PROTECTION DES RENSEIGNEMENTS PERSONNELS.</p>
                            <p>A/S : Chef de la protection des renseignements personnels</p>
                            <p>BROKOU Inc.</p>
                            <p>3755 E Boul Matte, Brossard, QC J4Y 2P4</p>
                            <p>Adresse électronique : communication@brokou.com</p>
                            <p>Date de la mise à jour : 26 novembre 2023</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
