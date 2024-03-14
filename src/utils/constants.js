import dayClearImage from "../images/day/day_clear.svg";
import dayCloudImage from "../images/day/day_cloud.svg";
import dayFogImage from "../images/day/day_fog.svg";
import dayRainImage from "../images/day/day_rain.svg";
import daySnowImage from "../images/day/day_snow.svg";
import dayStormImage from "../images/day/day_storm.svg";
import nightClearImage from "../images/night/night_clear.svg";
import nightCloudImage from "../images/night/night_cloud.svg";
import nightFogImage from "../images/night/night_fog.svg";
import nightRainImage from "../images/night/night_rain.svg";
import nightSnowImage from "../images/night/night_snow.svg";
import nightStormImage from "../images/night/night_storm.svg";

const weatherOptions = [
  // DAY WEATHER CONDITIONS
  {
    url: dayClearImage,
    day: true,
    type: "clear",
  },
  {
    url: dayCloudImage,
    day: true,
    type: "cloud",
  },
  {
    url: dayFogImage,
    day: true,
    type: "rain",
  },
  {
    url: dayRainImage,
    day: true,
    type: "storm",
  },
  {
    url: daySnowImage,
    day: true,
    type: "snow",
  },
  {
    url: dayStormImage,
    day: true,
    type: "fog",
  },

  // NIGHT WEATHER CONDITIONS
  {
    url: nightClearImage,
    day: false,
    type: "clear",
  },
  {
    url: nightCloudImage,
    day: false,
    type: "cloud",
  },
  {
    url: nightFogImage,
    day: false,
    type: "rain",
  },
  {
    url: nightRainImage,
    day: false,
    type: "storm",
  },
  {
    url: nightSnowImage,
    day: false,
    type: "snow",
  },
  {
    url: nightStormImage,
    day: false,
    type: "fog",
  },
];

export { weatherOptions };
