import React from 'react';
import { WeatherState } from '../context/WeatherProvider';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

const Title = styled.h1`
  font-size: 7rem;
  font-weight: 500;
  margin-bottom: 0;
`;

const WeatherImage = styled.img`
  width: 150px; 
  height: 150px; 
  object-fit: cover;
`;

const Description = styled.h3`
  font-size: 3rem;
  font-weight: 400;
  margin: 0.5rem 0; 
`;

const LoadingText = styled.p`
`;

const SearchIcon = styled.i`

  position: absolute;
  top: 1rem; 
  right: 1rem; 
  font-size: 3rem;
  cursor: pointer;
`;

const Header = () => {
  const { currentWeather } = WeatherState();

  return (
    <StyledHeader>
      <SearchIcon className="fas fa-magnifying-glass-location" /> {/* Font Awesome search icon */}
      {currentWeather ? (
        <>
          <Title>{currentWeather.name}</Title>
          <Description>{currentWeather.weather[0].main}</Description>
          <WeatherImage
            src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
            alt={currentWeather.weather[0].main}
            title={currentWeather.weather[0].description}
          />
        </>
      ) : (
        <LoadingText>Loading weather data...</LoadingText>
      )}
    </StyledHeader>
  );
};

export default Header;
