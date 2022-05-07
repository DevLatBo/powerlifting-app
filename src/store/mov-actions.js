import { uiActions } from "./ui-slice";

export const addLifting = (movement, lift) => {
    return async(dispatch) => {
        dispatch(uiActions.showAlert({
            type: "info",
            class: "form-alert",
            message: "Registrando levantamiento...",
        }));
        
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
            await sendRequest();

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