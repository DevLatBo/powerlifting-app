import styled from 'styled-components';

import Section from '../../UI/Section/Section';

const StyledTarget = styled.div`
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

const Target = (props) => {
    return(
        <Section type="target">
            <StyledTarget>
                <h2>¿El Objetivo?</h2>
                <p>El objetivo de cada uno de los ejercicios es levantar el máximo peso durante su ejecución 
                        siempre y cuando se tenga una postura correcta y sea completa. En las competiciones 
                        el levantamiento válido más pesado es el que cuenta para cada prueba y el ganador es el que consiga mejor puntuación 
                        por cada uno de los movimientos en base a los tres intentos.</p>
            </StyledTarget>
        </Section>
    );
}

export default Target;