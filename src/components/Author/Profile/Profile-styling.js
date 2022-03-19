import styled from 'styled-components';

import Grid from "@material-ui/core/Grid";


export const GridStyled = styled(Grid)`
    .photo-profile {
        text-align: center;
        margin: 40px;
        padding: 10px;
    }
    .photo-profile img {
        border-radius: 25px;
        width: 40vw;
        height: 80vh;
    }
    .description-profile {
        padding: 10px;
        margin: 40px;
        text-align: justify;
    }
    .description-profile {
        font-size: 1.3rem;
    }
    .images-profile {
        padding; 10px;
        margin: 40px;
        text-align: center;
    }
    .images-profile img {
        width: 12vw;
        height: 25vh;
        padding: 20px;
    }
`;