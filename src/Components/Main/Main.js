import WeatherCard from "../WeatherCard/WeatherCard";
import { itemCardArray, ItemCard } from "../ItemCard/ItemCard";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = itemCardArray.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="clear" temp={weatherTemp} />
      <section className="card_section" id="card-section">
        <div className="card_section_helper">
          Today is {weatherTemp}°F/ You may want to wear:
        </div>
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
