import { useState } from "react";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import Forecast from "./components/Forecast/Forecast.jsx";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Api";
// import {BackgroundImage} from "./assets/shutterstock_1937399083.jpg"

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
      <div className="bg-[url('./assets/shutterstock_1937399083.jpg')] bg-cover bg-center min-h-screen backdrop-blur-lg">
          <div className="absolute inset-0 bg-black bg-opacity-55"></div> {/* Adjusted overlay opacity */}
          <div className="relative z-10 flex min-h-screen">
              <div className="flex-1">
                  <div className="pb-8">
                      {/* Left side: Search and CurrentWeather */}
                      <Search onSearchChange={handleOnSearchChange} />
                  </div>
                  <div className="mt-4 pt-4">
                      {currentWeather && <CurrentWeather data={currentWeather} />}
                  </div>
              </div>
              <div className="flex-1 p-4">
                  {/* Right side: Forecast */}
                  {forecast && <Forecast data={forecast} />}
              </div>
          </div>
      </div>
  );
}
export default App;
