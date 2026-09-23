const assets = {
  portrait: `${import.meta.env.BASE_URL}cv-assets/portrait.jpg`,
  schneider: `${import.meta.env.BASE_URL}cv-assets/logo-schneider.png`,
  bce: `${import.meta.env.BASE_URL}cv-assets/logo-bce-grid.avif`,
  ireena: `${import.meta.env.BASE_URL}cv-assets/logo-ireena.png`,
  polyjoule: `${import.meta.env.BASE_URL}cv-assets/logo-polyjoule.jpg`,
  bde: `${import.meta.env.BASE_URL}cv-assets/logo-bde.png`,
  edg: `${import.meta.env.BASE_URL}cv-assets/logo-edg.png`,
  polytech: `${import.meta.env.BASE_URL}cv-assets/logo-polytech.png`,
  ashinaga: `${import.meta.env.BASE_URL}cv-assets/logo-ashinaga.png`,
  ugan: `${import.meta.env.BASE_URL}cv-assets/logo-ugan.png`,
};

const profile = {
  name: 'Barre Beavogui',
  title: 'Élève ingénieur en génie électrique',
  subtitle: '5e année · Polytech Nantes · Promotion 2027',
  intro:
    'Des réseaux électriques au pilotage de projets, je relie la compréhension des systèmes à la réalité du terrain. Aujourd’hui en 5e année à Polytech Nantes, je prépare la prochaine étape de mon parcours chez Schneider Electric.',
  location: 'Nantes / Saint-Nazaire, France',
  email: 'barre.beavogui@etu.univ-nantes.fr',
  phone: '+33 6 78 24 07 14',
  phoneHref: '+33678240714',
  linkedin: 'https://www.linkedin.com/in/barre-beavogui',
};

const stats = [
  { value: '5e', label: 'année à Polytech Nantes' },
  { value: '4', label: 'expériences terrain et recherche' },
  { value: 'HT/BT', label: 'environnements techniques' },
  { value: '2027', label: 'stage chef de projet confirmé' },
];

const expertise = [
  {
    title: 'Suivi technique',
    text: 'Lecture des plans, analyse des installations et vérification de conformité sur des environnements électriques.',
  },
  {
    title: 'Coordination projet',
    text: 'Travail avec équipes terrain, bureaux d’études et parties prenantes pour garder les projets fluides.',
  },
  {
    title: 'Énergie & conversion',
    text: 'Intérêt fort pour la distribution électrique, l’électronique de puissance, les réseaux et les renouvelables.',
  },
];

const partnerLogos = [
  { name: 'Schneider Electric', src: assets.schneider },
  { name: 'BCE Grid', src: assets.bce },
  { name: 'IREENA', src: assets.ireena },
  { name: 'Polytech Nantes', src: assets.polytech },
  { name: 'Ashinaga', src: assets.ashinaga },
  { name: 'Université Gamal Abdel Nasser', src: assets.ugan },
  { name: 'Électricité de Guinée', src: assets.edg },
];

const experiences = [
  {
    period: 'Mars 2026 – Août 2026',
    title: 'Stagiaire ingénieur en distribution électrique',
    company: 'Schneider Electric',
    summary: 'La technique au service de la fiabilité électrique.',
    value: 'Une expérience qui relie analyse des installations, suivi de services et coordination des interlocuteurs, avec une attention portée à la qualité, à la sécurité et à la satisfaction client.',
    source: { url: 'https://www.se.com/fr/fr/work/services/field-services/', label: 'Les services de Schneider Electric' },
    location: 'Nantes, France',
    logo: assets.schneider,
    bullets: [
      'Suivi technique de contrats de services liés à des installations de distribution et de gestion de l’énergie.',
      'Analyse des performances des équipements électriques HT/BT et vérification de conformité.',
      'Coordination avec les équipes Field Services et les bureaux d’études.',
      'Suivi d’indicateurs qualité, sécurité et satisfaction client.',
    ],
    tags: ['Distribution électrique', 'HT/BT', 'Customer success', 'Qualité'],
  },
  {
    period: 'Juin 2025 – Septembre 2025',
    title: 'Stagiaire ingénieur en suivi de chantier HTB',
    company: 'BCE Grid',
    summary: 'Des plans d’études à la réalité du chantier.',
    value: 'Le suivi d’un poste HTB m’a permis de mieux comprendre les interfaces entre études, conformité des installations et avancement des travaux.',
    source: { url: 'https://www.bce-grid.com/services/owners-engineer-amo', label: 'Les métiers de BCE Grid' },
    location: 'Montpellier / Saint-Pierre-des-Jonquières, France',
    logo: assets.bce,
    bullets: [
      'Suivi quotidien des travaux de construction d’un poste électrique haute tension.',
      'Vérification de la conformité des installations par rapport aux plans et études techniques.',
      'Coordination avec les équipes de chantier et les bureaux d’études.',
    ],
    tags: ['HTB', 'Suivi de chantier', 'Conformité', 'Coordination'],
  },
  {
    period: 'Octobre 2024 – Mai 2025',
    title: 'Parcours recherche',
    company: 'Laboratoire IREENA',
    summary: 'Comprendre les modèles pour mieux analyser les systèmes.',
    value: 'La recherche complète mon expérience terrain par une démarche de comparaison, de synthèse et de rédaction scientifique autour des machines synchrones à aimants permanents.',
    source: { url: 'https://ireena.univ-nantes.fr/fr/moyens-dessais-et-plateformes/chaines-de-conversion-tolerance-aux-defauts-pilotage', label: 'La recherche à l’IREENA' },
    location: 'Polytech Nantes, Saint-Nazaire, France',
    logo: assets.ireena,
    bullets: [
      'Immersion dans un environnement de recherche et découverte des méthodologies scientifiques.',
      'Rédaction d’un article scientifique.',
      'Synthèse de résultats sur les modèles de simulation pour machines synchrones (MSAP).',
    ],
    tags: ['Recherche', 'Simulation', 'MSAP', 'Rédaction scientifique'],
  },
  {
    period: 'Avril 2022 – Juin 2022',
    title: 'Stagiaire en réseaux électriques BT/HT',
    company: 'Électricité de Guinée (EDG)',
    summary: 'Une première immersion au cœur des réseaux.',
    value: 'Cette expérience à Conakry constitue le point de départ de mon parcours dans les infrastructures qui transportent et distribuent l’énergie jusqu’aux usagers.',
    source: { url: 'https://edg.com.gn/distribution/', label: 'Les réseaux de distribution d’EDG' },
    location: 'Conakry, Guinée',
    logo: assets.edg,
    bullets: [
      'Découverte du fonctionnement des réseaux de transport et de distribution électrique.',
      'Participation à l’installation de compteurs.',
      'Participation à l’installation de postes de transformation BT/HT.',
    ],
    tags: ['Réseaux électriques', 'BT/HT', 'Transport', 'Distribution'],
  },
];

const projects = [
  {
    period: '2024 – 2025',
    title: 'Projet associatif Polyjoule',
    value: 'Relier l’électronique à un objectif concret : réduire la consommation d’énergie d’un véhicule.',
    source: { url: 'https://polytech.univ-nantes.fr/fr/la-vie-etudiante/associations-et-clubs/lassociation-polyjoule', label: 'Découvrir Polyjoule' },
    org: 'Polytech Nantes',
    location: 'Saint-Nazaire, France',
    logo: assets.polyjoule,
    bullets: [
      'Développement de voitures à ultra-faible consommation avec optimisation des performances énergétiques.',
      'Conception de cartes électroniques (PCB).',
      'Soudure de composants et programmation de microcontrôleurs.',
    ],
    tags: ['PCB', 'Microcontrôleurs', 'Hydrogène', 'Optimisation énergétique'],
  },
  {
    period: '2024 – 2025',
    title: 'Secrétaire du Bureau des étudiants',
    value: 'Structurer l’information, organiser et faire avancer un collectif : des compétences qui complètent la technique.',
    org: 'Polytech Nantes',
    location: 'Saint-Nazaire, France',
    logo: assets.bde,
    bullets: [
      'Rédaction des comptes rendus et gestion des courriers officiels.',
      'Participation à l’organisation d’événements étudiants et partenariats.',
    ],
    tags: ['Organisation', 'Communication', 'Vie associative'],
  },
];

const education = [
  {
    period: '2024 – 2027 · 5e année en cours',
    degree: 'Diplôme d’ingénieur en génie électrique — en préparation',
    school: 'Polytech Nantes',
    source: { url: 'https://polytech.univ-nantes.fr/fr/les-formations/cycle-ingenieur/ingenieur-genie-electrique', label: 'Découvrir la formation' },
    location: 'Saint-Nazaire, France',
    logo: assets.polytech,
    intro:
      'À Saint-Nazaire, le cursus associe conversion et maîtrise de l’énergie, contrôle-commande et intégration des systèmes électriques. Cette formation donne un cadre scientifique à mes expériences en recherche, sur chantier et dans les services de distribution électrique.',
    courses: [
      'Électronique de puissance',
      'Conversion d’énergie',
      'Commande de machines électriques',
      'Électronique analogique',
      'Électronique numérique',
      'Informatique',
      'Énergies renouvelables',
    ],
  },
  {
    period: '2023 – 2024',
    degree: 'Programme de leadership',
    school: 'Ashinaga Sénégal',
    source: { url: 'https://www.ashinaga.org/fr/ashinaga-global-network/ashinaga-senegal/', label: 'Le programme Ashinaga' },
    location: 'Dakar, Sénégal',
    logo: assets.ashinaga,
    intro:
      'Un programme qui complète ma formation scientifique par le leadership, la gestion de projet et l’ouverture internationale. Il nourrit ma manière de communiquer, de prendre des initiatives et de travailler en équipe.',
    courses: ['Gestion de projet', 'Développement de réseau professionnel', 'Leadership'],
  },
  {
    period: '2020 – 2024',
    degree: 'Licence en génie électrique',
    school: 'Université Gamal Abdel Nasser',
    location: 'Conakry, Guinée',
    logo: assets.ugan,
    intro:
      'Formation généraliste en génie électrique avec une base solide en réseaux, analyse de systèmes et automatismes.',
    courses: [
      'Réseaux électriques BT/HT',
      'Analyse de systèmes électriques',
      'Énergies renouvelables',
      'Automatismes',
    ],
  },
];

const distinctions = [
  {
    period: '2024 – 2027',
    title: 'Programme de Leadership, Ashinaga France',
    text: 'Boursier avec accompagnement académique et financier, développement personnel et réseau professionnel.',
  },
  {
    period: '2022 – 2023',
    title: 'Initiative Ashinaga pour l’Afrique',
    text: 'Bourse d’excellence internationale et de leadership avec ateliers de prise de parole en public et prise d’initiative.',
  },
];

const languages = [
  { label: 'Français', value: 'Langue maternelle' },
  { label: 'Anglais', value: 'B2' },
];

const interests = [
  'Énergie',
  'Réseaux électriques',
  'Électronique',
  'Microcontrôleurs',
  'Data centers',
  'Fiabilité énergétique',
  'Innovation',
  'Technologies énergétiques',
];


export { assets, profile, stats, expertise, partnerLogos, experiences, projects, education, distinctions, languages, interests };
