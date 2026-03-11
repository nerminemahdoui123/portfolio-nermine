
import { Project, Experience, Education, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Nermine Mahdoui",
  title: "Ingénieure en Informatique",
  email: "mahdoui.nermine@gmail.com",
  phone: "+216 21 319 726",
  linkedin: "nermine-mahdoui-07b996222",
  github: "nerminemahdoui123",
  location: "Monastir, Tunisie",
  photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
  summary: "Ingénieure en informatique, fraîchement diplômée, spécialisée dans le développement de solutions efficaces en utilisant React.js et .NET, avec une analyse précise des besoins, gestion agile de projets et conception de designs ergonomiques, adaptés aux exigences des clients pour une expérience optimale."
};

export const PROJECTS: Project[] = [
 {
  id: "axia-agile",
  title: "Axia Agile",
  description: "Gestion de projets agiles, messagerie interne et gestion des droits d'accès.",
  fullDescription: `Axia Agile est une application web développée dans le cadre de mon projet de fin d'études (PFE) lors de mon stage chez Axia Solutions. 
Cette application permet de gérer efficacement des projets agiles avec une interface intuitive et complète.

Principales fonctionnalités :
- Création et gestion de projets : possibilité de créer des projets, les diviser en sprints et gérer les membres affectés à chaque sprint.
- Gestion des tâches : ajout de tâches aux sprints, suivi des tâches via un tableau Kanban interactif, et affectation des membres aux tâches spécifiques.
- Collaboration en équipe : création de canaux de communication internes, notifications en temps réel pour les mises à jour importantes et événements clés.
- Gestion des droits d'accès : configuration des permissions pour chaque membre afin de contrôler l'accès aux fonctionnalités de l'application.
- Intégration avec Google Teams : génération de liens de réunions directement depuis l'application pour organiser des réunions d'équipe.
- Gestion des abonnements : création de plans et abonnements pour les utilisateurs afin de sécuriser l'accès aux fonctionnalités avancées.
- Backend structuré en microservices : chaque module (gestion des projets, tâches, notifications, etc.) fonctionne de manière indépendante pour faciliter la maintenance, améliorer la scalabilité et permettre des mises à jour modulaires.

Technologies utilisées : .NET pour le backend, React.js pour le frontend, SQL Server pour la base de données et Docker pour la containerisation. L'application offre une expérience utilisateur fluide, ergonomique et adaptée aux besoins réels d'une équipe agile.`,
  technologies: [".NET", "React.js", "SQL Server", "Docker"],
  category: "Projet de stage",
images: [
  "/images/axia1.png",
  "/images/axia2.png",
  "/images/axia3.png",
  "/images/axia4.png",
  "/images/axia5.png",
  "/images/axia6.png",
  "/images/axia7.png",
  "/images/axia8.png"
],
  link: "https://github.com/MedMokhtarCh/MNAgile"
},
   {
  id: "neivos-vitrine",
  title: "InnovX",
  description: "Site vitrine interactif avec gestion de blogs et candidatures.",
  fullDescription: `InnovX est un site vitrine développé lors de mon stage d'été, destiné à représenter une startup et à présenter ses solutions, domaines d'activité et actualités de manière interactive.

Principales fonctionnalités :
- Présentation des solutions et domaines : affichage clair et dynamique des services et secteurs d'activité.
- Blog : consultation des articles publiés pour informer les visiteurs sur les projets et innovations.
- Candidatures en ligne : formulaire ouvert pour postuler, avec possibilité de joindre CV et lettre de motivation.
- Gestion administrative : interface permettant à l’administrateur de gérer les blogs, consulter les candidatures et gérer les offres d'emploi.
- Chatbot interactif : outil intégré pour répondre aux questions fréquentes des visiteurs et guider la navigation sur le site.

Technologies utilisées : React.js pour le frontend, Node.js pour le backend, MySQL pour la base de données et Dialogflow pour le chatbot. Le site offre une expérience utilisateur fluide et professionnelle pour les visiteurs et l’administration.`,
  technologies: ["React.js", "Node.js", "MySQL", "Dialogflow"],
  category: "Projet de stage",
images: [
  "/images/innovx.png",   
  "/images/innovx2.png",  
  "/images/innovx3.png",  
  "/images/innovx4.png"
  
],
  link: "https://github.com/nerminemahdoui123/innovx"
},
{
  id: "educnermine",
  title: "EducNermine",
  description: "Application web pour la gestion scolaire complète.",
  fullDescription: `EducNermine est une application web développée dans le cadre d’un projet de classe, destinée à gérer l’ensemble des activités scolaires et pédagogiques.

Principales fonctionnalités :
- Gestion des enseignants, matières et cours : ajout et suivi des enseignants, création et attribution des matières aux groupes.

- Gestion des absences : suivi des absences par matière, par groupe et par séance, avec affichage clair pour faciliter le contrôle pédagogique.


Technologies utilisées : .NET pour le backend et SQL Server pour la base de données. `, 
  technologies: [".NET", "SQL Server"],
  category: "Projet académique",
  images: ["/images/educ.png",
    "/images/educ2.png",
    "/images/educ3.png"
  ],
  link: "https://github.com/nerminemahdoui123/projet-.net-gestion-des-absences"
},
{
  id: "safepet",
  title: "SafePet",
  description: "Gestion de produits pour animaux et rendez-vous vétérinaires.",
  fullDescription: `SafePet est un projet académique réalisé en groupe, visant à créer une solution hybride incluant une application web et une application desktop pour les propriétaires d'animaux.

Principales fonctionnalités :
- Gestion des rendez-vous vétérinaires : prise de rendez-vous, suivi des consultations, et notifications pour les rendez-vous à venir.
- Gestion des produits pour animaux : création, modification et suppression de produits disponibles à la vente.
- Catégories de produits : organisation des produits par catégories pour faciliter la navigation dans la boutique.
- Interface administrateur : gestion des rendez-vous, des produits et des catégories, ainsi que des utilisateurs.
- Application hybride : application web développée avec React.js et Laravel, et application desktop développée avec JavaFX, assurant une utilisation fluide sur différents supports.
- Base de données MySQL : centralisation des informations pour une gestion efficace et sécurisée des données.`,

  technologies: ["React.js", "Laravel", "JavaFX", "MySQL"],
  category: "Projet académique",
  images: ["https://picsum.photos/seed/pet/1200/800"]
},
  
 {
  id: "easyswap",
  title: "EasySwap",
  description: "Application mobile de vente et d'échange de biens entre particuliers.",
  fullDescription: `EasySwap est un projet académique réalisé en groupe, visant à créer une application mobile facilitant la vente et l'échange de biens entre particuliers.

Principales fonctionnalités :
- Vente et échange de biens : possibilité de publier des annonces pour vendre ou échanger des objets.
- Organisation par catégories : les biens sont classés par catégories pour faciliter la recherche et la navigation.
- Gestion des annonces : création, modification et suppression d'annonces par les utilisateurs.
- Interface mobile ergonomique : application développée en React Native pour une expérience fluide sur smartphone.
- Backend et base de données : Node.js pour le backend et MySQL pour le stockage des informations, assurant la sécurité et la gestion centralisée des données.`,

  technologies: ["React Native", "Node.js", "MySQL"],
  category: "Projet académique",
  images: ["/images/esasyswap.jpeg",
    "/images/esasyswap2.jpeg",
    "/images/esasyswap3.jpeg"
  ],
  link: "https://github.com/Mayssalayouni/EasySwap"
},

  {
  id: "autogym",
  title: "AutoGym",
  description: "Application mobile pour la gestion des abonnements et cours sportifs.",
  fullDescription: `AutoGym est un projet académique réalisé en groupe, visant à créer une application mobile pour la gestion des cours et abonnements dans les salles de sport.

Principales fonctionnalités :
- Gestion des cours : consultation des cours disponibles, réservation de séances et suivi des participants.
- Gestion des abonnements : création et suivi des abonnements pour les utilisateurs.
- Interface mobile intuitive : application développée en Flutter pour une expérience utilisateur fluide et agréable.
- Base de données locale : SQLite pour stocker les informations relatives aux cours et abonnements, permettant un accès rapide et sécurisé.
- Travail collaboratif : projet développé en groupe dans le cadre d’un projet de classe, favorisant la répartition des tâches et la coordination.`,

  technologies: ["Flutter", "SQLite"],
  category: "Projet académique",
  images: ["https://picsum.photos/seed/gym/1200/800"]
},
{
  id: "ecommerce-node-api",
  title: "API E-Commerce avec Node.js",
  description: "Création et test des API backend pour un site e-commerce avec Node.js, Express et MySQL.",
  fullDescription: `Ce projet a été réalisé lors de mon stage d'été au sein de SuperCommerce. 
L'objectif était de développer un backend complet pour un site e-commerce, incluant la gestion des produits, des catégories, des commandes, ainsi que l'inscription et l'authentification des utilisateurs.

Principales fonctionnalités :
- Gestion des produits : création, lecture, mise à jour et suppression (CRUD) des produits.
- Gestion des catégories : CRUD pour organiser et structurer les produits.
- Gestion des commandes : création, consultation, mise à jour et suppression des commandes.
- Authentification sécurisée : inscription, connexion et génération de tokens JWT.
- Sécurisation des API : middleware pour protéger les routes sensibles.
- Tests avec Postman : validation du fonctionnement des API, vérification de la sécurité et de la gestion des erreurs.

Toutes les opérations CRUD ont été testées et validées dans Postman, comme le montrent les captures d'écran incluses. 
Le projet est conçu avec une architecture modulaire pour faciliter la maintenance, l’évolution future et l'intégration avec un frontend React.js.

Technologies utilisées : Node.js, Express, MySQL, JWT, Postman.`,
  technologies: ["Node.js", "Express", "MySQL", "JWT", "Postman"],
  category: "Projet de stage",
  images: [
    "/images/post-product.jpg",
    "/images/get-product.jpg",
    "/images/getbyid-product.jpg",
    "/images/update-product.jpg",
    "/images/deleteProduct.jpg",
    "/images/post-categorie.jpg",
    "/images/get-categorie.jpg",
    "/images/getbyid-categorie.jpg",
    "/images/user-api.jpg",
    "/images/post-order.jpg",
    "/images/get-order.jpg",
    "/images/getbyid-order.jpg",
    "/images/delete-order.jpg",
    "/images/put-order.jpg"
  ],
  link: "https://github.com/nerminemahdoui123/api-ecommerce-node" 
}
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Axia Solutions",
    location: "Msaken, Tunisie",
    role: "Stagiaire Développeuse Full Stack (PFE)",
    period: "Février 2025 – Juin 2025",
    description: [
      "Développement de l’application web Axia Agile dédiée à la gestion de projets agiles et à la messagerie interne entre équipes.",
      "Mise en œuvre d'une architecture microservices pour assurer la scalabilité.",
      "Utilisation de technologies modernes pour une expérience utilisateur fluide."
    ],
    technologies: [".NET", "React.js", "SQL Server", "Docker"]
  },
  {
    company: "NEIVOS",
    location: "Monastir, Tunisie",
    role: "Stagiaire Développeuse Full Stack (Stage d’été)",
    period: "Juillet 2024 – Août 2024",
    description: [
      "Développement d’un site vitrine interactif pour la promotion des solutions et services d’une startup.",
      "Gestion des offres d’emploi et des candidatures.",
      "Intégration d'un chatbot interactif basé sur des questions-réponses préconfigurées."
    ],
    technologies: ["React.js", "Node.js", "MySQL", "Dialogflow"]
  },
  {
    company: "CleverTech Tunisie",
    location: "Tunisie, Tunisie",
    role: "Stagiaire Développeuse Full Stack (PFE)",
    period: "Mars 2022 – Juin 2022",
    description: [
      "Développement des modules du tableau de bord et gestion des rapports pour l'application web DAXme.",
      "Optimisation de la gestion des missions au sein de la plateforme.",
      "Collaboration étroite avec l'équipe pour l'amélioration continue."
    ],
    technologies: ["Django", "React.js", "SQL Server"]
  }
  
];

export const EDUCATION: Education[] = [
  {
    institution: "ESPRIM",
    location: "Monastir, Tunisie",
    degree: "Cycle Ingénieur en Informatique",
    period: "2022 – 2025",
    specialty: "Développement Web et Mobile"
  },
  {
    institution: "ISG Sousse",
    location: "Sousse, Tunisie",
    degree: "Licence en Informatique de Gestion",
    period: "2018 – 2022",
    specialty: "Business Intelligence"
  },
  {
    institution: "Lycée Jeune Fille",
    location: "Monastir, Tunisie",
    degree: "Baccalauréat",
    period: "2018 – 2019"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js" },
  { name: "Node.js" },
  { name: ".NET" },
  { name: "MySQL" },
  { name: "SQL Server" },
  { name: "Docker" },
  { name: "UI/UX Design (Figma)" },
  { name: "SonarQube" },
  { name: "Jest" }


];
