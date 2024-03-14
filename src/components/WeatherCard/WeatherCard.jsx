import "./WeatherCard.css";
import React from "react";
import { useContext } from "react";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, temp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const weatherOptionURL = weatherOption ? weatherOption.url : "";

  const displayTemp =
    currentTemperatureUnit === "F" ? `${temp}°F` : `${temp}°C`;

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{displayTemp}</div>
      <img src={weatherOptionURL} className="weather_image" alt="weather" />
    </section>
  );
};

export default WeatherCard;
