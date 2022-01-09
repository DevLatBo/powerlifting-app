import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@mui/icons-material/Home';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';

import SideDrawerContext from '../../../store/sideDrawer-context';

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
    const sideDrawerCtx = useContext(SideDrawerContext);

    const handlerSideDrawerClose = () => {
        sideDrawerCtx.closeSideDrawer();
    }
    
    const sideList = (side) => {
        return(
            <div className={classes.list}>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon><HomeIcon className={classes.drawerIcon}/></ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem button component={Link} to="/prs">
                        <ListItemIcon><MilitaryTechIcon className={classes.drawerIcon}/></ListItemIcon>
                        <ListItemText primary="PRs" />
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
        <Drawer open={sideDrawerCtx.drawerOpen}
          BackdropProps = {{ invisible: false }}
          onClose = {handlerSideDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
            {sideList("left")}
        </Drawer>
    );
}
export default SideDrawer;
