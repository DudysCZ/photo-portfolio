import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import {
    ButtonBase, Fab,
    Grid,
    Hidden,
    List,
    ListItem,
    ListItemText, useScrollTrigger,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import MenuDrawer from "./MenuDrawer";
import {KeyboardArrowUp} from "@material-ui/icons";
import ScrollToHandler from "../ScrollToHandler";

const navLinks = [
    // { title: `Úvodní stránka`, path: `/` },
    { title: `O mně`, path: `/o_mne` },
    { title: `Fotogalerie`, path: `/galerie/portret` },
    { title: `Návštěvní kniha`, path: `/kniha` },
    { title: `Logout`, path: `/logout` },
]



const useStyles = makeStyles(theme => ({
    toolbar: {
        minHeight: 100,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(5),
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
        paddingTop: theme.spacing(6),
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: theme.palette.primary.contrastText,
    }
}));

const Header = () => {
    const classes = useStyles();

    const trigger = useScrollTrigger();

    return (
        <AppBar position={"static"} color={"transparent"} elevation={0}>
            <Toolbar id="back-to-top-anchor" className={classes.toolbar}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={4}>
                            <ButtonBase focusRipple>
                                <Link to="/">
                                    <img src={process.env.PUBLIC_URL + "/logo2.png"} alt="Logo" style={{
                                        maxWidth: "320px",
                                        width: "100%",
                                        maxHeight: "100%",
                                    }}/>
                                </Link>
                            </ButtonBase>
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={6} sm={8}>
                                <List className={classes.navDisplayFlex}>
                                    {navLinks.map(({ title, path }) => (
                                        <Link to={path} className={classes.linkText} key={title}>
                                            <ListItem button>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <Grid item xs={6} sm={8} style={{textAlign: "right"}}>
                                <MenuDrawer navLinks={navLinks}/>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
                <ScrollToHandler selector={"#back-to-top-anchor"} position={"left"} zoomIn={trigger}>
                    <Fab size="large">
                        <KeyboardArrowUp />
                    </Fab>
                </ScrollToHandler>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
