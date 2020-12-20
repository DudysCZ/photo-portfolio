import React, { FC, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { signIn, useLoggedInUser } from '../utils/firebase';

const Login: FC = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>();
  
  const isLoggedIn = useLoggedInUser();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h1">Přihlásit se</Typography>
        <Typography variant="subtitle1">Použijte prosím svůj účet</Typography>
        <TextField
          label="E-mailová adresa"
          type="email"
          name="email"
          fullWidth
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <TextField
          label="Heslo"
          type="password"
          name="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && (
          <Typography variant="subtitle2" align="left" color="error" paragraph>
            <b>{error}</b>
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          size="large"
          color="primary"
          onClick={() =>
            signIn(user, password).catch(err => setError(err.message))
          }
        >
          Přihlásit se
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;
