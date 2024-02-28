import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, temp = "" }) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const weatherOptionURL = weatherOption ? weatherOption.url : "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{temp}°F</div>

      <img src={weatherOptionURL} className="weather_image"></img>
    </section>
  );
};

export default WeatherCard;
