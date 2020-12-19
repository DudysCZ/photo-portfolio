import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import {
    ButtonBase, Fab,
    Grid,
    Hidden,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import MenuDrawer from "./MenuDrawer";
import BackToTop from "./BackToTop";
import {KeyboardArrowUp} from "@material-ui/icons";

const navLinks = [
    // { title: `Úvodní stránka`, path: `/` },
    { title: `O mně`, path: `/o_mne` },
    { title: `Fotogalerie`, path: `/galerie/portret` },
    { title: `Návštěvní kniha`, path: `/kniha` },
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
        color: `white`
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position={"static"} color={"transparent"}>
            <Toolbar id="back-to-top-anchor" className={classes.toolbar}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={4}>
                            <ButtonBase focusRipple>
                                <Link to="/">
                                    <img src="logo2.png" alt="Logo" style={{
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
                                <MenuDrawer navLinks={navLinks}></MenuDrawer>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
                <BackToTop>
                    <Fab color="secondary" size="large" aria-label="scroll back to top">
                        <KeyboardArrowUp />
                    </Fab>
                </BackToTop>
            </Toolbar>
        </AppBar>
    );
};

export default Header;