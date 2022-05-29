import { liftActions } from "./lift-slice";
import { movActions } from "./mov-slice";
import { uiActions } from "./ui-slice";

const FIREBASE_DOMAIN = "https://powerlifting-react-default-rtdb.firebaseio.com/";

export const addLifting = (movement, lift) => {
    return async(dispatch) => {
        dispatch(liftActions.setSubmitOn());
        dispatch(uiActions.showAlert({
            type: "info",
            class: "form-alert",
            message: "Registrando levantamiento...",
        }));
        const sendRequest = async () => {
            const response = await fetch(`${FIREBASE_DOMAIN}/lifts/${movement}/.json`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    lift
                ),
            });
            if(!response.ok) {
                throw new Error('Sending lift data failed');
            }
        };
        try {
            await sendRequest();
            dispatch(liftActions.confirmSuccessfull());
            dispatch(uiActions.clearAlert());
            dispatch(uiActions.showPopup({
                title: "Levantamiento",
                message: "Levantamiento registrado con exito!",
            }));

        }catch(error) {
            dispatch(uiActions.showAlert({
                type: "error",
                class: "form-alert",
                message: error.message,
            }));
        }
    };
};

export const fetchMovementsData = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const response = await fetch(
                `${FIREBASE_DOMAIN}/movements.json`
              );
        
              if (!response.ok) {
                throw new Error('Could not fetch movements data!');
              }
        
              const data = await response.json();
              return data;
        }
        try {
            dispatch(movActions.cleanMovementsData());
            dispatch(uiActions.clearAlert());
            dispatch(uiActions.showLoader());
            const movementsData = await fetchData();
            dispatch(movActions.replaceMovementsData({ movements: movementsData }));

        } catch(error) {
            dispatch(uiActions.setError({error: error.message}));
            dispatch(uiActions.showAlert({
                type: 'error',
                class: 'error',
                message: error.message,
            }));
        }
        dispatch(uiActions.hideLoader());
    }
};

export const fetchLiftsData = (request) => {
    return async(dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `${FIREBASE_DOMAIN}/lifts.json`
            );
            if(!response.ok) {
                throw new Error("Something wrong happened!");
            }
            const data = await response.json();
            
            return data;
        }
        try {
            dispatch(liftActions.clearHistory());
            dispatch(liftActions.clearPRs());
            dispatch(uiActions.clearError());
            dispatch(uiActions.showLoader());
            const liftsData = await fetchData();
            switch(request) {
                case "lastLifts": 
                    dispatch(liftActions.getLastLifts({ lifts: liftsData }));
                    break;
                case "PRs":
                    dispatch(liftActions.getPRs({ lifts: liftsData }))
                    break;
                default:
                    break;
            }
        } catch(error) {
            dispatch(uiActions.setError({error: error.message}));
            dispatch(uiActions.showAlert({
                type: 'error',
                class: 'error',
                message: error.message,
            }));
        }
        dispatch(uiActions.hideLoader());
    }
}