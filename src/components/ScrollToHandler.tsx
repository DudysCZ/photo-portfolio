import React, {FC} from 'react';
import {Zoom} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    positionLeft: {
        position: 'fixed',
        bottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            left: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            left: theme.spacing(10),
        },
    },
    positionRight: {
        position: 'fixed',
        bottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            right: theme.spacing(5),
        },
        [theme.breakpoints.up('md')]: {
            right: theme.spacing(10),
        },
    },
}));

type Handler = {
    selector: string,
    position: "left" | "right",
    zoomIn?: boolean
}

const ScrollToHandler: FC<Handler> = ({children, selector, position, zoomIn}) => {
    const classes = useStyles();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (document).querySelector(
            selector
        )
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    return (
        <Zoom in={zoomIn ?? true}>
            <div onClick={handleClick} className={position === "left" ? classes.positionLeft : classes.positionRight}>
                {children}
            </div>
        </Zoom>
    )
}

export default ScrollToHandler;
