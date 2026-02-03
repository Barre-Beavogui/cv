import Item from './Item';
import logoSchneider from './Schneider_Electric-Logo.wine.png';
import logoEdg from './logo-edg.png';
import logoMakense from './logo-makense.png';

function App() {
  return (
    <div className="app">
      <h2>Expériences</h2>
      <Item
        logo={logoSchneider}
        title="Schneider Electric"
        meta="Stage – Génie électrique · 2024"
      >
        <ul>
          <li>Étude de systèmes électriques industriels</li>
          <li>Analyse énergétique et optimisation</li>
        </ul>
      </Item>
      <Item logo={logoMakense} title="Makense" meta="Projet R&D – Capteurs intelligents">
        <p>Développement d’un système de mesure pour la gestion de l’énergie.</p>
      </Item>
      <Item logo={logoEdg} title="EDG" meta="Association – Membre actif">
        <p>Organisation d’événements et projets étudiants.</p>
      </Item>
    </div>
  );
}

export default App;
