import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header';
import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';

const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Main = () => {
  return <MainContainer>
    <Header/>
    <CurrentWeather/>
    <Forecast/>
  </MainContainer>;
};

export default Main;
