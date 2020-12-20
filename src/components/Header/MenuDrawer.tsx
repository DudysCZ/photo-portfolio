import React, {FC, useState} from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {Menu} from "@material-ui/icons";
import {useLoggedInUser} from "../../utils/firebase";

const useStyles = makeStyles(theme => ({
    list: {
        width: 300
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: theme.palette.text.primary,
    },
    iconButton: {
        height: "100%",
    },
}));

type Links = {
    navLinks : {
        title: string,
        path: string,
    }[]
};

const MenuDrawer: FC<Links> = ({navLinks}) => {
    const classes = useStyles();

    const isLoggedIn = useLoggedInUser();
    const [state, setState] = useState<boolean>(false)

    return (
        <>
            <IconButton onClick={() => setState(true)} className={classes.iconButton}>
                <Menu fontSize="large" style={{ color: `white` }} />
            </IconButton>
            <Drawer anchor="right" open={state} onClose={() => setState(false)}>
                <List component="nav" onClick={() => setState(false)}>
                    {navLinks.map(({ title, path }) => (
                        <Link to={path} className={classes.linkText} key={path}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </Link>
                    ))}
                    {isLoggedIn && (
                        <Link to="/logout" className={classes.linkText} key="Logout">
                            <ListItem button>
                                <ListItemText primary="Odhlásit se"/>
                            </ListItem>
                        </Link>
                    )}
                </List>
            </Drawer>
        </>
    )
}

export default MenuDrawer;
