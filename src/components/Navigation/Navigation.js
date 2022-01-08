import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import { useTheme, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

import Nav from './Nav/Nav';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        background: '#FF0000',
        boxShadow: 'none',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

const Navigation = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const showMenuIcon = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.openDrawer,
        })}
        >
            <Nav showedMenuIcon={showMenuIcon} 
                showedSideBar={props.drawerOpen}/>
        </AppBar>
    )
}
export default Navigation;