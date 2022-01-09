import React from 'react';
import styled from 'styled-components';
import { useTheme, useMediaQuery } from '@material-ui/core';

import Aux from '../../../hoc/Aux/Aux';
import NavigationItem from './NavigationItem/NavigationItem';

const NavItems = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;
const NavigationItems = (props) => {
    const theme = useTheme();
    const showLinks = useMediaQuery(theme.breakpoints.up('sm'));
    
    let nItems = null;
    if(showLinks){
        nItems = (
            <NavItems>
                <NavigationItem link="/prs">PRs</NavigationItem>
                <NavigationItem link="/movements">Movimientos</NavigationItem>
            </NavItems>
        );
    }
    return (
        <Aux>
            {nItems}
        </Aux>
    )
}
export default NavigationItems;