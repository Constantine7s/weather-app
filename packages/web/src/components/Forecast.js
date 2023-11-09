import React from 'react';
import WeatherTile from './WeatherTile'; // Assuming this is your WeatherTile component
import { WeatherState } from '../context/WeatherProvider'

const Forecast = () => {
  const { hourlyForecast } = WeatherState(); 

  return (
    <span>
      {hourlyForecast ? (
        hourlyForecast.list.slice(0, 8).map((weather, index) => (
          <WeatherTile key={index} time={weather.dt_txt} temperature={weather.main.temp} />
        ))
      ) : (
        <p>Weather data loading...</p>
      )}
    </span>
  );
};

export default Forecast;