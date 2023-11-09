import React from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
  text-align: center;
  align-items: center;
  display:flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 1.1rem; 
  background-color: #1282A2; 
  color: #ffffff;
  width: 70px;
  padding: 6px 8px;
  border-radius: 20px; 
  margin: 0;
`;

const Temperature = styled.p`
  margin-top: 10px;
  font-size: 2rem;
`;

const TemperatureTile = ({ title, temp }) => {
  const displayTemp = Math.round(temp);

  return (
    <TileContainer>
      <Title>{title}</Title>
      <Temperature>{displayTemp}°</Temperature>
    </TileContainer>
  );
};

export default TemperatureTile;
