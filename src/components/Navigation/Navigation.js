import React from 'react';
import { useSelector } from 'react-redux';
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
    const sdVisible = useSelector((state) => state.sd.isVisible);

    return (
        <AppBar position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: sdVisible,
        })}
        >
            <Nav showedMenuIcon={showMenuIcon} />
        </AppBar>
    )
}
export default Navigation;
