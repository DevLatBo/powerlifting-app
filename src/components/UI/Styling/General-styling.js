import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

export const StyledToolbar = styled(Toolbar)`
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

export const NavItems = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

export const NavItem = styled.li`
    margin-left: 20px;
    float: left;
`;

export const NavLinkStyled = styled(NavLink)`
    font-size: 1rem;
    display: block;
    color: #FFFFFF;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &.${props => props.activeClassName} {
        font-weight: bold;
        font-size: 1.25rem;
    }
`;

export const StyledBlock = styled.div`
    padding: 60px;
`;