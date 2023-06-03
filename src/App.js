import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((cardData) => (
    <div className="card">
      <Card
        key={cardData.id}
        img="kzaf.png"
        rating={cardData.stats.rating}
        reviewCount={cardData.stats.reviewCount}
        country={cardData.location}
        title={cardData.title}
        price={cardData.price}
        openSpots={cardData.openSpots}
      />
    </div>
  ));

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
