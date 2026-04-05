const assets = {
  portrait: '/cv-assets/portrait.jpg',
  schneider: '/cv-assets/logo-schneider.png',
  bce: '/cv-assets/logo-bce-grid.avif',
  ireena: '/cv-assets/logo-ireena.png',
  polyjoule: '/cv-assets/logo-polyjoule.jpg',
  bde: '/cv-assets/logo-bde.png',
  edg: '/cv-assets/logo-edg.png',
  polytech: '/cv-assets/logo-polytech.png',
  ashinaga: '/cv-assets/logo-ashinaga.png',
  ugan: '/cv-assets/logo-ugan.png',
};

const profile = {
  name: 'Barre Beavogui',
  title: 'Élève ingénieur en génie électrique',
  subtitle: 'Polytech Nantes · 4e année · Alternance recherchée pour septembre 2026',
  intro:
    'Je construis mon parcours autour du suivi technique de projets, de l’analyse des installations et de l’amélioration continue des systèmes électriques. Je cherche aujourd’hui une alternance où je peux contribuer sur des sujets HT/BT, chantier, énergie et coordination technique.',
  location: 'Nantes / Saint-Nazaire, France',
  email: 'barre.beavogui@etu.univ-nantes.fr',
  phone: '+33 06 78 24 07 14',
  phoneHref: '+33678240714',
  linkedin: 'https://www.linkedin.com/in/barre-beavogui',
};

const stats = [
  { value: '4+', label: 'expériences terrain et recherche' },
  { value: '3', label: 'écoles et programmes suivis' },
  { value: 'HT/BT', label: 'environnements techniques' },
  { value: 'B2', label: 'niveau d’anglais' },
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

const objectives = [
  'Mettre en pratique mes connaissances en électronique de puissance, systèmes électriques et énergies renouvelables.',
  'Contribuer à la conception, au développement et à l’optimisation de systèmes électriques et électroniques.',
  'Renforcer mes compétences en gestion et suivi de projets industriels, de l’étude initiale jusqu’à la mise en service.',
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
    period: '2024 – 2026',
    degree: 'Diplôme d’ingénieur en génie électrique',
    school: 'Polytech Nantes',
    location: 'Saint-Nazaire, France',
    logo: assets.polytech,
    intro:
      'Cycle ingénieur centré sur les systèmes électriques, la conversion d’énergie et la conception électronique.',
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
    location: 'Dakar, Sénégal',
    logo: assets.ashinaga,
    intro:
      'Programme complémentaire orienté leadership, gestion de projet et développement du réseau professionnel.',
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

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  );
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function ExperienceCard({ item }) {
  return (
    <article className="card experience-card">
      <div className="card-header">
        <div>
          <p className="period">{item.period}</p>
          <h3>{item.title}</h3>
          <p className="meta">
            {item.company} <span>•</span> {item.location}
          </p>
        </div>
        <img src={item.logo} alt={item.company} className="logo-badge" />
      </div>

      <ul className="bullet-list">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <div className="chip-row">
        {item.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </article>
  );
}

function ProjectCard({ item }) {
  return (
    <article className="card project-card">
      <div className="project-logo-wrap">
        <img src={item.logo} alt={item.org} className="project-logo" />
      </div>
      <p className="period">{item.period}</p>
      <h3>{item.title}</h3>
      <p className="meta">
        {item.org} <span>•</span> {item.location}
      </p>
      <ul className="bullet-list">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="chip-row">
        {item.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </article>
  );
}

function EducationCard({ item }) {
  return (
    <article className="card education-card">
      <div className="card-header">
        <div>
          <p className="period">{item.period}</p>
          <h3>{item.degree}</h3>
          <p className="meta">
            {item.school} <span>•</span> {item.location}
          </p>
        </div>
        <img src={item.logo} alt={item.school} className="logo-badge" />
      </div>

      <p className="body-copy">{item.intro}</p>

      <div className="course-grid">
        {item.courses.map((course) => (
          <Chip key={course}>{course}</Chip>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="site-frame">
        <header className="hero" id="top">
          <nav className="topbar">
            <a href="#top" className="brand">
              <span className="brand-mark">BB</span>
              <span className="brand-text">Barre Beavogui</span>
            </a>

            <div className="nav-links">
              <a href="#profil">Profil</a>
              <a href="#experience">Expériences</a>
              <a href="#formation">Formations</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Alternance 2026 • Génie électrique</p>
              <h1>{profile.name}</h1>
              <p className="hero-title">{profile.title}</p>
              <p className="hero-subtitle">{profile.subtitle}</p>
              <p className="hero-description">{profile.intro}</p>

              <div className="hero-actions">
                <a className="button button-primary" href={`mailto:${profile.email}`}>
                  Me contacter
                </a>
                <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>

              <div className="stats-grid">
                {stats.map((stat) => (
                  <article key={stat.label} className="stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-card">
                <div className="portrait-background" />
                <img src={assets.portrait} alt="Barre Beavogui" className="hero-portrait" />
              </div>

              <article className="contact-card">
                <p className="contact-label">Disponible depuis la France</p>
                <h2>Suivi technique, chantier, énergie et coordination</h2>
                <div className="contact-list">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
                  <p>{profile.location}</p>
                </div>
              </article>
            </div>
          </div>

          <div className="logo-strip">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="logo-item">
                <img src={logo.src} alt={logo.name} />
              </div>
            ))}
          </div>
        </header>

        <main>
          <section id="profil" className="section">
            <SectionTitle
              eyebrow="Profil"
              title="Une approche terrain du génie électrique"
              text="Je cherche une alternance où je peux intervenir à la fois sur l’analyse technique, la conformité des installations et le suivi opérationnel des projets."
            />

            <div className="profile-layout">
              <article className="card spotlight-card">
                <p className="spotlight-label">Ce que je recherche</p>
                <ul className="bullet-list">
                  {objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </article>

              <div className="expertise-grid">
                {expertise.map((item) => (
                  <article key={item.title} className="card mini-card">
                    <h3>{item.title}</h3>
                    <p className="body-copy">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="section">
            <SectionTitle
              eyebrow="Expériences"
              title="Des expériences en industrie, chantier et recherche"
              text="Chaque étape de mon parcours m’a permis de renforcer ma compréhension des systèmes électriques, du travail de terrain et du suivi de projet."
            />

            <div className="experience-grid">
              {experiences.map((item) => (
                <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
              ))}
            </div>
          </section>

          <section className="section">
            <SectionTitle
              eyebrow="Projets"
              title="Des engagements qui complètent mon parcours"
              text="Au-delà des stages, j’ai aussi travaillé sur des projets concrets en électronique et en organisation étudiante."
            />

            <div className="project-grid">
              {projects.map((item) => (
                <ProjectCard key={`${item.title}-${item.period}`} item={item} />
              ))}
            </div>
          </section>

          <section id="formation" className="section">
            <SectionTitle
              eyebrow="Formations"
              title="Écoles, programme et cours suivis"
              text="Voici les formations que j’ai suivies et les enseignements les plus utiles pour mon projet professionnel."
            />

            <div className="education-stack">
              {education.map((item) => (
                <EducationCard key={`${item.school}-${item.period}`} item={item} />
              ))}
            </div>
          </section>

          <section className="section">
            <SectionTitle
              eyebrow="Compléments"
              title="Distinctions, langues et centres d’intérêt"
            />

            <div className="info-grid">
              <article className="card info-card">
                <h3>Distinctions</h3>
                <div className="info-stack">
                  {distinctions.map((item) => (
                    <div key={item.title} className="info-item">
                      <p className="period">{item.period}</p>
                      <p className="info-title">{item.title}</p>
                      <p className="body-copy">{item.text}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="card info-card">
                <h3>Langues</h3>
                <div className="info-stack">
                  {languages.map((item) => (
                    <div key={item.label} className="info-item compact">
                      <p className="info-title">{item.label}</p>
                      <p className="body-copy">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="card info-card">
                <h3>Centres d’intérêt</h3>
                <div className="chip-row">
                  {interests.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="contact-banner">
              <div>
                <p className="eyebrow">Contact</p>
                <h2>Disponible pour échanger sur une alternance en génie électrique</h2>
                <p className="section-text">
                  Si vous avez une opportunité liée aux systèmes électriques, au suivi de chantier,
                  à la distribution HT/BT ou à l’énergie, je suis disponible pour en discuter.
                </p>
              </div>

              <div className="contact-actions">
                <a className="button button-primary" href={`mailto:${profile.email}`}>
                  Envoyer un email
                </a>
                <a className="button button-secondary" href={`tel:${profile.phoneHref}`}>
                  Appeler
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Barre Beavogui · Site statique personnel</p>
        </footer>
      </div>
    </div>
  );
}
