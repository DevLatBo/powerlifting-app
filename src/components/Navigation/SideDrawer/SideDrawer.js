import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/ui-slice';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@mui/icons-material/Home';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AttributionIcon from '@mui/icons-material/Attribution';
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
    const dispatch = useDispatch();
    const sdVisible = useSelector((state) => state.ui.sdIsVisible);

    const handlerSideDrawerClose = () => {
        dispatch(uiActions.closeSideDrawer());
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
                    <ListItem button component={Link} to="/personalrecord">
                        <ListItemIcon><MilitaryTechIcon className={classes.drawerIcon}/></ListItemIcon>
                        <ListItemText primary="Records Personales" />
                    </ListItem>
                    <ListItem button component={Link} to="/movements">
                        <ListItemIcon><FitnessCenterIcon className={classes.drawerIcon}/></ListItemIcon>
                        <ListItemText primary="Movimientos" />
                    </ListItem>
                    <ListItem button component={Link} to="/history">
                        <ListItemIcon><LibraryBooksIcon className={classes.drawerIcon}/></ListItemIcon>
                        <ListItemText primary="Historial" />
                    </ListItem>
                    <ListItem button component={Link} to="/author">
                        <ListItemIcon><AttributionIcon className={classes.drawerIcon}/></ListItemIcon>
                        <ListItemText primary="Autor" />
                    </ListItem>
                </List>
            </div>
        );
    }
    
    return (
        <Drawer open={sdVisible}
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
