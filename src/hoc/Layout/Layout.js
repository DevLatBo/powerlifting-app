import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Navbar from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    /*padding: theme.spacing(3),*/
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: "47px",
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
  }
}));

const Layout = (props) => {
  const classes = useStyles();
  const sdVisible = useSelector((state) => state.ui.sdIsVisible);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <SideDrawer/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: sdVisible,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;