import styled from 'styled-components';

const Spinner = styled.img`
    margin: 0 auto;
`;
const Loader = (props) => {
    return (
        <Spinner src={`assets/gifs/spinner_${props.size}.gif`} 
            alt="Cargando..." />
    );

}

export default Loader;