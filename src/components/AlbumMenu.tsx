import React, { FC, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

import { Album, albumsCollection } from '../utils/firebase';

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

    const [error, setError] = useState<string>();
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
      albumsCollection.orderBy("position")
        .get()
        .then(response => setAlbums(response.docs.map(d => d.data())))
        .catch(err => setError(err.message));       

      }, []);

    return (
        <Toolbar className={classes.toolbar}>
          <div>
          {error && (
            <Typography variant="subtitle2" align="center" color="error" paragraph>
                <b>{error}</b>
            </Typography>
            )}
            {albums.map((a) => (
              <Link className={classes.link} to={a.route}>
                <Button className={classes.menuButton}>
                  {a.name}
                </Button>
              </Link>
            ))}
          </div>
        </Toolbar>
    );
  };

export default AlbumMenu;
