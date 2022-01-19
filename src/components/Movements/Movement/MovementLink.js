import { Link } from 'react-router-dom';

import { GridStyled } from './MovementLink-styling';

const MovementLink = (props) => {
    return(
        <GridStyled xs={12} md={4} item={true}>
            <Link className="movement"
                to={"movements/"+props.route}>
                    {props.name}
            </Link>
        </GridStyled>
    );
}

export default MovementLink;
