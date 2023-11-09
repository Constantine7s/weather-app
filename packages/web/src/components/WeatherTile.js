import React from 'react';

const WeatherTile = ({ time, temperature, icon }) => {

  const date = new Date(time);
  const displayTime = date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const displayTemperature = `${Math.round(temperature)}°C`;

  return (
    <div>
      <p>{displayTime}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="weather icon" />
      <p>{displayTemperature} {icon}</p>
    </div>
  );
};

export default WeatherTile;
