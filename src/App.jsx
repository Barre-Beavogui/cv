import { useEffect, useState } from 'react';
import { assets, profile, stats, expertise, partnerLogos, experiences, projects, education, distinctions, languages, interests } from './data';

const keywords = ['Énergie', 'Réseaux électriques', 'Terrain', 'Recherche', 'Coordination', 'Gestion de projet'];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ number, eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="section-number" aria-hidden="true">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text && <p className="section-text">{text}</p>}
      </div>
    </div>
  );
}

function Chips({ items }) {
  return <div className="chip-row">{items.map(item => <span className="chip" key={item}>{item}</span>)}</div>;
}

function SourceLink({ source }) {
  return source ? <a className="source-link" href={source.url} target="_blank" rel="noreferrer">{source.label} <Arrow /></a> : null;
}

function Experience({ item }) {
  return (
    <article className="experience-item">
      <aside className="experience-aside">
        <p className="period">{item.period}</p>
        <span className="experience-kind">{item.company === 'Laboratoire IREENA' ? 'Parcours recherche' : 'Stage'}</span>
      </aside>
      <div className="experience-body">
        <div className="experience-heading">
          <div>
            <p className="organization">{item.company}</p>
            <h3>{item.title}</h3>
            <p className="meta">{item.location}</p>
          </div>
          <img src={item.logo} alt={item.company} className="logo-badge" loading="lazy" />
        </div>
        <p className="experience-summary">{item.summary}</p>
        <ul className="bullet-list">{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        <p className="experience-value"><strong>Ce que j’en retiens.</strong> {item.value}</p>
        <div className="experience-footer">
          <Chips items={item.tags} />
          <SourceLink source={item.source} />
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const followPreference = (event) => setPaused(event.matches);
    preference.addEventListener('change', followPreference);
    return () => preference.removeEventListener('change', followPreference);
  }, []);

  return (
    <div className="site-shell" data-motion={paused ? 'paused' : 'running'}>
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      <header className="site-header">
        <nav className="topbar page-width" aria-label="Navigation principale">
          <a href="#top" className="brand" aria-label="Barre Beavogui — accueil">
            <span className="brand-mark">BB<span aria-hidden="true">.</span></span>
            <span className="brand-text">Barre Beavogui<small>Génie électrique & projets</small></span>
          </a>
          <div className="nav-links">
            <a href="#profil">Profil</a>
            <a href="#experience">Expériences</a>
            <a href="#formation">Formation</a>
            <a href="#contact">Échangeons <Arrow /></a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero page-width" id="top" aria-labelledby="hero-heading">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span className="status-dot" />{profile.subtitle}</p>
              <p className="hero-name">{profile.name}</p>
              <h1 id="hero-heading">Du terrain<br />aux projets<br /><span className="accent-text">d’énergie.</span></h1>
              <p className="hero-role">{profile.title}</p>
              <p className="hero-description">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#experience">Explorer mon parcours <span aria-hidden="true">↓</span></a>
                <a className="button button-outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              </div>
              <div className="hero-focus">
                <span className="focus-label">Une même ambition</span>
                <span className="sr-only">Comprendre. Coordonner. Construire.</span>
                <span className="rotating-words" aria-hidden="true"><span>Comprendre.</span><span>Coordonner.</span><span>Construire.</span></span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="portrait-card">
                <svg className="energy-lines" viewBox="0 0 480 480" fill="none" aria-hidden="true"><circle cx="240" cy="240" r="218" /><circle cx="240" cy="240" r="182" /><path d="M0 240H480M240 0V480" /></svg>
                <img src={assets.portrait} width="609" height="574" alt="Portrait de Barre Beavogui" className="hero-portrait" fetchpriority="high" />
                <span className="portrait-caption">Technique · Terrain · Projets</span>
              </div>
              <article className="next-step" aria-labelledby="next-step-title">
                <div className="next-step-top"><span className="status-badge">Stage confirmé · À venir</span><p>Mars 2027</p></div>
                <div className="next-step-heading"><h2 id="next-step-title">Chef de projet</h2><img src={assets.schneider} alt="Schneider Electric" /></div>
                <p>De retour chez Schneider Electric pour mon stage de fin d’études, dans la continuité de mon expérience de 2026.</p>
              </article>
            </div>
          </div>
          <div className="hero-bottom"><a className="scroll-link" href="#profil"><span aria-hidden="true">↓</span> Découvrir le fil conducteur</a><span className="location-label">Nantes / Saint-Nazaire, France</span></div>
        </section>

        <section className="keywords-section" aria-label="Domaines et mots-clés">
          <div className="keywords-heading page-width"><p className="eyebrow">Ce qui m’anime</p><button type="button" className="motion-toggle" aria-pressed={paused} aria-label="Mettre les animations en pause" onClick={() => setPaused(value => !value)}><span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span> {paused ? 'Reprendre les animations' : 'Mettre en pause'}</button></div>
          <div className="marquee"><div className="marquee-track">{[0, 1].map(copy => <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{keywords.map(word => <span className="keyword" key={word}>{word}<span className="keyword-star" aria-hidden="true">✳</span></span>)}</div>)}</div></div>
        </section>

        <section className="logo-section page-width" aria-label="Les entreprises et établissements de mon parcours">
          <p className="section-label">Les étapes de mon parcours</p>
          <div className="logo-strip">{partnerLogos.map(logo => <div key={logo.name} className="logo-item"><img src={logo.src} alt={logo.name} loading="lazy" /></div>)}</div>
        </section>

        <section className="section page-width" id="profil">
          <SectionHeading number="01" eyebrow="Le fil conducteur" title="Comprendre les systèmes. Faire avancer les projets." />
          <div className="profile-intro">
            <p className="profile-statement">Du réseau électrique en Guinée aux projets industriels en France, une même envie : donner du sens à la technique.</p>
            <div className="profile-story">
              <p>Mes premiers pas chez Électricité de Guinée m’ont familiarisé avec les réseaux. Chez BCE Grid, le chantier HTB m’a appris à relier les plans à la réalité des installations. Chez Schneider Electric, j’ai approfondi le suivi technique et la coordination autour des services de distribution électrique.</p>
              <p>La recherche à l’IREENA et ma formation à Polytech Nantes complètent cette approche par l’analyse et la modélisation. Aujourd’hui en <strong>5e année de génie électrique</strong>, je poursuis cette progression vers la conduite de projets, avec un <strong>stage de chef de projet confirmé chez Schneider Electric dès mars 2027.</strong></p>
            </div>
          </div>
          <div className="expertise-grid">{expertise.map((item, index) => <article className="expertise-item" key={item.title}><span className="expertise-number">0{index + 1} /</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <div className="stats-grid">{stats.map(item => <div className="stat-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
        </section>

        <section className="section page-width" id="experience">
          <SectionHeading number="02" eyebrow="Expériences" title="Le terrain comme point d’appui." text="Industrie, chantier et recherche : chaque étape apporte une nouvelle façon de comprendre et de faire avancer un projet électrique." />
          <div className="experience-list">{experiences.map(item => <Experience key={item.company} item={item} />)}</div>
        </section>

        <section className="section page-width" id="formation">
          <SectionHeading number="03" eyebrow="Formation" title="Une base scientifique. Une ouverture internationale." text="Un parcours entre la Guinée, le Sénégal et la France, qui associe génie électrique, leadership et mise en pratique." />
          <div className="education-stack">{education.map(item => <article className="education-item" key={item.school}><div className="education-logo"><img src={item.logo} alt={item.school} loading="lazy" /></div><div className="education-content"><p className="period">{item.period}</p><h3>{item.degree}</h3><p className="meta">{item.school} · {item.location}</p><p className="body-copy">{item.intro}</p><Chips items={item.courses} /><SourceLink source={item.source} /></div></article>)}</div>
        </section>

        <section className="section page-width" id="projets">
          <SectionHeading number="04" eyebrow="Projets & engagements" title="Apprendre aussi en construisant ensemble." text="L’électronique, la sobriété énergétique et la vie associative donnent une dimension concrète et collective à mon parcours." />
          <div className="project-grid">{projects.map(item => <article className="project-card" key={item.title}><div className="project-top"><img className="project-logo" src={item.logo} alt={item.title} loading="lazy" /><p className="period">{item.period}</p></div><h3>{item.title}</h3><p className="meta">{item.org} · {item.location}</p><ul className="bullet-list">{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><p className="project-value">{item.value}</p><Chips items={item.tags} /><SourceLink source={item.source} /></article>)}</div>
        </section>

        <section className="section page-width" aria-label="Distinctions, langues et centres d’intérêt">
          <div className="info-grid">
            <article className="info-card"><h3>Distinctions & leadership</h3><div className="info-stack">{distinctions.map(item => <div className="info-item" key={item.title}><p className="period">{item.period}</p><p className="info-title">{item.title}</p><p className="body-copy">{item.text}</p></div>)}</div></article>
            <article className="info-card"><h3>Langues</h3><div className="info-stack">{languages.map(item => <div className="info-item" key={item.label}><p className="info-title">{item.label}</p><p className="body-copy">{item.value}</p></div>)}</div></article>
            <article className="info-card"><h3>Mes centres d’intérêt</h3><Chips items={interests} /></article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner page-width">
            <div><p className="eyebrow">Restons en contact</p><h2>Parlons énergie.<br />Et projets.</h2><p className="section-text">Un échange autour des réseaux électriques, de la recherche ou du pilotage de projets ? Je serai ravi de partager mon parcours.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Écrivez-moi <Arrow /></a><a className="button button-outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></div>
            <div className="contact-details"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a><a className="phone-link" href={`tel:${profile.phoneHref}`}>{profile.phone}</a><p>{profile.location}</p><p className="contact-note">5e année à Polytech Nantes<br />Prochaine étape : Schneider Electric · Mars 2027</p></div>
          </div>
        </section>
      </main>
      <footer className="footer page-width"><p>© {new Date().getFullYear()} Barre Beavogui · Génie électrique & projets</p><a className="back-top" href="#top">Retour en haut <span aria-hidden="true">↑</span></a></footer>
    </div>
  );
}
