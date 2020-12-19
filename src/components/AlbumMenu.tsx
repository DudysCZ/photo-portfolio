import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
    },
  }));

const AlbumMenu: FC = () => {
    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar}>
          <div>
            <Link className={classes.link} to="/galerie/portret">
              <Button className={classes.menuButton}>
                Portrét
              </Button>
            </Link>
            <Link className={classes.link} to="/galerie/architektura">
              <Button className={classes.menuButton}>
                Architektura
              </Button>
            </Link>
            <Link className={classes.link} to="/galerie/ulice">
              <Button className={classes.menuButton}>
                Ulice
              </Button>
            </Link>
            <Link className={classes.link} to="/galerie/zeleznice">
              <Button className={classes.menuButton}>
                Železnice
              </Button>
            </Link>
            <Link className={classes.link} to="/galerie/svatby">
              <Button className={classes.menuButton}>
                Svatby
              </Button>
            </Link>
          </div>
        </Toolbar>
    );
  };

export default AlbumMenu;
