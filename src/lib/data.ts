import type { Service, JobOffer } from "@/lib/types";
import { BarChart, Briefcase, Cloud, Code, Megaphone, Lightbulb, Users, type LucideIcon, type LucideProps, ShieldCheck, FolderGit, ShieldAlert, Network, Phone, Router, HardDrive, Settings, Smartphone, Download, LifeBuoy, ShoppingCart, Cpu, HardDriveUpload, Power, FolderGit2, Wrench, Lock, BadgeCheck, Users2, Flag } from "lucide-react";
import React from 'react';

const iconMap: { [key: string]: LucideIcon } = {
    Lightbulb,
    Briefcase,
    BarChart,
    Megaphone,
    Code,
    Cloud,
    Users,
    FolderGit,
    ShieldAlert,
    ShieldCheck,
    Network,
    Phone,
    Router,
    HardDrive,
    Settings,
    Smartphone,
    Download,
    LifeBuoy,
    ShoppingCart,
    Cpu,
    HardDriveUpload,
    Power,
    FolderGit2,
    Wrench,
    Lock,
    BadgeCheck,
    Users2,
    Flag,
};

export const services: Service[] = [
  {
    id: "project-management",
    name: "Gestion des projets",
    iconName: "FolderGit",
    icon: FolderGit,
    category: "Gouvernance, audit et sécurité des TI",
    description_short: "Alignez votre stratégie informatique sur la stratégie économique.",
    description_long: "Nous assurons la réalisation de programmes produisant des bénéfices, dans les délais et les budgets et répondant aux exigences et aux normes de qualité.",
    details: [
        "Aligner la stratégie informatique sur la stratégie économique",
        "Réaliser des bénéfices à partir des investissements informatiques et du portefeuille de services",
        "Assurer la réalisation de programmes produisant des bénéfices, dans les délais et les budgets et répondant aux exigences et aux normes de qualité",
    ],
    imageId: "service-projects",
  },
  {
    id: "risk-management",
    name: "Gestion des risques",
    iconName: "ShieldAlert",
    icon: ShieldAlert,
    category: "Gouvernance, audit et sécurité des TI",
    description_short: "Accompagner les équipes dans les initiatives de conformité.",
    description_long: "Nous aidons à accompagner les équipes dans les initiatives de conformité et de soutien de l'informatique au respect de la réglementation externe à l'entreprise.",
     details: [
        "Accompagner les équipes dans les initiatives de conformité et de soutien de l'informatique au respect de la réglementation externe à l'entreprise",
        "Assurer la réalisation de programmes produisant des bénéfices, dans les délais et les budgets et répondant aux exigences et aux normes de qualité",
    ],
    imageId: "service-risk",
  },
  {
    id: "security-management",
    name: "Gestion de la sécurité",
    iconName: "ShieldCheck",
    icon: ShieldCheck,
    category: "Gouvernance, audit et sécurité des TI",
    description_short: "Mettre en œuvre de nouveaux mécanismes de gestion de la sécurité.",
    description_long: "Nous aidons à accompagner les équipes internes dans les pratiques de plus en plus complexes et évolutives en matière de gouvernance et gestion de la sécurité de l'information.",
     details: [
        "Accompagner les équipes internes dans les pratiques de plus en plus complexes et évolutives en matière de gouvernance et gestion de la sécurité de l'information",
        "Mettre en œuvre de nouveaux mécanismes de gestion de la sécurité et de nouveaux cadres de références",
        "Accompagner les équipes internes dans la prise en charge de la sécurité dans les projets et initiatives de l'organisation",
    ],
    imageId: "service-security",
  },
  {
    id: "digital-transformation",
    name: "Transformation numérique",
    iconName: "Briefcase",
    icon: Briefcase,
    category: "Solutions d'affaires",
    description_short: "Développer une nouvelle offre dans le cadre de la transformation digitale du modèle d'affaires.",
    description_long: "La transformation numérique est essentielle pour rester compétitif. Nous vous aidons à moderniser vos processus, à adopter de nouvelles technologies et à améliorer l'expérience client. Nos solutions couvrent l'automatisation des processus, l'intégration de systèmes et la mise en œuvre de plateformes cloud pour une agilité et une efficacité accrues.",
    details: [
        "Développer une nouvelle offre dans le cadre de la transformation digitale du modèle d'affaires"
    ],
    imageId: "service-digital",
  },
   {
    id: "developpement-logiciel",
    name: "Développement logiciel",
    iconName: "Code",
    icon: Code,
    category: "Solutions d'affaires",
    description_short: "Des solutions logicielles sur mesure pour répondre à vos besoins.",
    description_long: "Nous développons des applications web et mobiles robustes, évolutives et sécurisées. Notre équipe de développeurs expérimentés utilise les dernières technologies pour créer des solutions qui répondent précisément à vos exigences métier et offrent une expérience utilisateur exceptionnelle.",
     details: [
        "Bâtir des applications informatiques fiables et performantes qui va de l'étude du besoin du client, en passant par la conception, la mise en œuvre jusqu'à la maintenance"
    ],
    imageId: "service-dev"
  },
  {
    id: "data-analytics",
    name: "Intelligence d'affaires",
    iconName: "BarChart",
    icon: BarChart,
    category: "Solutions d'affaires",
    description_short: "Transformez vos données en informations exploitables.",
    description_long: "Libérez le potentiel de vos données avec nos services d'analyse et de business intelligence. Nous vous aidons à collecter, analyser et visualiser vos données pour prendre des décisions plus éclairées. De la mise en place de tableaux de bord interactifs à l'analyse prédictive, nous vous donnons les outils pour comprendre votre entreprise en profondeur.",
    details: [
        "Transformer ses données internes et externes en de l'information de gestion utile à la prise de décision et à la découverte de nouvelles opportunités grâce à un ensemble de stratégie et de processus"
    ],
    imageId: "service-data",
  },
  {
    id: "consulting",
    name: "Conseil Stratégique",
    iconName: "Lightbulb",
    icon: Lightbulb,
    description_short: "Alignez votre technologie avec vos objectifs commerciaux.",
    description_long: "Nous offrons des services de conseil stratégique pour aider les entreprises à naviguer dans le paysage numérique complexe. Nos experts travaillent avec vous pour développer une feuille de route informatique qui soutient et accélère vos objectifs commerciaux. De l'évaluation de l'infrastructure à la planification de la transformation numérique, nous sommes votre partenaire de confiance.",
    imageId: "service-consulting",
    category: "Gouvernance, audit et sécurité des TI"
  },
  {
    id: "marketing-digital",
    name: "Marketing Digital",
    iconName: "Megaphone",
    icon: Megaphone,
    description_short: "Augmentez votre visibilité et engagez votre audience cible.",
    description_long: "Nos stratégies de marketing digital sont conçues pour accroître votre présence en ligne et générer des leads qualifiés. Nous couvrons le SEO, le marketing de contenu, les médias sociaux et la publicité payante pour créer une stratégie intégrée qui atteint votre public là où il se trouve.",
    imageId: "service-marketing",
    category: "Solutions d'affaires"
  },
  {
    id: "solutions-cloud",
    name: "Solutions Cloud",
    iconName: "Cloud",
    icon: Cloud,
    description_short: "Migrez vers le cloud pour plus de flexibilité et de scalabilité.",
    description_long: "Tirez parti de la puissance du cloud avec nos services de migration, d'optimisation et de gestion. Que vous soyez sur AWS, Azure ou Google Cloud, nous vous aidons à construire une infrastructure cloud sécurisée, performante et rentable.",
    imageId: "service-cloud",
    category: "Solutions d'affaires"
  },
  {
    id: "fibre-optique",
    name: "Fibre optique",
    iconName: "Network",
    icon: Network,
    category: "Réseaux et télécoms",
    description_short: "Installation et maintenance.",
    description_long: "Nous offrons des services complets d'installation et de maintenance de fibre optique pour garantir une connectivité ultra-rapide et fiable à votre entreprise.",
    imageId: "service-fibre",
    details: ["Installation professionnelle", "Maintenance préventive et corrective", "Tests et certification de réseau"]
  },
  {
    id: "telephonie-ip",
    name: "Téléphonie IP",
    iconName: "Phone",
    icon: Phone,
    category: "Réseaux et télécoms",
    description_short: "Économiser sur les frais de câblage, puisque l'installation de téléphones IP requiert uniquement la présence d'un réseau internet.",
    description_long: "Modernisez votre système de communication avec nos solutions de téléphonie IP. Profitez d'une qualité d'appel supérieure, de fonctionnalités avancées et d'une gestion simplifiée, tout en réduisant vos coûts.",
    imageId: "service-telephonie",
     details: ["Installation et configuration de systèmes VoIP", "Intégration avec vos outils existants", "Support technique et formation"]
  },
  {
    id: "objets-connectes",
    name: "Objets connectés",
    iconName: "Router",
    icon: Router,
    category: "Réseaux et télécoms",
    description_short: "Rassembler de nouvelles masses de données sur le réseau et donc, de nouvelles connaissances et formes de savoirs.",
    description_long: "Intégrez l'Internet des Objets (IoT) dans votre stratégie d'entreprise. Nous vous aidons à déployer et gérer des parcs d'objets connectés pour collecter des données précieuses, automatiser des processus et créer de nouveaux services.",
    imageId: "service-iot",
    details: ["Conseil et stratégie IoT", "Déploiement de capteurs et appareils", "Plateforme de gestion et d'analyse des données"]
  },
  {
    id: "config-install",
    name: "Configuration et installation",
    iconName: "Settings",
    icon: Settings,
    category: "Services pour portables & ordinateurs",
    description_short: "Nous vous aidons à configurer votre nouvel équipement informatique afin qu'il fonctionne avec une performance optimale.",
    description_long: "Nous vous aidons à configurer votre nouvel équipement informatique afin qu'il fonctionne avec une performance optimale.",
    imageId: "service-pc-config",
    details: []
  },
  {
    id: "software-install",
    name: "Installation de logiciel",
    iconName: "Download",
    icon: Download,
    category: "Services pour portables & ordinateurs",
    description_short: "Évitez les casses-têtes et laissez-nous installer vos nouveaux logiciels sur votre équipement.",
    description_long: "Évitez les casses-têtes et laissez-nous installer vos nouveaux logiciels sur votre équipement.",
    imageId: "service-pc-software",
    details: []
  },
  {
    id: "accessories-install",
    name: "Installation d'accessoires",
    iconName: "Power",
    icon: Power,
    category: "Services pour portables & ordinateurs",
    description_short: "Installation d'imprimante, numériseur, clavier, ou disque dur externe sur votre équipement.",
    description_long: "Ayez l'esprit tranquille en laissant un de nos techniciens s'occuper de l'installation de votre dernière pièce de matériel comme une imprimante, un numériseur, un clavier, ou un disque dur externe sur votre équipement.",
    imageId: "service-pc-accessories",
    details: []
  },
  {
    id: "data-transfer",
    name: "Transfert de données",
    iconName: "Smartphone",
    icon: Smartphone,
    category: "Services pour portables & ordinateurs",
    description_short: "Nos techniciens sauvegarderont ou transféreront vos données entre deux équipements.",
    description_long: "Vous passez à un nouvel ordinateur? Nos techniciens peuvent vous aider. Nos techniciens sauvegarderont ou transféreront vos données entre deux équipements, en s'assurant de conserver la même structure de dossiers que sur l'équipement précédent.",
    imageId: "service-pc-transfer",
    details: []
  },
  {
    id: "remote-support",
    name: "Soutien à distance",
    iconName: "LifeBuoy",
    icon: LifeBuoy,
    category: "Services pour portables & ordinateurs",
    description_short: "Obtenez du soutien à distance par téléphone ou visioconférence dans la langue de votre choix.",
    description_long: "Obtenez du soutien à distance par téléphone ou visioconférence dans la langue de votre choix.",
    imageId: "service-pc-support",
    details: []
  },
  {
    id: "equipment-sales",
    name: "Ventes d'équipements",
    iconName: "ShoppingCart",
    icon: ShoppingCart,
    category: "Services pour portables & ordinateurs",
    description_short: "Visitez notre site internet de ventes de d'équipements et de matériels informatiques.",
    description_long: "Visitez notre site internet de ventes de d'équipements et de matériels informatiques. www.equimaf.ca",
    imageId: "service-pc-sales",
    details: []
  },
  {
    id: "pc-repair",
    name: "Diagnostic et réparation",
    iconName: "Cpu",
    icon: Cpu,
    category: "Services pour portables & ordinateurs",
    description_short: "Nous vous aidons à configurer votre nouvel équipement informatique afin qu'il fonctionne avec une performance optimale.",
    description_long: "Nous vous aidons à configurer votre nouvel équipement informatique afin qu'il fonctionne avec une performance optimale.",
    imageId: "service-pc-repair",
    details: []
  },
  {
    id: "data-recovery",
    name: "Récupération de données",
    iconName: "HardDrive",
    icon: HardDrive,
    category: "Services pour portables & ordinateurs",
    description_short: "Vous avez subitement perdu vos photos souvenirs, des documents financiers et d'autres données importantes? Nos techniciens peuvent vous aider.",
    description_long: "Vous avez subitement perdu vos photos souvenirs, des documents financiers et d'autres données importantes? Nos techniciens peuvent vous aider.",
    imageId: "service-pc-recovery",
    details: []
  },
  {
    id: "system-update",
    name: "Mise au point du système",
    iconName: "HardDriveUpload",
    icon: HardDriveUpload,
    category: "Services pour portables & ordinateurs",
    description_short: "Maintenez vos équipements et logiciels à jours pour un fonctionnement optimal.",
    description_long: "Maintenez vos équipements et logiciels à jours pour un fonctionnement optimal.",
    imageId: "service-pc-update",
    details: []
  }
];

export const featuredServices = services.slice(0, 3);

export const jobOffers: JobOffer[] = [
  {
    id: "dev-fullstack",
    title: "Développeur Full-Stack Senior",
    location: "Paris, France",
    type: "Temps plein",
    description: "Nous recherchons un développeur Full-Stack expérimenté pour rejoindre notre équipe d'innovation. Vous travaillerez sur des projets stimulants, de la conception à la mise en production. Maîtrise de React, Node.js et des bases de données SQL/NoSQL requise. Expérience avec les services cloud (AWS, Azure) est un plus.",
    mode: "Présentiel",
    validityDate: "2025-10-31",
    introduction: "Nous recherchons un développeur Full-Stack expérimenté pour rejoindre notre équipe d'innovation.",
    activities: [
      "Concevoir, développer et maintenir des applications web et mobiles.",
      "Collaborer avec les équipes produit et design pour créer des expériences utilisateur exceptionnelles.",
      "Participer à l'architecture et aux choix technologiques.",
      "Assurer la qualité du code via des tests et des revues de code."
    ],
    deliverables: [
      "Applications web et mobiles fonctionnelles et performantes.",
      "Documentation technique.",
      "Code testé et maintenable."
    ],
    requirements: [
      "Maîtrise de React, Node.js et des bases de données SQL/NoSQL.",
      "Expérience avec les services cloud (AWS, Azure) est un plus.",
      "Minimum 5 ans d'expérience en développement logiciel."
    ],
    remuneration: "À négocier",
    status: "Permanent",
    startDate: "Dès que possible",
    socialBenefits: true
  },
  {
    id: "chef-projet",
    title: "Chef de Projet Technique",
    location: "Lyon, France",
    type: "Temps plein",
    description: "En tant que Chef de Projet Technique, vous serez responsable de la planification, de l'exécution et de la livraison de nos projets de développement logiciel. Vous coordonnerez les équipes, gérerez les budgets et communiquerez avec les parties prenantes. Forte expérience en gestion de projet Agile/Scrum nécessaire.",
    mode: "Hybride",
    validityDate: "2025-11-15",
    introduction: "Nous cherchons un Chef de Projet Technique pour piloter nos projets innovants.",
    activities: [
      "Planifier et suivre les projets de A à Z.",
      "Gérer les ressources et les budgets.",
      "Communiquer avec les parties prenantes.",
      "Assurer le respect des délais et de la qualité."
    ],
    deliverables: [
      "Projets livrés à temps et dans le budget.",
      "Rapports de suivi de projet.",
      "Satisfaction client."
    ],
    requirements: [
      "Forte expérience en gestion de projet Agile/Scrum.",
      "Excellentes compétences en communication.",
      "Background technique en développement logiciel."
    ],
    remuneration: "Selon profil",
    status: "Permanent",
startDate: "Dès que possible",
    socialBenefits: true
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    location: "Télétravail",
    type: "Contrat",
    description: "Rejoignez notre équipe data pour transformer des ensembles de données complexes en informations stratégiques. Vous développerez des modèles prédictifs, effectuerez des analyses statistiques et créerez des visualisations percutantes. Maîtrise de Python (Pandas, Scikit-learn) et des outils de BI (Tableau, Power BI) indispensable.",
    mode: "Télétravail",
    validityDate: "2025-12-01",
    introduction: "Nous recrutons un Data Scientist pour renforcer notre pôle d'analyse de données.",
    activities: [
      "Analyser de grands ensembles de données pour en extraire des insights.",
      "Construire et déployer des modèles de machine learning.",
      "Créer des tableaux de bord et des visualisations de données.",
      "Communiquer les résultats aux équipes métier."
    ],
    deliverables: [
      "Modèles prédictifs et analyses statistiques.",
      "Tableaux de bord interactifs.",
      "Rapports d'analyse."
    ],
    requirements: [
      "Maîtrise de Python (Pandas, Scikit-learn).",
      "Expérience avec des outils de BI (Tableau, Power BI).",
      "Solide compréhension des algorithmes de machine learning."
    ],
    remuneration: "TJM à définir",
    status: "Contrat 12 mois",
    startDate: "Janvier 2025",
    socialBenefits: false
  },
  {
    id: "designer-ux-ui",
    title: "Designer UX/UI",
    location: "Paris, France",
    type: "Temps partiel",
    description: "Nous cherchons un designer talentueux pour créer des expériences utilisateur intuitives et esthétiques pour nos applications web et mobiles. Vous mènerez des recherches utilisateurs, créerez des wireframes et des prototypes, et collaborerez étroitement avec les développeurs. Portfolio requis.",
    mode: "Présentiel",
    validityDate: "2025-10-20",
    introduction: "Nous sommes à la recherche d'un designer UX/UI pour améliorer l'expérience de nos utilisateurs.",
    activities: [
      "Mener des recherches utilisateurs et des tests d'utilisabilité.",
      "Créer des wireframes, mockups et prototypes interactifs.",
      "Définir et maintenir un design system.",
      "Collaborer avec les développeurs pour assurer l'intégration fidèle des maquettes."
    ],
    deliverables: [
      "Parcours utilisateurs optimisés.",
      "Maquettes haute-fidélité.",
      "Prototypes interactifs."
    ],
    requirements: [
      "Portfolio démontrant une forte expertise en UX/UI.",
      "Maîtrise des outils de design (Figma, Sketch, etc.).",
      "Expérience en design d'applications web et mobiles."
    ],
    remuneration: "À discuter",
    status: "Temps partiel (20h/semaine)",
    startDate: "Novembre 2024",
    socialBenefits: true
  },
];


export function getIcon(name: string): React.FC<LucideProps> {
    return iconMap[name] || Lightbulb;
}
