import React, { createContext, useState, useEffect, useContext } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${apiKey}&units=metric`);
        const currentWeatherData = await currentWeatherResponse.json();
        setCurrentWeather(currentWeatherData);

        const weatherForecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=${apiKey}&units=metric`);
        const weatherForecastData = await weatherForecastResponse.json();
        setHourlyForecast(weatherForecastData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    

    fetchWeatherData();
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
