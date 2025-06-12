import { useState } from "react";
import CurrentWeatherSection from "./component/CurrentWeatherSection";
import SearchSection from "./component/SearchSection";
import { WeatherApiUrl, weatherApiKey } from "./constants/API";
import ForecastSection from "./component/ForecastSection";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );
    const forecastFetch = fetch(
      `${WeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (Response) => {
        const weatherResponse = await Response[0].json();
        const forecastResponse = await Response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div>
      <SearchSection onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeatherSection data={currentWeather} />}
     {forecast && <ForecastSection data={forecast}/>}
    </div>
  );
}
