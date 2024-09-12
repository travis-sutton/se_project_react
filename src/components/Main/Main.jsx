// import WeatherCard from "../WeatherCard/WeatherCard";
// import ItemCard from "../ItemCard/ItemCard";

// import { useContext } from "react";
// import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

// function Main({ weatherTemp, onSelectCard, clothingItems }) {
//   const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

//   const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

//   const getWeatherType = () => {
//     if (currentTemperatureUnit === "F") {
//       if (temp >= 86) {
//         return "hot";
//       } else if (temp >= 65) {
//         return "warm";
//       } else {
//         return "cold";
//       }
//     } else if (currentTemperatureUnit === "C") {
//       if (temp >= 30) {
//         return "hot";
//       } else if (temp >= 18) {
//         return "warm";
//       } else {
//         return "cold";
//       }
//     }
//   };

//   const weatherType = getWeatherType();

//   const filteredCards = clothingItems.filter((item) => {
//     return item.weather.toLowerCase() === weatherType;
//   });

//   return (
//     <main className="main">
//       <WeatherCard day={true} type="clear" temp={temp} />
//       <section className="card_section" id="card-section">
//         <div className="card_section_helper">
//           Today is {temp}°{currentTemperatureUnit} / You may want to wear:
//         </div>
//         <div className="card_items">
//           {filteredCards.map((item) => (
//             <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Main;

import "./Main.css";

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems, loggedIn }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const getWeatherType = () => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 65) {
        return "warm";
      } else {
        return "cold";
      }
    } else if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 18) {
        return "warm";
      } else {
        return "cold";
      }
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="clear" temp={temp} />
      <section className="card_section" id="card-section">
        <div className="card_section_helper">
          {loggedIn
            ? `Today is ${temp}°${currentTemperatureUnit} / You may want to wear:`
            : "Sign Up to get Clothing Recommendations!"}
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
