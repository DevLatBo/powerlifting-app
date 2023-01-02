import React from 'react';
import { Link } from 'react-router-dom';

import { StyledGrid } from '../../UI/Styling/Section/Movements-styling';

const MovementLink = (props) => {
    return(
        <StyledGrid xs={12} md={4} item={true}>
            <Link className="movement"
                to={"movements/"+props.route}>
                    {props.name}
            </Link>
        </StyledGrid>
    );
}

export default React.memo(MovementLink);
