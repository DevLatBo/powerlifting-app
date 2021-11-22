import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const MovementLink = (props) => {
    const Option = styled(Grid)`
        display: inherit;
        & .movement {
            background: linear-gradient(90deg, rgba(70,24,24,1) 0%, rgba(255,6,6,1) 75%);
            box-shadow: 0 5px 0 darkred;
            color: white;
            border-radius: 35px;
            margin: 20px auto;
            text-align: center;
            padding: 50px 20px;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
            cursor: pointer;
            width: 30vw;
            font-size: 1.125rem;
            font-weight: bold;
        }
        & .movement:active {
            box-shadow: none;
            top: 5px;
        }
        @media (min-width: 320px) and (max-width: 480px) {
            & .movement {
                width: 60vw;
                font-size: 1rem;
            }
        }
    `;
    return(
        <Option xs={12} md={12} item={true}>
            <Link className="movement"
                to={"movements/"+props.route}>
                    {props.name}
            </Link>
        </Option>
    );
}

export default MovementLink;