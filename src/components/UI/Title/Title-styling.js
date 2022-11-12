import styled from 'styled-components';

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