import React from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff; 
  height: 145px;
  padding: 0 16px;
  border-radius: 15px; 
  box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.4); 
  text-align: center; 
  margin: 8px;
`;

const TimeText = styled.p`
  font-size: 1.5rem;
  margin-top: 15px;
  margin-bottom: 0;
`;

const TemperatureText = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const WeatherIcon = styled.img`
  height: 70px;
  margin: 0;
`;

const WeatherTile = ({ time, temperature, icon }) => {
  const date = new Date(time);
  const displayTime = date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const displayTemperature = `${Math.round(temperature)}°`;

  return (
    <TileContainer>
      <TimeText>{displayTime}</TimeText>
      <WeatherIcon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
      <TemperatureText>{displayTemperature}</TemperatureText>
    </TileContainer>
  );
};

export default WeatherTile;
