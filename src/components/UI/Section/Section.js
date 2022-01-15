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
                    padding: 60px;
                    background-image: url(${props => props.background});
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 100%;
                    height: 40%;
                    display:flex;
                    flex-flow:column;
                    align-items: center;
                    justify-content: center;
                    & h2 {
                        color: #FFFFFF;
                        font-size: 2.5rem;
                        text-align: center;
                    }
                    & h3 {
                        color: #FFFFFF;
                        font-size: 1.5rem;
                        text-align: center;
                    }
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
        <SectionStyled $type={props.type} background={props.imageBackground}>
            {props.children}
        </SectionStyled>
    )

}
export default Section;