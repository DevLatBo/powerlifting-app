import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

export const StyledTitlePage = styled.div`
    background-image: url(${props => props.imageBackground});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 45vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    & h2 {
        color: #FFFFFF;
        font-size: 2.5rem;
        text-align: center;
    }
    & h3 {
        color: #FFFFFF;
        font-size: 1.5rem;
        text-align: center;
    }
`;

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
    font-size: 17px;
    display: block;
    color: #FFFFFF;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;

export const StyledBlock = styled.div`
    padding: 60px;
`;