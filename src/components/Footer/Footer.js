import { StyledFooter } from '../UI/Styling/Section/Footer-styling';

const Footer = (props) => {
    return (
        <StyledFooter>
            <a className="link" href="https://www.facebook.com/DevLatBo">
                <img src={`assets/images/facebook.png`} alt="Facebook" />
            </a>
            <a className="link" href="https://twitter.com/DevLatBo">
                <img src={`assets/images/twitter.png`} alt="Twitter" />
            </a>
            <a className="link" href="https://www.youtube.com/DevLatBo">
                <img src={`assets/images/youtube.png`} alt="Youtube" />
            </a>
        </StyledFooter>
    );
}

export default Footer;