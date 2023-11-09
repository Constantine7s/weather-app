import React, { createContext, useState, useEffect, useContext } from 'react';
import currentWeatherData from '../../../../data/currentWeather.json';
import weatherForecastData from '../../../../data/weatherForecast.json';

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

export const WeatherState = () => {
  return useContext(WeatherContext);
};

export default WeatherProvider;
