import { StyledHome } from '../UI/Styling/Home-styling';

const Target = (props) => {
    return(
        <StyledHome 
            backgroundColor="#000000"
            fontColor="#FFFFFF">
            <h2>¿El Objetivo?</h2>
            <p>El objetivo de cada uno de los ejercicios es levantar el máximo peso durante su ejecución 
                    siempre y cuando se tenga una postura correcta y sea completa. En las competiciones 
                    el levantamiento válido más pesado es el que cuenta para cada prueba y el ganador es el que consiga mejor puntuación 
                    por cada uno de los movimientos en base a los tres intentos.</p>
        </StyledHome>
    );
}

export default Target;
