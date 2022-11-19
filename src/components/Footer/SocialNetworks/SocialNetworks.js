import { Link } from 'react-router-dom';

const SocialNetworks = (props) => {
    const urls = props.references.map((reference) => {
            return (
                <Link className="link" to={{ pathname: reference.url}} target="_blank" key={reference.name}>
                    <img src={reference.imagePath} alt={reference.name} />
                </Link>
            )
        }
    )
    return urls;
}

export default SocialNetworks;