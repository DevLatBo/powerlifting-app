import { StyledSocialNetworks } from '../../UI/Block/block-styling';

const SocialNetwork = (props) => {
    return (
        <StyledSocialNetworks>
            <a className="link" href="https://www.facebook.com/DevLatBo">
                <img src={`assets/images/facebook.png`} alt="Facebook" />
            </a>
            <a className="link" href="https://twitter.com/DevLatBo">
                <img src={`assets/images/twitter.png`} alt="Twitter" />
            </a>
            <a className="link" href="https://www.youtube.com/DevLatBo">
                <img src={`assets/images/youtube.png`} alt="Youtube" />
            </a>
        </StyledSocialNetworks>
    )
};

export default SocialNetwork;