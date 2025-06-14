import { useState, useEffect } from "react";
import CurrentWeatherSection from "./component/CurrentWeatherSection";
import SearchSection from "./component/SearchSection";
import ForecastSection from "./component/ForecastSection";
import { WeatherApiUrl, weatherApiKey } from "./constants/API";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null); // Added for error handling

  const defaultCity = {
    value: "7.2571 5.2058", // Correct coordinates for Akure, NG
    label: "Akure, NG",
  };

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

        console.log("Weather API response:", weatherResponse); // Debug API response

        // Check for API errors
        if (weatherResponse.cod !== 200) {
          setError(weatherResponse.message || "Failed to fetch weather data");
          setCurrentWeather(null);
          setForecast(null);
          return;
        }

        setError(null);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        setError("An error occurred while fetching weather data");
        setCurrentWeather(null);
        setForecast(null);
        console.error("Fetch error:", err);
      });
  };

  useEffect(() => {
    if (!currentWeather) {
      handleOnSearchChange(defaultCity);
    }
  }, []);

  return (
    <div>
      <SearchSection onSearchChange={handleOnSearchChange} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {currentWeather && <CurrentWeatherSection data={currentWeather} />}
      {forecast && <ForecastSection data={forecast} />}
    </div>
  );
}