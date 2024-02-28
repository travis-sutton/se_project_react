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

const itemCardArray = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

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

export { itemCardArray, weatherOptions };
