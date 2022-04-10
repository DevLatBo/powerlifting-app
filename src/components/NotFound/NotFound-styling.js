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
    text-align: justify;
    h2 {
        font-size: 3rem;
    }
    p {
        font-size: 2rem;
    }
`;