import Header from "./components/Header";
import Hero from "./components/Hero";
import HubCard from "./components/HubCard";
import Footer from "./components/Footer";
import { cards, socials } from "./data/hubData";
import { useEqualCardDescriptionHeights } from "./hooks/useEqualCardDescriptionHeights";

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
