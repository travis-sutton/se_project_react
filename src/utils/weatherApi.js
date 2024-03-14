import { handleServerResponse } from "./api";

export const coordinates = { longitude: -86.76, latitude: 36.17 };
export const APIkey = "18f949f1a31af325db382aae28a78f6b";

const fetchData = () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`;

  return {
    getForecastWeather: () => fetch(weatherUrl).then(handleServerResponse),
  };
};

export const { getForecastWeather, getLocationData } = fetchData();

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };

  return weather;
};

export const parseLocationData = (data) => {
  const locationName = data?.name || "Not Found";
  return locationName;
};
