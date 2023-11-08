import React from 'react';
import { WeatherState } from '../context/WeatherProvider'

const Header = () => {
  const {currentWeather} = WeatherState();

  return (
    <header>
      {currentWeather ? (
        <>
          <h1>{currentWeather.name}</h1>
          <h3>{currentWeather.weather[0].main}</h3>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </header>
  );
};

export default Header;