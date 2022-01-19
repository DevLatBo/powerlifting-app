import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

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
