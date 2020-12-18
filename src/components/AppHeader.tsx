import React, {FC, useState} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import {
    ButtonBase,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import {Menu} from "@material-ui/icons";

const navLinks = [
    { title: `Úvodní stránka`, path: `/` },
    { title: `O mně`, path: `/o_mne` },
    { title: `Fotogalerie`, path: `/galerie` },
    { title: `Návštěvní kniha`, path: `/kniha` },
]


const useStylesSideDrawer = makeStyles({
    list: {
        width: 250
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    }
});

const SideDrawer: FC = () => {
    const classes = useStylesSideDrawer();

    const [state, setState] = useState<boolean>(false)
    return (
        <>
            <IconButton edge="start" aria-label="menu" onClick={() => setState(true)}>
                <Menu fontSize="large" style={{ color: `white` }} />
            </IconButton>
            <Drawer anchor="right" open={state} onClose={() => setState(false)}>
                <List component="nav" onClick={() => setState(false)}>
                    {navLinks.map(({ title, path }) => (
                        <Link to={path} className={classes.linkText} key={title}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

// const style = {
//     position: `fixed`,
//     bottom: `50px`,
//     right: `100px`,
//     zIndex: `99`,
// }
//
// const BackToTop: FC = ({ children }) => {
//     const trigger = useScrollTrigger()
//     const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
//         const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
//             '#back-to-top-anchor',
//         );
//         if (anchor) {
//             anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//     }
//
//     return (
//         <Zoom in={trigger}>
//             <div onClick={handleClick} role="presentation">
//                 {children}
//             </div>
//         </Zoom>
//     )
// }

const useStyles = makeStyles(theme => ({
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
}));

const AppHeader = () => {
    const classes = useStyles();

    // const trigger = useScrollTrigger()

    const logo = {
        url: '/static/images/grid-list/breakfast.jpg'
    }

    return (
        // <Slide appear={false} direction="down" in={!trigger}>
            <AppBar position={"fixed"}>
                <Toolbar id="back-to-top-anchor">
                    <Container maxWidth="lg" className={classes.navDisplayFlex}>
                        <ButtonBase focusRipple>
                            <Link to="/">
                                <img src="logo2.png" alt="Logo" style={{
                                    height: "50px",
                                }}/>
                            </Link>
                        </ButtonBase>
                        <Hidden smDown>
                            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                                {navLinks.map(({ title, path }) => (
                                    <Link to={path} className={classes.linkText} key={title}>
                                        <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </Hidden>
                        <Hidden mdUp>
                            <SideDrawer/>
                        </Hidden>
                    </Container>
                </Toolbar>
            </AppBar>
        // </Slide>
    );
};

export default AppHeader;
