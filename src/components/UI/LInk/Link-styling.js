import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    &.edit-lifting {
        background-color: #0000FF;
        padding: 0px;
        margin: 5px;
        color: #FFFFFF;
        border-radius: 10px;
        display: inline-block;
    }
    &.edit-lifting svg{
        padding-top: 5px;
    }
    @media (min-width: 768px) {
        &.edit-lifting svg{
            font-size: 2rem;
        }
    }
    @media (max-width: 768px){
        &.edit-lifting svg{
            font-size: 1.5rem;
        }
    }
`;