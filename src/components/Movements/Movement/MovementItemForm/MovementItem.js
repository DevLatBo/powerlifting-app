import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { obtainMovementName } from '../../../../shared/utility';
import MovementItemForm from './MovementItemForm';
import { StyledTitlePage, StyledBlock } from '../../../UI/Styling/General-styling';
import Alert from '../../../UI/Alert/Alert';
import { addLifting } from '../../../../store/mov-actions';
import { uiActions } from '../../../../store/ui-slice';
import Popup from '../../../UI/Popup/Popup';

const MovementItem = (props) => {
    const alert = useSelector((state) => state.ui.alertMessage);
    const dispatch = useDispatch();
    let { movement } = useParams();
    const movementName = obtainMovementName(movement);

    useEffect(() => {
        let timer = null;
        timer = setTimeout(() => {
            dispatch(uiActions.removeAlert());
        }, 1500);
    
        return () => {
            clearTimeout(timer);
        }
    }, [alert, dispatch]);

    const addLiftHandler =  async (liftData) => {
        dispatch(addLifting(movement, liftData));
    };

    const clearAlert = () => {
        dispatch(uiActions.removeAlert());
    }
    
    return (
        <Fragment>
            <StyledTitlePage imageBackground={`/assets/images/title-background.jpg`}>
                <h2>{movementName}</h2>
                <h3>Ingrese número de repeticiones y peso a levantar.</h3>
            </StyledTitlePage>
            <StyledBlock>
                <Popup/>
                { alert && (
                        <Alert type={alert.type} 
                            className={alert.class}
                            onClose={clearAlert}>
                            {alert.message}
                        </Alert>
                )}
                <MovementItemForm 
                    movement={movement} 
                    onAddLift={addLiftHandler} />
            </StyledBlock>
        </Fragment>
    )
};
export default MovementItem;
