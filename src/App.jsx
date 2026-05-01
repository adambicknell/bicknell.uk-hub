import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HubCard from "./components/HubCard.jsx";
import Footer from "./components/Footer.jsx";
import { cards, socials } from "./data/hubData.jsx";
import { useEqualCardDescriptionHeights } from "./hooks/useEqualCardDescriptionHeights.jsx";

function App() {
  const { descriptionHeight, setDescriptionRef } =
    useEqualCardDescriptionHeights(cards);

  return (
    <div className="page-shell">
      <Header />

      <main>
        <Hero />

        <section className="hub-grid" aria-label="Main links">
          {cards.map((card, index) => (
            <HubCard
              key={card.title}
              card={card}
              descriptionRef={setDescriptionRef(index)}
              descriptionHeight={descriptionHeight}
            />
          ))}
        </section>
      </main>

      <Footer socials={socials} />
    </div>
  );
}

export default App;
