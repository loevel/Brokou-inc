import type { Service, JobOffer } from "@/lib/types";
import { BarChart, Briefcase, Cloud, Code, Megaphone, Lightbulb, Users, type LucideIcon, type LucideProps } from "lucide-react";
import React from 'react';

const iconMap: { [key: string]: LucideIcon } = {
    Lightbulb,
    Briefcase,
    BarChart,
    Megaphone,
    Code,
    Cloud,
    Users
};

export const services: Service[] = [
  {
    id: "consulting",
    name: "Conseil Stratégique",
    iconName: "Lightbulb",
    icon: Lightbulb,
    description_short: "Alignez votre technologie avec vos objectifs commerciaux.",
    description_long: "Nous offrons des services de conseil stratégique pour aider les entreprises à naviguer dans le paysage numérique complexe. Nos experts travaillent avec vous pour développer une feuille de route informatique qui soutient et accélère vos objectifs commerciaux. De l'évaluation de l'infrastructure à la planification de la transformation numérique, nous sommes votre partenaire de confiance.",
    imageId: "service-consulting",
  },
  {
    id: "digital-transformation",
    name: "Transformation Numérique",
    iconName: "Briefcase",
    icon: Briefcase,
    description_short: "Modernisez vos opérations et améliorez l'expérience client.",
    description_long: "La transformation numérique est essentielle pour rester compétitif. Nous vous aidons à moderniser vos processus, à adopter de nouvelles technologies et à améliorer l'expérience client. Nos solutions couvrent l'automatisation des processus, l'intégration de systèmes et la mise en œuvre de plateformes cloud pour une agilité et une efficacité accrues.",
    imageId: "service-digital",
  },
  {
    id: "data-analytics",
    name: "Analyse de Données & BI",
    iconName: "BarChart",
    icon: BarChart,
    description_short: "Transformez vos données en informations exploitables.",
    description_long: "Libérez le potentiel de vos données avec nos services d'analyse et de business intelligence. Nous vous aidons à collecter, analyser et visualiser vos données pour prendre des décisions plus éclairées. De la mise en place de tableaux de bord interactifs à l'analyse prédictive, nous vous donnons les outils pour comprendre votre entreprise en profondeur.",
    imageId: "service-data",
  },
  {
    id: "marketing-digital",
    name: "Marketing Digital",
    iconName: "Megaphone",
    icon: Megaphone,
    description_short: "Augmentez votre visibilité et engagez votre audience cible.",
    description_long: "Nos stratégies de marketing digital sont conçées pour accroître votre présence en ligne et générer des leads qualifiés. Nous couvrons le SEO, le marketing de contenu, les médias sociaux et la publicité payante pour créer une stratégie intégrée qui atteint votre public là où il se trouve.",
    imageId: "service-marketing"
  },
  {
    id: "developpement-logiciel",
    name: "Développement Logiciel",
    iconName: "Code",
    icon: Code,
    description_short: "Des solutions logicielles sur mesure pour répondre à vos besoins.",
    description_long: "Nous développons des applications web et mobiles robustes, évolutives et sécurisées. Notre équipe de développeurs expérimentés utilise les dernières technologies pour créer des solutions qui répondent précisément à vos exigences métier et offrent une expérience utilisateur exceptionnelle.",
    imageId: "service-dev"
  },
  {
    id: "solutions-cloud",
    name: "Solutions Cloud",
    iconName: "Cloud",
    icon: Cloud,
    description_short: "Migrez vers le cloud pour plus de flexibilité et de scalabilité.",
    description_long: "Tirez parti de la puissance du cloud avec nos services de migration, d'optimisation et de gestion. Que vous soyez sur AWS, Azure ou Google Cloud, nous vous aidons à construire une infrastructure cloud sécurisée, performante et rentable.",
    imageId: "service-cloud"
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