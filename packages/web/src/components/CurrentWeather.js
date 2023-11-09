import React from 'react';
import TemperatureTile from './TemperatureTile'; // Assuming this is your TemperatureTile component
import { WeatherState } from '../context/WeatherProvider';

const CurrentWeather = () => {
  const { currentWeather } = WeatherState();

  return (
    <div>
      {currentWeather ? (
        <>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <p>Temperature: { Math.round(currentWeather.main.temp)}°</p>
          <p>Wind Speed: {currentWeather.wind.speed}</p>
          <TemperatureTile title="Feels Like" temp={currentWeather.main.feels_like} />
          <TemperatureTile title="Min" temp={currentWeather.main.temp_min} />
          <TemperatureTile title="Max" temp={currentWeather.main.temp_max} />
        </>
      ) : (
        <p>Current weather data loading...</p>
      )}
    </div>
  );
};

export default CurrentWeather;
