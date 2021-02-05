import React from 'react';

import GlobalStyle from './styles/global';

import Background from './components/Background';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Background>
        <Routes />
      </Background>
      <GlobalStyle />
    </>
  );
}

export default App;
