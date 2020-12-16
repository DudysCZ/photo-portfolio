import React, { FC } from 'react';

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Kniha: FC = () => {
    return (
        <Grid container wrap="wrap" spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                    Návštěvní kniha
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                    Obsah návštěvní knihy
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Kniha;
