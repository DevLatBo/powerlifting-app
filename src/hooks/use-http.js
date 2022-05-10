import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const useHttp = () => {
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const error = useSelector((state) => state.ui.error);
    const dispatch = useDispatch();
    const sendRequest = useCallback( async (requestConfig, applyData) => {
        dispatch(uiActions.showLoader());
        dispatch(uiActions.clearError());
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });
            if(!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            applyData(data);
        }catch(error) {
            dispatch(uiActions.setError({error: error.message}));
        }
        dispatch(uiActions.hideLoader());
    }, [dispatch]);

    return {
        isLoading,
        error,
        sendRequest
    };
}

export default useHttp;
