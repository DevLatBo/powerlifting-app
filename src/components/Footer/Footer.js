import { StyledFooter } from '../UI/Styling/Section/Footer-styling';
import SocialNetworks from './SocialNetworks/SocialNetworks';

const Footer = (props) => {

    const references = [
        {
            'url': 'https://www.facebook.com/DevLatBo',
            'imagePath': 'assets/images/facebook.png',
            'name': 'Facebook'
        },
        {
            'url': 'https://twitter.com/DevLatBo',
            'imagePath': 'assets/images/twitter.png',
            'name': 'Twitter'
        },
        {
            'url': 'https://www.youtube.com/DevLatBo',
            'imagePath': 'assets/images/youtube.png',
            'name': 'Youtube'
        },
    ];

    return (
        <StyledFooter>
            <SocialNetworks references={references}/>
        </StyledFooter>
    );
}

export default Footer;