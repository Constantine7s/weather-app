import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header';
import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(3,64,120);
  background: linear-gradient(rgba(3,64,120,1) 11%, rgba(241,244,255,1) 24%);
`;

const Main = () => {
  return <MainContainer>
    <Header/>
    <CurrentWeather/>
    <Forecast/>
  </MainContainer>;
};

export default Main;
