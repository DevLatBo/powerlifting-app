import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Modal = (props) => {
    return (
        <div>
            <Dialog
                open={props.show ? true : false}
                onClose={props.modalClosed}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        { props.children }
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Modal;