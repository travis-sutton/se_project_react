import "./WeatherCard.css";

const weatherOptions = [
  // DAY WEATHER CONDITIONS
  {
    url: require("../../images/day/day_clear.svg").default,
    day: true,
    type: "clear",
  },
  {
    url: require("../../images/day/day_cloud.svg").default,
    day: true,
    type: "cloud",
  },
  {
    url: require("../../images/day/day_fog.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../../images/day/day_rain.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../../images/day/day_snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/day/day_storm.svg").default,
    day: true,
    type: "fog",
  },

  // NIGHT WEATHER CONDITIONS
  {
    url: require("../../images/night/night_clear.svg").default,
    day: false,
    type: "clear",
  },
  {
    url: require("../../images/night/night_cloud.svg").default,
    day: false,
    type: "cloud",
  },
  {
    url: require("../../images/night/night_fog.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../../images/night/night_rain.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../../images/night/night_snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../../images/night/night_storm.svg").default,
    day: false,
    type: "fog",
  },
];

const WeatherCard = ({ day, type, temp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcURL = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{temp}°F</div>

      <img src={imageSrcURL} className="weather_image"></img>
    </section>
  );
};

export default WeatherCard;
