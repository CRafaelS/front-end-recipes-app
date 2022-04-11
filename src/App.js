import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import AppContainer from './StyledComponents/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundPattern from './images/background_pattern.avif';

const theme = {
  default: {
    background: backgroundPattern,
    width: '360px',
    height: '640px',
  },
};

function App() {
  return (
    <ThemeProvider theme={ theme.default }>
      <AppContainer>
        <Routes />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
