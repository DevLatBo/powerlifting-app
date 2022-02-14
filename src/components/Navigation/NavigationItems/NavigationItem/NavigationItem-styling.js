import styled from "styled-components";
import {NavLink} from 'react-router-dom';

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