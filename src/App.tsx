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
import AppHeader from "./components/AppHeader";

const App: FC = () => {
  return (
      <Router>
        <AppHeader/>

        <main className="App">
          <Container maxWidth="lg">
            <Switch>
              <Route path="/" exact component={Domu} />
              <Route path="/o_mne" exact component={OMne} />
              <Route path="/galerie" exact component={Galerie} />
              <Route path="/galerie/:id" children={<Album />} exact component={Album} />
              <Route path="/kniha" exact component={Kniha} />
              <Route component={Nenalezeno} />
            </Switch>
          </Container>
        </main>
      </Router>
  );
};

export default App;
