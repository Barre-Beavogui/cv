const profile = {
  name: 'Barre Beavogui',
  title: 'Élève Ingénieur en Génie Électrique — Polytech Nantes (4e année)',
  summary: [
    'Actuellement en 4e année de Génie Électrique à Polytech Nantes et en césure pour renforcer mon anglais.',
    'Passionné par l’ingénierie et la maîtrise des énergies, j’aime concevoir, optimiser et analyser des solutions techniques et durables.',
    'Mes expériences en projets étudiants et en stage m’ont permis de développer rigueur, autonomie et esprit d’équipe.',
  ],
  contact: {
    email: 'barre.beavogui@etu.univ-nantes.fr',
    phone: '+33 06 78 24 07 14',
    location: 'Nantes / Saint-Nazaire, France',
    handle: 'barre_beavogui',
  },
  objectives: [
    'Rechercher un contrat dans le domaine du génie électrique afin de mettre en pratique mes connaissances en électronique de puissance, systèmes électriques et énergies renouvelables.',
    'Contribuer à la conception, au développement et à l’optimisation de systèmes électriques et électroniques au sein d’une équipe technique.',
    'Renforcer mes compétences en gestion et suivi de projets industriels, de l’étude initiale jusqu’à la mise en service.',
    'Développer une expertise technique tout en participant à des projets innovants répondant aux enjeux énergétiques actuels.',
  ],
  distinctions: [
    {
      period: '2024–2027',
      title: 'Programme de Leadership, Ashinaga France',
      detail: 'Boursier : soutien académique et financier, développement personnel et réseau professionnel.',
    },
    {
      period: '2022–2023',
      title: 'Initiative Ashinaga pour l’Afrique, Ashinaga Sénégal',
      detail:
        'Bourse d’excellence internationale et de leadership (1 candidat par pays sélectionné sur 2500). Ateliers de renforcement des compétences personnelles et professionnelles : prise de parole en public, prise d’initiative.',
    },
  ],
  languages: [
    { label: 'Français', level: 'Langue maternelle' },
    { label: 'Anglais', level: 'A1' },
  ],
  experiences: [
    {
      period: 'Mars 2026 – Août 2026',
      role: 'Stagiaire Ingénieur — Distribution Électrique (Customer Success Manager)',
      company: 'Schneider Electric',
      location: 'Nantes, France',
      bullets: [
        'Suivi quotidien des travaux de construction d’un poste électrique haute tension.',
        'Vérification de la conformité des installations par rapport aux plans et études techniques.',
        'Coordination avec les équipes de chantier et les bureaux d’études, application des procédures de gestion de projet et suivi technique.',
      ],
      status: 'À venir',
    },
    {
      period: 'Juin 2025 – Sept 2025',
      role: 'Stagiaire Ingénieur — Suivi de chantier HTB',
      company: 'BCE GRID',
      location: 'Montpellier / Saint-Pierre-des-Jonquières, France',
      bullets: [
        'Suivi quotidien des travaux de construction d’un poste électrique haute tension.',
        'Vérification de la conformité des installations par rapport aux plans et études techniques.',
        'Coordination avec les équipes de chantier et les bureaux d’études, application des procédures de gestion de projet et suivi technique.',
      ],
    },
    {
      period: 'Oct 2024 – Mai 2025',
      role: 'Parcours Recherche',
      company: 'Laboratoire IREENA — Polytech Nantes',
      location: 'Saint-Nazaire, France',
      bullets: [
        'Immersion dans un environnement de recherche et découverte des méthodologies scientifiques.',
        'Rédaction d’un article scientifique et synthèse de résultats sur les modèles de simulation pour machines synchrones (MSAP).',
      ],
    },
    {
      period: 'Avril 2022 – Juin 2022',
      role: 'Stagiaire — Réseaux Électriques BT/HT',
      company: 'Électricité de Guinée (EDG)',
      location: 'Conakry, Guinée',
      bullets: [
        'Découverte du fonctionnement des réseaux de transport et de distribution électrique.',
        'Participation à l’installation de compteurs et postes de transformation BT/HT.',
      ],
    },
  ],
  engagements: [
    {
      period: '2024–2025',
      role: 'Projet Associatif — Polyjoule',
      org: 'Polytech Nantes, Saint-Nazaire',
      bullets: [
        'Développement de voitures à ultra-faible consommation avec optimisation des performances énergétiques (électriques et hydrogène).',
        'Conception de cartes électroniques (PCB), soudure de composants et programmation de microcontrôleurs.',
      ],
    },
    {
      period: '2024–2025',
      role: 'Secrétaire du Bureau des Étudiants (BDE)',
      org: 'Polytech Nantes, Saint-Nazaire',
      bullets: [
        'Rédaction des comptes rendus et gestion des courriers officiels du BDE.',
        'Participation à l’organisation d’événements étudiants (intégration, soirées, partenariats).',
      ],
    },
  ],
  education: [
    {
      period: '2024–2026',
      degree: 'Diplôme d’ingénieur en Génie Électrique',
      school: 'Polytech Nantes — Saint-Nazaire, France',
      bullets: [
        'Électronique de puissance, conversion d’énergie, informatique, énergies renouvelables.',
        'Commande de machines électriques, électronique analogique et numérique.',
      ],
    },
    {
      period: '2023–2024',
      degree: 'Programme de Leadership',
      school: 'Ashinaga Sénégal — Dakar, Sénégal',
      bullets: ['Gestion de projet, développement de réseau professionnel, leadership.'],
    },
    {
      period: '2020–2024',
      degree: 'Licence en Génie Électrique',
      school: 'Université Gamal Abdel Nasser — Conakry, Guinée',
      bullets: [
        'Réseaux électriques BT/HT, analyse de systèmes électriques, énergies renouvelables, automatismes.',
      ],
    },
  ],
  skills: [
    'Électronique de puissance',
    'Conversion d’énergie',
    'Énergies renouvelables',
    'Commande de machines électriques',
    'Électronique analogique et numérique',
    'Réseaux électriques BT/HT',
    'Analyse de systèmes électriques',
    'Automatismes',
    'Gestion de projet',
    'Leadership & communication',
  ],
};

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <div>
          <p className="eyebrow">{subtitle}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function TimelineCard({ item, showStatus }) {
  return (
    <article className="card timeline-card">
      <div className="timeline-meta">
        <p className="period">{item.period}</p>
        {showStatus && item.status ? <Badge>{item.status}</Badge> : null}
      </div>
      <h3>{item.role}</h3>
      <p className="meta">{item.company || item.org || item.school}</p>
      <p className="meta muted">{item.location}</p>
      {item.bullets?.length ? (
        <ul className="list">
          {item.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-content">
          <div className="pill">Génie Électrique • Césure • Disponible pour contrat</div>
          <h1>{profile.name}</h1>
          <p className="title">{profile.title}</p>
          <div className="summary">
            {profile.summary.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn primary" href={`mailto:${profile.contact.email}`}>
              Me contacter
            </a>
            <a className="btn ghost" href="#experience">
              Voir l’expérience
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <div className="hero-card-inner">
            <h2>Contact</h2>
            <div className="contact-list">
              <div>
                <span>Email</span>
                <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
              </div>
              <div>
                <span>Téléphone</span>
                <a href={`tel:${profile.contact.phone.replace(/\s/g, '')}`}>{profile.contact.phone}</a>
              </div>
              <div>
                <span>Localisation</span>
                <p>{profile.contact.location}</p>
              </div>
              <div>
                <span>Réseau</span>
                <p>@{profile.contact.handle}</p>
              </div>
            </div>
            <div className="language-chip">
              {profile.languages.map((lang) => (
                <div key={lang.label}>
                  <p className="lang-title">{lang.label}</p>
                  <p className="lang-level">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </header>

      <nav className="nav">
        <a href="#objectifs">Objectifs</a>
        <a href="#experience">Expérience</a>
        <a href="#engagements">Projets</a>
        <a href="#distinctions">Distinctions</a>
        <a href="#formation">Formation</a>
        <a href="#competences">Compétences</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <Section
          id="objectifs"
          title="Objectifs"
          subtitle="Ce que je recherche"
        >
          <div className="grid two">
            {profile.objectives.map((objective, index) => (
              <article key={index} className="card">
                <p>{objective}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Expérience" subtitle="Stages & recherche">
          <div className="grid two">
            {profile.experiences.map((item, index) => (
              <TimelineCard key={index} item={item} showStatus />
            ))}
          </div>
        </Section>

        <Section id="engagements" title="Projets & engagements" subtitle="Vie étudiante">
          <div className="grid two">
            {profile.engagements.map((item, index) => (
              <TimelineCard key={index} item={item} />
            ))}
          </div>
        </Section>

        <Section id="distinctions" title="Distinctions" subtitle="Bourses & leadership">
          <div className="grid two">
            {profile.distinctions.map((item, index) => (
              <article key={index} className="card">
                <p className="period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="meta">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="formation" title="Formation" subtitle="Parcours académique">
          <div className="grid two">
            {profile.education.map((item, index) => (
              <article key={index} className="card">
                <p className="period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p className="meta">{item.school}</p>
                <ul className="list">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="competences" title="Compétences clés" subtitle="Savoir-faire">
          <div className="skill-grid">
            {profile.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Travaillons ensemble" subtitle="Disponibilité">
          <div className="contact-cta">
            <div>
              <h3>Envie d’échanger sur un projet en génie électrique ?</h3>
              <p>
                Disponible pour un contrat dans le domaine du génie électrique. Basé à
                Nantes / Saint-Nazaire, mobilité possible.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn primary" href={`mailto:${profile.contact.email}`}>
                Écrire un email
              </a>
              <a className="btn ghost" href={`tel:${profile.contact.phone.replace(/\s/g, '')}`}>
                Appeler
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Barre Beavogui — Génie Électrique</p>
      </footer>
    </div>
  );
}
