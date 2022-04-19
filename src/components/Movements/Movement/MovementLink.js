import { Link } from 'react-router-dom';

import { StyledLinks } from '../../UI/Styling/Movements-styling';

const MovementLink = (props) => {
    return(
        <StyledLinks xs={12} md={4} item={true}>
            <Link className="movement"
                to={"movements/"+props.route}>
                    {props.name}
            </Link>
        </StyledLinks>
    );
}

export default MovementLink;
