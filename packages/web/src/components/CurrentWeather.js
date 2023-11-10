import React from 'react';
import styled from 'styled-components';
import { WeatherState } from '../context/WeatherProvider';
import TemperatureTile from './TemperatureTile';

const WeatherContainer = styled.div`
  display: grid;
  grid-template: 120px 120px / 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 0 40px;
  margin-top: 0px;
  width: 90%;
`;

const TemperatureInfo = styled.h2`
  font-size: 7.25rem;
  font-weight: 500;
  color: #0a1128;
  z-index: 100;
  text-align: center;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const InfoText = styled.p`
  font-size: 2.5rem;
  color: #0a1128;
  margin-top: 2px;
  margin-bottom: 0;
`;

const StyledIcon = styled.i`
  font-size: 2em;
  margin-bottom: 5px;
`;

const CurrentWeather = () => {
  const { currentWeather } = WeatherState();

  return (
    <WeatherContainer>
      {currentWeather ? (
        <>
          <InfoBlock>
            <StyledIcon className="fa-solid fa-droplet" />
            <InfoText>{currentWeather.main.humidity}</InfoText>
          </InfoBlock>
          <TemperatureInfo>{Math.round(currentWeather.main.temp)}°</TemperatureInfo>
          <InfoBlock>
            <StyledIcon className="fa-solid fa-wind" />
            <InfoText>{currentWeather.wind.speed}</InfoText>
          </InfoBlock>
          <TemperatureTile title="Feels Like" temp={currentWeather.main.feels_like} />
          <TemperatureTile title="Min" temp={currentWeather.main.temp_min} />
          <TemperatureTile title="Max" temp={currentWeather.main.temp_max} />
        </>
      ) : (
        null
      )}
    </WeatherContainer>
  );
};

export default CurrentWeather;
