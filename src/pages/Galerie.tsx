import React, { FC } from 'react';

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Galerie: FC = () => {
    return (
        <Grid container wrap="wrap" spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                    Galerie
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                    Obsah galerie
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Galerie;
