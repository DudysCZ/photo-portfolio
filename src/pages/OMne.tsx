import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const OMne: FC = () => {
  return (
    <Grid container wrap="wrap" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          O mně
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OMne;
