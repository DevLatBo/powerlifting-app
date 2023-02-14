import { historyActions } from "./history-slice";
import { movActions } from "./mov-slice";
import { uiActions } from "./ui-slice";
import { liftActions } from "./lift-slice";

const FIREBASE_DOMAIN = "https://powerlifting-react-default-rtdb.firebaseio.com/";

export const addLifting = (movement, lift) => {
    return async(dispatch) => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                lift
            ),
        };
        await fetch(
            `${FIREBASE_DOMAIN}/lifts/${movement}/.json`,
            options
        ).catch( (error) => {
            dispatch(uiActions.showAlert({
                type: "error",
                class: "form-alert",
                message: error.message,
            }));
        }).finally( () => {
            dispatch(uiActions.showAlert({
                type: "success",
                class: "form-alert",
                message: "Levantamiento registrado con exito.",
            }));
        });
    };
};

export const editLifting = (id, movement, lift) => {
    return async(dispatch) => {
        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'token-value'
            },
            body: JSON.stringify(
                lift
            ),
        };
        await fetch(
            `${FIREBASE_DOMAIN}/lifts/${movement}/${id}.json`, 
            options
        ).catch( (error) => {
            dispatch(uiActions.showAlert({
                type: "error",
                class: "form-alert",
                message: error.message,
            }));
        }).finally( () => {
            dispatch(uiActions.showAlert({
                type: "success",
                class: "form-alert",
                message: "Levantamiento actualizado con exito.",
            }));
        });
    }
}

export const removeLifting = (id, movement) => {
    return async(dispatch) => {
        const options = {
            method: "DELETE",
        };

        await fetch(
            `${FIREBASE_DOMAIN}/lifts/${movement}/${id}.json`,
            options
        ).then( () => {
            dispatch(historyActions.removeHistoryItem({ liftId: id }));
        }).catch( (error) => {
            dispatch(uiActions.showAlert({
                type: "error",
                class: "form-alert",
                message: error.message
            }));
        });
        
    }
}

export const fetchMovementsData = () => {
    return async(dispatch) => {
        dispatch(uiActions.showLoader());
        await fetch(
            `${FIREBASE_DOMAIN}/movements.json`
        ).then( (response) => {
            if(!response.ok) {
                throw new Error("Something went wrong by getting movements data.");
            }
            return response.json();
        }).then( (data) => {
            const movementsData = data;
            dispatch(movActions.replaceMovementsData({ movements: movementsData }));
        }).catch( (error) => {
            dispatch(uiActions.showAlert({
                type: 'error',
                class: 'error',
                message: error.message,
            }));
        }).finally( () => {
            dispatch(uiActions.hideLoader());
        });
    }
};

export const fetchHistoryData = () => {
    return async(dispatch) => {
        dispatch(uiActions.showLoader());
        await fetch(
            `${FIREBASE_DOMAIN}/lifts.json`
        ).then( (response) => {
            if(!response.ok) {
                throw new Error("Something went wrong by getting history data.");
            }
            return response.json();
        }).then((data) => {
            const liftData = data;
            let flag = true;
            if(!liftData) {
                flag = false;
                dispatch(uiActions.showAlert({
                    type: 'warning',
                    class: 'warning',
                    message: 'No hay levantamientos registrados.'
                }));
            }
            return Promise.all([flag, liftData]);
        }).then( (data) => {
            const [flag, liftsData] = data;
            if(flag){
                dispatch(historyActions.getAllLifts({ lifts: liftsData }));
            }
        }).catch(error => {
            dispatch(uiActions.setError({error: error.message}));
            dispatch(uiActions.showAlert({
                type: 'error',
                class: 'error',
                message: error.message,
            }));
        }).finally(() => {
            dispatch(uiActions.hideLoader());
        });
    }
}

export const fetchPRsData = () => {
    return async(dispatch) => {
        dispatch(uiActions.showLoader());
        await Promise.all([
            fetch(`${FIREBASE_DOMAIN}/lifts.json`),
            fetch(`${FIREBASE_DOMAIN}/movements.json`)
        ]).then(([liftsResponse, movementsResponse]) =>  {
            if(!liftsResponse.ok || !movementsResponse.ok) {
                throw new Error("Something wrong happened by getting PRs Data.");
            }
            return Promise.all([liftsResponse.json(), movementsResponse.json()]);
        }).then((information) => {
            const [lifts, movements] = information;
            dispatch(historyActions.getPRs({ lifts: lifts, movements: movements }));
        }).catch( (error) => {
            dispatch(uiActions.setError({error: error.message}));
            dispatch(uiActions.showAlert({
                type: 'error',
                class: 'error',
                message: error.message,
            }));
        }).finally( () => {
            dispatch(uiActions.hideLoader());
        });
    }
}

export const fetchLiftById = (movement, liftId) => {
    return async(dispatch) => {
        await fetch(
            `${FIREBASE_DOMAIN}/lifts/${movement}/${liftId}.json`
        ).then( (response) => {
            return response.json();
        }).then( (data) => {
            const liftData = data;
            dispatch(liftActions.setLiftData({lift: liftData}));
        }).catch( (error) => {
            dispatch(uiActions.setError({error: error.message}));
            dispatch(uiActions.showAlert({
                type: 'error',
                class: 'error',
                message: error.message,
            }));
        });
    }
}