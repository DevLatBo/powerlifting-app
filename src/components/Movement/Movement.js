import {React} from 'react';
import { useParams } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import WeightData from './WeightData/WeightData';

const useStyles = makeStyles({
    Movement: {
        '& h1':{
            textAlign:'center',
            fontSize:'50px',
        }
    }
});
const Movement = (props) => {
    const classes = useStyles();
    let { movement } = useParams();
    return (
        <div className={classes.Movement}>
            <h1>{movement}</h1>
            <WeightData/>
        </div>
    )
};
export default Movement;