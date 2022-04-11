import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import AppContainer from './StyledComponents/AppContainer';
import themes from './themes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={ themes.default }>
      <AppContainer>
        <Routes />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
