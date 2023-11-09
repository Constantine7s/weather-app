import React, { useMemo } from 'react';
import WeatherTile from './WeatherTile'; 
import { WeatherState } from '../context/WeatherProvider'

const Forecast = () => {
  const { hourlyForecast } = WeatherState(); 

  const twentyFourHourForecast = useMemo(() => {
    return hourlyForecast ? hourlyForecast.list.slice(0, 8) : [];
  }, [hourlyForecast]); 

  return (
    <div>
      {twentyFourHourForecast.length > 0 ? (
        twentyFourHourForecast.map((weather, index) => (
          <WeatherTile key={index} time={weather.dt_txt} temperature={weather.main.temp} icon={weather.weather[0].icon} />
        ))
      ) : (
        <p>Weather data loading...</p>
      )}
    </div>
  );
};

export default Forecast;
