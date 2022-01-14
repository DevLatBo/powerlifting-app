import styled, {css} from 'styled-components';

const SectionStyled = styled.div`
    ${(props) => {
        switch(props.$type) {
            case "definition":
                return css`
                    padding: 60px;
                    background: #FF0000;
                    color: #FFFFFF;
                    text-align: center;`;
            case "title-page":
                return css`
                    background-image: url('assets/images/title-background.jpg');
                    color: #FFFFFF;
                    `;
            default:
                return css`
                    padding: 60px;
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