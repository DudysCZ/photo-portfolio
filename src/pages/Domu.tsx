import React, { FC } from 'react';

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Domu: FC = () => {
    return (
        <Grid container wrap="wrap" spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                    Portfolio<br />Milan Przybyla
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                    Vítejte na mých stránkách!
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Domu;
