import React, { Fragment, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableBody from '@mui/material/TableBody';
import Grid from "@material-ui/core/Grid";

import { StyledBlock } from '../UI/Styling/General-styling';
import Title  from '../UI/Title/Title';
import HistoryItems from './HistoryItems/HistoryItems';
import { fetchHistoryData } from '../../store/mov-actions';
import Spinner from '../UI/Loader/Loader';
import Alert from '../UI/Alert/Alert';
import TableData from '../UI/TableData/TableData';
import { uiActions } from '../../store/ui-slice';

const History = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.ui.loaderIsVisible);
    const alertMessage = useSelector((state) => state.ui.alertMessage);
    const history = useSelector((state) => state.history.data);
    const liftTable = useSelector((state) => state.ui.liftTable);
    const dataSize = history.length;
    /*console.log(isLoading);
    console.log(alertMessage);
    console.log(history);
    console.log(liftTable);
    console.log("-------------");*/

    useEffect(() => {
        dispatch(fetchHistoryData());
    }, [dispatch]);
    
    // ComponentWillUnmount
    useEffect(() => {
        return() => {
            dispatch(uiActions.reset());
        }
    },[dispatch])

    const changePageTableHandler = useCallback((event, newPage) => {
        dispatch(uiActions.setPage({page: newPage}));
    }, [dispatch]);

    const loader = isLoading && <Spinner size="lg"/>
    
    const message = alertMessage && <Alert type={alertMessage.type} 
        className={alertMessage.class}>
            {alertMessage.message}
        </Alert>;

    const table =  Object.keys(history).length !== 0 && (
        <TableData
            onPageChange={changePageTableHandler}
            size={dataSize}
            pageConfig={liftTable}
        >
            <TableBody>
                <HistoryItems 
                    pageConfig={liftTable}
                    recordItems={history}
                />
            </TableBody>
        </TableData>
    );
     
    return (
        <Fragment>
            <Title 
                mainTitle="Historial"
                description="Ultimos levantamientos."
            />
            <StyledBlock>
                <Grid container 
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                    {message}
                    {table}
                    {loader}
                </Grid>
            </StyledBlock>
        </Fragment>
    )
}

export default React.memo(History);