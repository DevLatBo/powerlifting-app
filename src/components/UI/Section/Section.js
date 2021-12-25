import styled, {css} from 'styled-components';

const SectionStyled = styled.div`
    ${(props) => {
        switch(props.$type) {
            case "definition":
                return css`
                    padding: 70px;
                    background: #FF0000;
                    color: #FFFFFF;
                    text-align: center;`;
            default:
                return css`
                    padding: 70px;
                `;
        }
    }}
`;
const Section = (props) => {
    return (
        <SectionStyled $type={props.type}>
            {props.children}
        </SectionStyled>
    )

}
export default Section;