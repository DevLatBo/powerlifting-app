import React, {Fragment} from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';

import { NavItems } from '../../../UI/Styling/General-styling';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    const theme = useTheme();
    const showLinks = useMediaQuery(theme.breakpoints.up('sm'));
    
    let nItems = null;
    if(showLinks){
        nItems = (
            <NavItems>
                <NavigationItem link="/personalrecord">Record Personales</NavigationItem>
                <NavigationItem link="/movements">Movimientos</NavigationItem>
                <NavigationItem link="/author">Autor</NavigationItem>
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