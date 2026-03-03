import Item from "./Item";
import SchneiderLogo from "./Schneider_Electric-Logo.wine.png";
import MakenseLogo from "./logo-makense.png";
import EdgLogo from "./logo-edg.png";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Barre Beavogui</h1>
      <h2>Génie électrique</h2>

      <p>Bienvenue sur mon CV en ligne.</p>

      <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
        <Item logo={SchneiderLogo} title="Schneider Electric" meta="Stage">
          <p>Stage en génie électrique.</p>
        </Item>

        <Item logo={MakenseLogo} title="Makense" meta="Projet R&D">
          <p>Projet de recherche & développement.</p>
        </Item>

        <Item logo={EdgLogo} title="EDG" meta="Association">
          <p>Participation associative.</p>
        </Item>
      </div>
    </div>
  );
}

export default App;
