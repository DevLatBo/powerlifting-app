import React, {useContext} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import { useTheme, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

import Nav from './Nav/Nav';
import SideDrawerContext from '../../store/sideDrawer-context';

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
    const sideDrawerCtx = useContext(SideDrawerContext);

    return (
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: sideDrawerCtx.drawerOpen,
        })}
        >
            <Nav showedMenuIcon={showMenuIcon} />
        </AppBar>
    )
}
export default Navigation;