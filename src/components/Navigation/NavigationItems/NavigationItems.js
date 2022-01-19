import React, {Fragment} from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';

import { NavItems } from './NavigationItems-styling';
import NavigationItem from './NavigationItem/NavigationItem';

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
        <Fragment>
            {nItems}
        </Fragment>
    )
}
export default NavigationItems;