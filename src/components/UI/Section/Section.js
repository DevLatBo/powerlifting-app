import styled from 'styled-components';

const SectionStyled = styled.div`
    padding: 70px;
`;
const Section = (props) => {
    return (
        <SectionStyled>
            {props.children}
        </SectionStyled>
    )

}
export default Section;