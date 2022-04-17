import styled from 'styled-components';

export const StyledHome = styled.div`
    padding: 60px;
    background: ${props => props.backgroundColor};
    color: ${props => props.fontColor};
    text-align: center;
    & h2 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 35px;
    }
    & p {
        font-size: 1.5rem;
        margin-bottom: 30px;
    }
    & span {
        display: block;
        text-transform: uppercase;
        font-size: 1rem;
        color: #666;
        letter-spacing: 0.15rem;
        margin-bottom: 30px;
    }
    & .mov-title {
        margin: 0 auto;
    }
    & .img-mov {
        width: 100%;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        padding: 0 30px;
    }
    & .definition {
        background-color: #FFF;
        padding: 30px;
        text-align: justify;
    }
    & .definition h3 {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.25px;
        margin-bottom: 10px;
    }
    & .definition span {
        color: #FF0000;
        font-weight: 600;
        font-size: 0.9rem;
        display: block;
        margin-bottom: 15px;
    }
    & .definition p {
        font-size: 1.25rem;
        margin-bottom: 10px;
    }
`;

export const StyledHomeTitle = styled.div`
    text-align: center;
    background-image: url(${props => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40vh 0px 40vh 0px;
    color: #FFF;
    & h1 {
        text-transform: capitalize;
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: 0.5rem;
        margin-bottom: 18px;
    }

    & span {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.125rem;
        color: #FFF;
        display: block;
    }

    @media (max-width: 767px) {
        & h1 { 
            font-size: 1.75rem;
        }
        & span {
            font-size: 1rem;
        }
    }
`;