import { useState } from "react";
import SchneiderLogo from "./Schneider_Electric-Logo.wine.png";
import IREENALogo from "./logo-IREENA.png";
import EdgLogo from "./logo-edg.png";
import AshinagaLogo from "./logo-ashinaga.png";

const tabs = [
  "Expériences",
  "Formation",
  "Compétences",
  "Distinctions",
  "Langues",
  "Centres d'intérêt",
];

const experiences = [
  {
    id: "schneider",
    title: "Schneider Electric",
    subtitle: "Stagiaire Ingénieur – Distribution Électrique",
    range: "2026",
    logo: SchneiderLogo,
    bullets: [
      "Suivi technique de contrats de services",
      "Analyse des performances équipements HT/BT",
      "Coordination équipes Field Services et bureaux d'études",
    ],
  },
  {
    id: "bce-grid",
    title: "BCE GRID",
    subtitle: "Stagiaire Ingénieur – Suivi chantier HTB",
    range: "2025",
    logo: SchneiderLogo,
    bullets: [
      "Suivi construction poste haute tension",
      "Vérification de la conformité technique",
      "Coordination chantier et gestion de projet",
    ],
  },
  {
    id: "ireena",
    title: "IREENA – Polytech Nantes",
    subtitle: "Parcours Recherche (Simulation Machines Synchrones)",
    range: "2024–2025",
    logo: IREENALogo,
    bullets: [
      "Rédaction d'article scientifique",
      "Simulation de machines synchrones",
      "Analyse de modèles",
    ],
  },
  {
    id: "polyjoule",
    title: "Polyjoule",
    subtitle: "Optimisation énergétique / Conception électronique",
    range: "2024–2025",
    logo: SchneiderLogo,
    bullets: [
      "Conception de cartes électroniques",
      "Soudure et programmation microcontrôleurs",
      "Optimisation énergétique",
    ],
  },
  {
    id: "edg",
    title: "Électricité de Guinée",
    subtitle: "Stage – Réseaux transport et distribution",
    range: "2022",
    logo: EdgLogo,
    bullets: [
      "Installation de compteurs",
      "Intervention sur postes BT/HT",
      "Support sur réseau de distribution",
    ],
  },
];

const formation = [
  {
    title: "Polytech Nantes",
    subtitle: "Diplôme d'Ingénieur – Génie Électrique",
    range: "2024–2026",
  },
  {
    title: "Université Gamal Abdel Nasser",
    subtitle: "Licence Génie Électrique",
    range: "2020–2024",
  },
];

const competences = [
  {
    cat: "Génie électrique",
    items: [
      "Électronique de puissance",
      "Conversion d'énergie",
      "Réseaux HT/BT",
      "Commande de machines",
      "Énergies renouvelables",
    ],
  },
  {
    cat: "Techniques",
    items: [
      "Conception PCB",
      "Programmation microcontrôleurs",
      "Simulation machines synchrones",
      "Analyse de performance",
    ],
  },
  {
    cat: "Gestion & projet",
    items: [
      "Suivi de chantier",
      "Coordination équipes",
      "Analyse de conformité",
      "Indicateurs qualité/sécurité",
    ],
  },
];

const distinctions = [
  {
    logo: AshinagaLogo,
    title: "Programme Leadership Ashinaga France",
    range: "2024–2027",
  },
  {
    logo: AshinagaLogo,
    title: "Initiative Ashinaga pour l'Afrique",
    range: "Sélection : 1/2500",
  },
];

const langues = [
  { title: "Français", level: "Langue maternelle" },
  { title: "Anglais", level: "B2" },
];

const interets = [
  "Veille technologique (smart grids, ENR)",
  "Mobilité électrique & optimisation énergétique",
  "Conception électronique & systèmes embarqués",
  "Sport", "Lecture", "Voyages",
];

function Card({ title, subtitle, range, logo, children, onClick, active }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        borderRadius: 16,
        border: `1px solid ${active ? "#3b82f6" : "#e5e7eb"}`,
        padding: 16,
        background: active ? "rgba(59,130,246,0.08)" : "rgba(255,255,255,0.72)",
        boxShadow: "0 12px 34px rgba(15, 23, 42, 0.08)",
        transition: "transform 0.15s ease, border-color 0.15s ease",
        transform: active ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {logo ? (
          <img
            src={logo}
            alt="logo"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              objectFit: "cover",
              border: "1px solid #e5e7eb",
              background: "white",
            }}
          />
        ) : null}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800 }}>{title}</div>
          {subtitle ? (
            <div style={{ color: "#334155", fontSize: 13, marginTop: 2 }}>
              {subtitle}
            </div>
          ) : null}
        </div>
        {range ? (
          <div style={{ fontSize: 12, color: "#64748b", fontWeight: 700 }}>
            {range}
          </div>
        ) : null}
      </div>
      {children ? <div style={{ marginTop: 10 }}>{children}</div> : null}
    </div>
  );
}

function Pills({ items }) {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      {items.map((it) => (
        <span
          key={it}
          style={{
            fontSize: 12,
            padding: "8px 10px",
            borderRadius: 999,
            border: "1px solid #e5e7eb",
            background: "rgba(255,255,255,0.72)",
          }}
        >
          {it}
        </span>
      ))}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeXp, setActiveXp] = useState(experiences[0]);
  const [theme, setTheme] = useState("light");

  const pageBg =
    theme === "light"
      ? "linear-gradient(180deg, #eff6ff, #ffffff)"
      : "linear-gradient(180deg, #0f172a, #020617)";

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 24,
        background: pageBg,
        color: theme === "light" ? "#0f172a" : "#e2e8f0",
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            marginBottom: 20,
          }}
        >
          <div>
            <div style={{ fontSize: 32, fontWeight: 900, lineHeight: 1 }}>
              Barre Beavogui
            </div>
            <div style={{ marginTop: 6, fontSize: 16, fontWeight: 700 }}>
              Élève Ingénieur – Génie Électrique
            </div>
            <div style={{ marginTop: 6, color: theme === "light" ? "#334155" : "#94a3b8" }}>
              À la recherche d’une alternance (septembre 2026)
            </div>
          </div>

          <button
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            style={{
              border: "1px solid #e5e7eb",
              background: theme === "light" ? "white" : "rgba(255,255,255,0.08)",
              color: theme === "light" ? "#0f172a" : "#e2e8f0",
              borderRadius: 999,
              padding: "10px 14px",
              cursor: "pointer",
              fontWeight: 800,
            }}
          >
            {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
          </button>
        </div>

        <div
          style={{
            borderRadius: 20,
            border: "1px solid #e5e7eb",
            background: theme === "light" ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.06)",
            boxShadow: "0 16px 40px rgba(15, 23, 42, 0.10)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              padding: 14,
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            {tabs.map((t) => {
              const isActive = t === activeTab;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  style={{
                    borderRadius: 999,
                    padding: "9px 12px",
                    fontWeight: 850,
                    cursor: "pointer",
                    border: "1px solid #e5e7eb",
                    background: isActive
                      ? "linear-gradient(180deg,#60a5fa,#3b82f6)"
                      : theme === "light"
                      ? "white"
                      : "rgba(255,255,255,0.05)",
                    color: isActive
                      ? "white"
                      : theme === "light"
                      ? "#0f172a"
                      : "#e2e8f0",
                    boxShadow: isActive ? "0 10px 22px rgba(59,130,246,0.25)" : "none",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <div style={{ padding: 16 }}>
            {activeTab === "Expériences" ? (
              <div
                style={{
                  display: "grid",
                  gap: 16,
                  gridTemplateColumns: "1fr 1.1fr",
                  alignItems: "start",
                }}
              >
                <div style={{ display: "grid", gap: 12 }}>
                  {experiences.map((xp) => (
                    <Card
                      key={xp.id}
                      title={xp.title}
                      subtitle={xp.subtitle}
                      range={xp.range}
                      logo={xp.logo}
                      active={xp.id === activeXp.id}
                      onClick={() => setActiveXp(xp)}
                    />
                  ))}
                </div>

                <div style={{ display: "grid", gap: 12 }}>
                  <Card
                    title={activeXp.title}
                    subtitle={activeXp.subtitle}
                    range={activeXp.range}
                    logo={activeXp.logo}
                    active
                  >
                    <ul style={{ margin: 0, paddingLeft: 18, color: theme === "light" ? "#334155" : "#94a3b8" }}>
                      {activeXp.bullets.map((b) => (
                        <li key={b} style={{ marginBottom: 6 }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <div>
                    <div style={{ fontSize: 14, color: theme === "light" ? "#475569" : "#94a3b8" }}>
                      Astuce: clique une expérience dans la colonne de gauche pour voir les détails.
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {activeTab === "Formation" ? (
              <div style={{ display: "grid", gap: 12 }}>
                {formation.map((f) => (
                  <Card key={f.title} title={f.title} subtitle={f.subtitle} range={f.range} />
                ))}
              </div>
            ) : null}

            {activeTab === "Compétences" ? (
              <div style={{ display: "grid", gap: 14 }}>
                {competences.map((c) => (
                  <Card key={c.cat} title={c.cat}>
                    <Pills items={c.items} />
                  </Card>
                ))}
              </div>
            ) : null}

            {activeTab === "Distinctions" ? (
              <div style={{ display: "grid", gap: 12 }}>
                {distinctions.map((d) => (
                  <Card
                    key={d.title}
                    title={d.title}
                    subtitle={d.range}
                    logo={d.logo}
                  />
                ))}
              </div>
            ) : null}

            {activeTab === "Langues" ? (
              <div style={{ display: "grid", gap: 12 }}>
                {langues.map((l) => (
                  <Card key={l.title} title={l.title} subtitle={l.level} />
                ))}
              </div>
            ) : null}

            {activeTab === "Centres d'intérêt" ? (
              <Card title="Centres d'intérêt">
                <Pills items={interets} />
              </Card>
            ) : null}
          </div>
        </div>

        <div style={{ marginTop: 14, fontSize: 12, color: theme === "light" ? "#64748b" : "#94a3b8" }}>
          (UI dynamique: onglets + thème clair/sombre + détails de timeline)
        </div>
      </div>
    </div>
  );
}

export default App;
