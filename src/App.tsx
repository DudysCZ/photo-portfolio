import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

import Domu from './pages/Domu';
import OMne from './pages/OMne';
import Galerie from './pages/Galerie';
import Album from './pages/Album';
import Kniha from './pages/Kniha';
import Nenalezeno from './pages/Nenalezeno';

import './App.css';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: 'none'
  },
}));

const App: FC = () => {
  const classes = useStyles();

  return (
      <Router>
        <AppBar color="primary" position="static" variant="outlined">
          <Toolbar className={classes.toolbar}>
            <div>
              <Link className={classes.link} to="/">
                <Button className={classes.menuButton}>
                  Úvodní stránka
                </Button>
              </Link>
              <Link className={classes.link} to="/o_mne">
                <Button className={classes.menuButton}>
                  O mně
                </Button>
              </Link>
              <Link className={classes.link} to="/galerie">
                <Button className={classes.menuButton}>
                  Fotogalerie
                </Button>
              </Link>
              <Link className={classes.link} to="/kniha">
                <Button className={classes.menuButton}>
                  Návštěvní kniha
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>

        <main className="App">
          <Container maxWidth="sm">
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