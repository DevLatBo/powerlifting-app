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
                'https://powerlifting-react-default-rtdb.firebaseio.com/movements.json'
              );
        
              if (!response.ok) {
                throw new Error('Could not fetch cart data!');
              }
        
              const data = await response.json();
              return data;
        }
        try {
            const movementsData = await fetchData();
            dispatch(uiActions.hideLoader());
            dispatch(
                movActions.replaceMovementsData({ movements: movementsData })
            );

        } catch(error) {
            dispatch(uiActions.showAlert({
                status: 'error',
                class: 'error',
                message: error,
            }));
        }
    }
};