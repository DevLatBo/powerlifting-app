import React from 'react';

import {NavItem, NavLinkStyled} from '../../../../UI/Styling/General-styling';

const NavigationItem = (props) => {
    return (
        <NavItem>
            <NavLinkStyled
                activeClassName='active'
                to = {props.link}
                exact = {props.exact}>
                    {props.children}
            </NavLinkStyled>
        </NavItem>
    )
}

export default NavigationItem;