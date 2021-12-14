import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavItem = styled.li`
    margin-left: 20px;
    float: left;
`;
const useStyles = makeStyles({
    Item: {
        fontSize: '17px',
        display: 'block',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none'
    }
});
const NavigationItem = (props) => {
    const classes = useStyles();
    return (
        <NavItem>
            <NavLink 
                className={classes.Item}
                to = {props.link}
                exact = {props.exact}>
                    {props.children}
            </NavLink>
        </NavItem>
    )
}

export default NavigationItem;