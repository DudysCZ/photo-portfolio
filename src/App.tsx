import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Domu from './pages/Domu';
import OMne from './pages/OMne';
import AlbumGalerie from './pages/AlbumGalerie';
import Kniha from './pages/Kniha';
import Import from './pages/Import';
import Nenalezeno from './pages/Nenalezeno';

import './App.css';
import Header from "./components/Header/Header";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0',
    },
    secondary: {
      main: '#0097a7',
      light: '#56c8d8',
      dark: '#006978',
    },
  },
});

const App: FC = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <main className="App">
            <Header/>
            <Container maxWidth="lg">
              <Switch>
                <Route path="/" exact component={Domu} />
                <Route path="/o_mne" exact component={OMne} />
                <Route path="/galerie/:id" exact component={AlbumGalerie} />
                <Route path="/kniha" exact component={Kniha} />
                <Route path="/import" exact component={Import} />
                <Route component={Nenalezeno} />
              </Switch>
            </Container>
          </main>
        </Router>
      </MuiThemeProvider>
  );
};

export default App;
