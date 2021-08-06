import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';


const useStyles = makeStyles( (theme) => ({
    list: {
        width: 200,
    },
    drawerPaper: {
        background: '#FF0000',
        color: '#FFFFFF'
    },
    drawerIcon: {
        color:'#FFFFFF'
    },
}));
const SideDrawer = (props) => {
    const classes = useStyles();
    const sideList = (side) => {
        return(
            <div className={classes.list}>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/history">
                        <ListItemIcon><ReceiptIcon className={classes.drawerIcon}/></ListItemIcon>
                        <ListItemText primary="Historial" />
                    </ListItem>
                    <ListItem button component={Link} to="/movements">
                        <ListItemIcon><AccessibilityNewIcon className={classes.drawerIcon}/></ListItemIcon>
                        <ListItemText primary="Movimientos" />
                    </ListItem>
                </List>
            </div>
        );
    }
    return (
        <Drawer open={props.openDrawer}
          BackdropProps = {{ invisible: false }}
          onClose = {props.drawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
            {sideList("left")}
        </Drawer>
    );
}
export default SideDrawer;
