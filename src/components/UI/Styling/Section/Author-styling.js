import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";

export const GridStyled = styled(Grid)`
    padding: 60px;
`;

export const PhotoStyled = styled.div`
    text-align: center;
    padding: 10px;
    img {
        border-radius: 25px;
        width: 40vw;
    }
`;

export const DescriptionStyled = styled.div`
    padding: 10px;
    text-align: justify;
    p {
        font-size: 1.3rem;
    }

`;

export const ImagesStyled = styled.div`
    padding; 10px;
    margin: 0 40px 0 40px;
    text-align: center;
    img {
        width: 15vw;
        padding: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        img {
            width: 20vw;
        }
    }
    @media (min-width: 481px) and (max-width: 1024px) {
        img {
            width: 16vw;
        }
    }
`;