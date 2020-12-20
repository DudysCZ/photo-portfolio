import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { signOut, useLoggedInUser } from '../utils/firebase';

const Logout: FC = () => {
  const [error, setError] = useState<string>();
  
  const isLoggedIn = useLoggedInUser();

  function onLogout() {
      signOut().catch(err => setError(err.message));
  }

  if (isLoggedIn === null) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h1">Odhlásit se</Typography>
        <Typography variant="subtitle1">Skutečně se chcete odhlásit? Přijdete tak o možnost moderovat knihu návštěv.</Typography>
        {error && (
          <Typography variant="subtitle2" align="left" color="error" paragraph>
            <b>{error}</b>
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button variant="text" size="large" color="primary"
                onClick={onLogout}>Odhlásit se</Button>
      </CardActions>
    </Card>
  );
};

export default Logout;
