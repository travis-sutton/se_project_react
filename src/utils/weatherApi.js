const coordinates = { longitude: -86.76, latitude: 36.17 };

const APIkey = "18f949f1a31af325db382aae28a78f6b";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`
  )
    .then(processServerResponse)
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
