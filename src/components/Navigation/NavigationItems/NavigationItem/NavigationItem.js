import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavItem = styled.li`
    margin-left: 20px;
    float: left;
`;

const NavLinkStyled = styled(NavLink)`
    font-size: 17px;
    display: block;
    color: #FFFFFF;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;

const NavigationItem = (props) => {
    return (
        <NavItem>
            <NavLinkStyled
                to = {props.link}
                exact = {props.exact}>
                    {props.children}
            </NavLinkStyled>
        </NavItem>
    )
}

export default NavigationItem;