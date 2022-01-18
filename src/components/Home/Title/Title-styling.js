import styled from 'styled-components';

export const StyledMainTitleSection = styled.div`
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
