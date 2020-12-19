import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Domu from './pages/Domu';
import OMne from './pages/OMne';
import Galerie from './pages/Galerie';
import Album from './pages/Album';
import Kniha from './pages/Kniha';
import Nenalezeno from './pages/Nenalezeno';

import './App.css';
import Header from "./components/Header/Header";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffc107',
      light: '#fff350',
      dark: '#c79100',
    },
    secondary: {
      main: '#ffa000',
      light: '#ffd149',
      dark: '#c67100',
    },
  },
});

const App: FC = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Header/>

          <main className="App">
            <Container maxWidth="lg">
              <Switch>
                <Route path="/" exact component={Domu} />
                <Route path="/o_mne" exact component={OMne} />
                <Route path="/galerie" exact component={Galerie} />
                <Route path="/galerie/:id" exact component={Album} />
                <Route path="/kniha" exact component={Kniha} />
                <Route component={Nenalezeno} />
              </Switch>
            </Container>
          </main>
        </Router>
      </MuiThemeProvider>
  );
};

export default App;
