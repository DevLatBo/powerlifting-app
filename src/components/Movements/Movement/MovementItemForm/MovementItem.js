import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { obtainMovementName } from '../../../../shared/utility';
import MovementItemForm from './MovementItemForm';
import { StyledBlock } from '../../../UI/Styling/General-styling';
import Title from '../../../UI/Title/Title';
import Alert from '../../../UI/Alert/Alert';
import { addLifting, editLifting, fetchLiftById } from '../../../../store/mov-actions';
import { uiActions } from '../../../../store/ui-slice';

const MovementItem = (props) => {
    const alert = useSelector((state) => state.ui.alertMessage);
    const dispatch = useDispatch();
    let { movement, movementId } = useParams();
    let isEdit = false;
    if(movementId !== undefined) {
        isEdit = true;
    }
    const movementName = obtainMovementName(movement);

    useEffect(() => {
        if(isEdit)
            dispatch(fetchLiftById(movement,movementId));
    }, [dispatch, isEdit, movement, movementId])

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
            <Title 
                mainTitle={movementName}
                description="Ingrese número de repeticiones y peso a levantar."
            />
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
                    isEdit={isEdit} />
            </StyledBlock>
        </Fragment>
    )
};
export default MovementItem;
