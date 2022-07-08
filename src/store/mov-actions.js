import { historyActions } from "./history-slice";
import { movActions } from "./mov-slice";
import { uiActions } from "./ui-slice";

const FIREBASE_DOMAIN = "https://powerlifting-react-default-rtdb.firebaseio.com/";

export const addLifting = (movement, lift) => {
    return async(dispatch) => {
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
            dispatch(uiActions.showAlert({
                type: "success",
                class: "form-alert",
                message: "Levantamiento registrado con exito.",
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

export const removeLifting = (id, movement) => {
    return async(dispatch) => {
        const sendRequest = async() =>  {
            const response = await fetch(`${FIREBASE_DOMAIN}/lifts/${movement}/${id}.json`, {
                method: "DELETE",
            });

            if(!response.ok) {
                throw new Error('Sending lift data failed');
            }
        }

        try {
            await sendRequest();
            dispatch(historyActions.removeHistoryItem({ liftId: id }));
        }
        catch(error) {
            dispatch(uiActions.showAlert({
                type: "error",
                class: "form-alert",
                message: error.message
            }));
            console.log(error.message);
        }
    }
}

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

export const fetchHistoryData = () => {
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
            dispatch(uiActions.clearAlert());
            dispatch(uiActions.showLoader());
            const liftsData = await fetchData();
            dispatch(historyActions.getAllLifts({ lifts: liftsData }));
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

export const fetchPRsData = () => {
    return async(dispatch) => {
        const fetchData = async () => {
            const responses = await Promise.all([
                fetch(`${FIREBASE_DOMAIN}/lifts.json`),
                fetch(`${FIREBASE_DOMAIN}/movements.json`)
            ]).then(([liftsResponse, movementsResponse]) =>  {
                if(!liftsResponse.ok || !movementsResponse.ok) {
                    throw new Error("Something wrong happened!");
                }
                return Promise.all([liftsResponse.json(), movementsResponse.json()])
            });
            

            const data = responses;
            
            return data;
        }
        try {
            dispatch(uiActions.clearAlert());
            dispatch(uiActions.showLoader());
            const information = await fetchData();
            const [lifts, movements] = information;
            dispatch(historyActions.getPRs({ lifts: lifts, movements: movements }));
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