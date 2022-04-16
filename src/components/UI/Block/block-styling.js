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