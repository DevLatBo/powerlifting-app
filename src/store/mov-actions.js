import { liftActions } from "./lift-slice";
import { movActions } from "./mov-slice";
import { uiActions } from "./ui-slice";

export const addLifting = (movement, lift) => {
    return async(dispatch) => {
        const sendRequest = async () => {
            await fetch("https://powerlifting-react-default-rtdb.firebaseio.com/lifts/"+movement+".json", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    lift
                ),
            });
        }
        try {
            dispatch(liftActions.setSubmitOn());
            dispatch(uiActions.showAlert({
                type: "info",
                class: "form-alert",
                message: "Registrando levantamiento...",
            }));
            await sendRequest();
            dispatch(liftActions.confirmSuccessFul);
            dispatch(uiActions.showAlert({
                type: "success",
                class: "form-alert",
                message: "Levantamiento registrado con exito!",
            }));

        }catch(error) {
            dispatch(uiActions.showAlert({
                type: "error",
                class: "form-alert",
                message: error,
            }));
        }
    };
};

export const fetchMovementsData = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            dispatch(uiActions.clearError());
            dispatch(uiActions.showLoader());
            const response = await fetch(
                'https://powerlifting-react-default-rtdb.firebaseio.com//movements.json'
              );
        
              if (!response.ok) {
                throw new Error('Could not fetch cart data!');
              }
        
              const data = await response.json();
              return data;
        }
        try {
            const movementsData = await fetchData();
            dispatch(
                movActions.replaceMovementsData({ movements: movementsData })
            );

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

export const fetchRecordByMovement = (movement) => {
    return async(dispatch) => {
        const fetchData = async() => {
            const response = await fetch(
                "https://powerlifting-react-default-rtdb.firebaseio.com/lifts/"+movement+".json");
            if(!response.ok) {
                throw new Error("Something wrong happened!");
            }
            const data = await response.json();
            
            return data;
        }
        try {
            const recordsData = await fetchData();
            dispatch(
                liftActions.getMaxPR({liftsData: recordsData})
            );

        }catch(error) {
            dispatch(uiActions.setError({error: error.message}));
            dispatch(uiActions.showAlert({
                type: 'error',
                class: 'error',
                message: error.message,
            }));
        }
    }
};

export const fetchLiftHistory = () => {
    return async(dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://powerlifting-react-default-rtdb.firebaseio.com/lifts.json"
            );
            if(!response.ok) {
                throw new Error("Something wrong happened!");
            }
            const data = await response.json();
            
            return data;
        }
        try {
            const historyData = await fetchData();
            dispatch(
                liftActions.getLastLifts({history: historyData})
            );
        } catch(error) {
            dispatch(uiActions.setError({error: error.message}));
            dispatch(uiActions.showAlert({
                type: 'error',
                class: 'error',
                message: error.message,
            }));
        }
    }
}