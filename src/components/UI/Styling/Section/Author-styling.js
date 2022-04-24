import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";

export const GridStyled = styled(Grid)`
    padding: 60px;
    .photo-profile {
        text-align: center;
        padding: 10px;  
    }
    .photo-profile img {
        border-radius: 25px;
        width: 40vw;
    }
    .description-profile {
        padding: 10px;
        text-align: justify;
    }
    .description-profile p {
        font-size: 1.3rem;
    }
    .images-profile {
        padding; 10px;
        margin: 0 40px 0 40px;
        text-align: center;
    }
    .images-profile img {
        width: 15vw;
        padding: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        .images-profile img {
            width: 20vw;
        }
    }
    @media (min-width: 481px) and (max-width: 1024px) {
        .images-profile img {
            width: 16vw;
        }
    }
`;