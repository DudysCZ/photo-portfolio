import React, {FC} from 'react';
import {
    useScrollTrigger, Zoom,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    position: {
        position: 'fixed',
        bottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            left: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            left: theme.spacing(10),
        },
    },
}));

const BackToTop: FC = ({children}) => {
    const classes = useStyles();

    const trigger = useScrollTrigger();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (document).querySelector(
            "#back-to-top-anchor"
        )
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} className={classes.position}>
                {children}
            </div>
        </Zoom>
    )
}

export default BackToTop;
