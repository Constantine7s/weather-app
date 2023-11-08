import React, { createContext, useState, useEffect } from 'react';
import Main from './containers/Main';
import currentWeatherData from '../../../data/currentWeather.json'
import weatherForecastData from '../../../data/weatherForecast.json';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setCurrentWeather(currentWeatherData);
    setHourlyForecast(weatherForecastData);
  }, []);

  return (
    <WeatherContext.Provider value={{ currentWeather, hourlyForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

const App = (props) => {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
};

export default App;
