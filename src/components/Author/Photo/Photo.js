import { PhotoStyled } from "../../UI/Styling/Section/Author-styling";

const Photo = (props) => {
    return (
        <PhotoStyled>
            <img src={props.image} alt="Author"/>
        </PhotoStyled>
    )
};

export default Photo;