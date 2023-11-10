import React, { useMemo } from 'react';
import styled from 'styled-components';
import WeatherTile from './WeatherTile';
import { WeatherState } from '../context/WeatherProvider';

const ScrollContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  margin-top: 1rem;
  width: 95%; 
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Forecast = () => {
  const { hourlyForecast } = WeatherState();

  const twentyFourHourForecast = useMemo(() => {
    return hourlyForecast ? hourlyForecast.list.slice(0, 8) : [];
  }, [hourlyForecast]);

  return (
    <ScrollContainer>
      {twentyFourHourForecast.length > 0 ? (
        twentyFourHourForecast.map((weather, index) => (
          <WeatherTile key={index} time={weather.dt_txt} temperature={weather.main.temp} icon={weather.weather[0].icon} />
        ))
      ) : (
        null
      )}
    </ScrollContainer>
  );
};

export default Forecast;
