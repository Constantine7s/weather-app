import React from 'react';

const TemperatureTile = ({ title, temp }) => {

  const displayTemp = Math.round(temp);

  return (
    <div>
      <h3>{title}</h3>
      <p>{displayTemp}°</p>
    </div>
  );
};


export default TemperatureTile;