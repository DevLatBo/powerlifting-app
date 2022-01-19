import React from 'react';

import {NavItem, NavLinkStyled} from './NavigationItem-styling';

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