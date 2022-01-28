import styled from 'styled-components';

export const StyledInformation = styled.div`
    padding: 10vh 15vw;
    background: ${props => props.backgroundColor};
    color: #FFFFFF;
    text-align: center;
    & h2 {
        font-size: 2.25rem;
        font-weight: 600;
        margin-bottom: 35px;
    }
    & p {
        font-size: 1.25rem;
        margin-bottom: 30px;
    }
`;

export const StyledMovements = styled.div`
    padding: 60px;
    & .title {
        text-align: center;
        margin-bottom: 40px;
        width: 100%;
    }
    & .title h2 {
        font-size: 2.25rem;
        font-weight: 600;
        color: #1E1E1E;
    }
    & .title span {
        display: block;
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 1rem;
        color: #666;
        letter-spacing: 0.125rem;
    }
    & .movement {
        margin-bottom: 30px;
    }
    & .movement img {
        width: 90%;
        height: 14rem;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 0 30px;
    }
    @media (max-width: 767px) {
        & .movement {
            margin-bottom: 0px;
        }
    }
    & .movement .definition {
        background-color: #FFF;
        padding: 30px;
    }
    & .movement .definition h3 {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.25px;
        margin-bottom: 10px;
    }
    & .movement .definition span {
        color: #FF0000;
        font-weight: 600;
        font-size: 0.9rem;
        display: block;
        margin-bottom: 15px;
    }
    & .movement .definition p {
        margin-bottom: 10px;
    }
`;

export const StyledTitlePage = styled.div`
    background-image: url(${props => props.imageBackground});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 45vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    & h2 {
        color: #FFFFFF;
        font-size: 2.5rem;
        text-align: center;
    }
    & h3 {
        color: #FFFFFF;
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const StyledBlock = styled.div`
    padding: 60px;
`;
