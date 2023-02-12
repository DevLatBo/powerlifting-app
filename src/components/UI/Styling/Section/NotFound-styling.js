import styled from 'styled-components';

export const NotFoundImg = styled.div`
    padding: 60px;
    text-align: center;
    img {
        margin: 10px;
        width: 30vw;
    }
    @media (max-width: 768px) {
        img {
            width: 50vw;
        }
    }
`;

export const NotFoundMsg = styled.div`
    padding: 60px;
    h2 {
        font-size: 2.5rem;
    }
    p {
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        text-align: center;
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
    }
`;