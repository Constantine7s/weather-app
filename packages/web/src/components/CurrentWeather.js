import React from 'react';
import TemperatureTile from './TemperatureTile';
import { WeatherState } from '../context/WeatherProvider';

const CurrentWeather = () => {
  const { currentWeather } = WeatherState();

  return (
    <div>
      {currentWeather ? (
        <>
         <div>
           <div>
              <i class="fa-solid fa-droplet"></i>
              <p>{currentWeather.main.humidity}%</p>
           </div>
           <p>{ Math.round(currentWeather.main.temp)}°</p>
           <div>
            <i class="fa-solid fa-wind"></i>
            <p>{currentWeather.wind.speed}</p>
           </div>
        </div>
          <div>
            <TemperatureTile title="Feels Like" temp={currentWeather.main.feels_like} />
            <TemperatureTile title="Min" temp={currentWeather.main.temp_min} />
            <TemperatureTile title="Max" temp={currentWeather.main.temp_max} />
          </div>
        </>
      ) : (
        <p>Current weather data loading...</p>
      )}
    </div>
  );
};

export default CurrentWeather;
