import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { obtainMovementName } from '../../../../shared/utility';
import MovementItemForm from './MovementItemForm';
import { StyledTitlePage, StyledBlock } from '../../../UI/Styling/General-styling';
import Alert from '../../../UI/Alert/Alert';
import { addLifting, editLifting } from '../../../../store/mov-actions';
import { uiActions } from '../../../../store/ui-slice';

const MovementItem = (props) => {
    const alert = useSelector((state) => state.ui.alertMessage);
    const dispatch = useDispatch();
    let { movement, movementId } = useParams();
    let isEdit = false;
    if(movementId !== undefined) {
        isEdit = "true";
    }
    const movementName = obtainMovementName(movement);

    const actionLiftHandler =  async (liftData) => {
        if(!isEdit)
            dispatch(addLifting(movement, liftData));
        else
            dispatch(editLifting(movementId, movement, liftData));
    };

    const clearAlert = () => {
        dispatch(uiActions.clearAlert());
    }
    
    return (
        <Fragment>
            <StyledTitlePage imageBackground={`/assets/images/title-background.jpg`}>
                <h2>{movementName}</h2>
                <h3>Ingrese número de repeticiones y peso a levantar.</h3>
            </StyledTitlePage>
            <StyledBlock>
                { alert && (
                        <Alert type={alert.type} 
                            className={alert.class}
                            onClose={clearAlert}>
                            {alert.message}
                        </Alert>
                )}
                <MovementItemForm 
                    onActionLift={actionLiftHandler}
                    edit={isEdit} />
            </StyledBlock>
        </Fragment>
    )
};
export default MovementItem;
