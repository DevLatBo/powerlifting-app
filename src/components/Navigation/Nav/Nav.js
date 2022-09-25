import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/ui-slice';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

import { StyledToolbar } from '../../UI/Styling/General-styling';
import NavigationItems from './NavigationItems/NavigationItems';

const Nav = (props) => {
    const dispatch = useDispatch();
    const handlerSideDrawerOpen = () => {
        dispatch(uiActions.openSideDrawer());
    }

    return (
        <StyledToolbar>
            {!props.showedMenuIcon && 
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handlerSideDrawerOpen}
                    edge="start"
                    className="menuButton"
                >
                    <MenuIcon />
                </IconButton>
            }
            <Typography variant="h6" noWrap>
                <NavLink 
                    className="home-link"
                    to = "/">
                        <strong>DevLift</strong>
                </NavLink>
            </Typography>
            <section className="right-links">
                <NavigationItems/>
            </section>
        </StyledToolbar>
    )
}

export default Nav;
