import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    bar: {
        alignItems: 'center',
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar} >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Microlab - IoT Gateway
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}