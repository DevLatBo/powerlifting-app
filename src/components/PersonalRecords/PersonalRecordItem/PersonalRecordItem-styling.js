import Box from '@mui/material/Box';
import styled from "styled-components";

export const StyledBox = styled(Box)`
    width: 17rem;
    margin: 20px auto;
    .cardMov {
        border-radius: 25px;
        background-color: #FF0000;
        color: #FFFFFF;
    }
    .cardMov .subtitleMov {
        font-weight: bold;
    }
    .cardMov .recordMov {
        margin-top: 15px;
        text-align: center;
        font-size: 2.5rem;
    }
    @media (min-width: 320px) and (max-width: 767px) {
        width: 15rem;
        .cardMov .recordMov {
            font-size: 2rem;
        }
    }
`;
