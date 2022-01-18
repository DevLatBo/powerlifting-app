import {useContext} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerContext from '../../../store/sideDrawer-context';

const StyledToolbar = styled(Toolbar)`
    height: 64px;
    & .menuButton{
        margin-right: 0.5rem;
    }
    & .right-links{
        margin-left: auto;
    }
    & .home-link{
        color: #FFFFFF;
        text-decoration: none;
    }
`;

const Nav = (props) => {
    const sideDrawerCtx = useContext(SideDrawerContext);

    const handlerSideDrawerOpen = () => {
        sideDrawerCtx.openSideDrawer();
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
                        <strong>Powerlifting</strong>
                </NavLink>
            </Typography>
            <section className="right-links">
                <NavigationItems/>
            </section>
        </StyledToolbar>
    )
}

export default Nav;