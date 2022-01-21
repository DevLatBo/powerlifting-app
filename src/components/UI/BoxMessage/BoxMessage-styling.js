import styled from 'styled-components';

export const Box = styled.div`
    margin: 0 auto;
    & .error {
        font-size: 1.75rem;
    }
    & .error .MuiAlert-icon {
        font-size: 2.125rem;
    }
    & .form-alert {
        width: 35vw;
        margin: 0 auto;
        @media (max-width: 768px) {
            width: 60vw;
        }
    }
`;
