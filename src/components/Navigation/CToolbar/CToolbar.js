import React from 'react';
import clsx from 'clsx';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { useTheme, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavigationItems from '../NavigationItems/NavigationItems';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        background: 'transparent',
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
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    rightLinks: {
        marginLeft: 'auto',
    },
    homeLink: {
        color: '#FFFFFF',
        textDecoration: 'none'
    },
}));

const CToolbar = (props) => {
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
            <Toolbar>
                {!showMenuIcon && 
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.drawerOpen}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                }
                
                <Typography variant="h6" noWrap>
                    <NavLink 
                        className={classes.homeLink}
                        to = "/">
                            <strong>Powerlifting</strong>
                    </NavLink>
                </Typography>
                <section className={classes.rightLinks}>
                    <NavigationItems/>
                </section>
            </Toolbar>
        </AppBar>
    )
}
export default CToolbar;