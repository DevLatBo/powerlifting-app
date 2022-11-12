import { ImagesStyled } from "../../../UI/Styling/Section/Author-styling";

const Images = (props) => {
    const images = props.files.map((file) => {
        return (<img src={file.path} alt={file.name} key={file.name} />)
    });
    return (
        <ImagesStyled>
            {images}
        </ImagesStyled>
    )
};

export default Images;