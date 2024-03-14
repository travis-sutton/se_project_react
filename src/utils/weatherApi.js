import { handleServerResponse } from "./api";

export const coordinates = { longitude: -86.76, latitude: 36.17 };
export const APIkey = "18f949f1a31af325db382aae28a78f6b";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`
  )
    .then(handleServerResponse)
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });

  return weatherApi;
};

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

export const getLocationData = (coordinates, APIkey) => {
  const locationApi = fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&limit=1&appid=${APIkey}`
  )
    .then(handleServerResponse)

    .catch((error) => {
      console.error("Error fetching location data:", error);
      return "Not Found";
    });

  return locationApi;
};

export const parseLocationData = (data) => {
  const locationName = data[0]?.name || "Not Found";
  return locationName;
};
