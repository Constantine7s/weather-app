import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header';
import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';

const MainContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
background: linear-gradient(rgba(3,64,120,1) 22%, rgba(241,244,255,1) 40%);
z-: -100;
`;

const Main = () => {
  return <MainContainer>
    <Header/>
    <CurrentWeather/>
    <Forecast/>
  </MainContainer>;
};

export default Main;
