import React, { FC } from 'react';

import Grid from "@material-ui/core/Grid";
import {Card, CardActionArea, CardMedia} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
    },
    media: {
        height: "calc(100vh - 250px)",
        backgroundPosition: "top",
    },
});

const Domu: FC = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} justify="center">
            <Grid item xs={12} className={classes.root}>
                <Card>
                    <CardActionArea>
                        <Link to="/o_mne">
                            <CardMedia
                                className={classes.media}
                                image={process.env.PUBLIC_URL + "/front1.png"}
                                title="Titulni obrazek"
                            />
                        </Link>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
};

export default Domu;
