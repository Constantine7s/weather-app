import React from 'react';

const WeatherTile = ({ time, temperature }) => {

  const date = new Date(time);
  const displayTime = date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  const displayTemperature = `${Math.round(temperature)}°C`;

  return (
    <div className="weather-tile">
      <p>{displayTime}</p>
      <p>{displayTemperature}</p>
    </div>
  );
};

export default WeatherTile;
