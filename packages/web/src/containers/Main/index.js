import React, { useState } from 'react';
// import { fromJS, List } from 'immutable';
import styled from 'styled-components';

import Header from '@/components/Header';

const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Main = (props) => {
  return <MainContainer>
    <Header/>
  </MainContainer>;
};

export default Main;
