import React from 'react';
import Main from './containers/Main';
import WeatherProvider from './context/WeatherProvider';

const App = () => {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
};

export default App;
