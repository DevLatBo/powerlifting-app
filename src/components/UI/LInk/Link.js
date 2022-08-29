import { StyledLink } from "./Link-styling";

import EditIcon from '@mui/icons-material/Edit';

const Link = (props) => {
    let icon = null;
    if(props.icon === "edit") {
        icon = <EditIcon/>;
    }
    
    return (
        <StyledLink 
            className={props.class}
            to={props.route}>{icon}</StyledLink>
    );
};

export default Link;