import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function CtrlAlert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Alert(props: any) {
    return (
        <div >
            <Snackbar open={props.open} autoHideDuration={4000} onClose={props.handleClose}>
                <CtrlAlert onClose={props.handleClose} severity={props.type}>
                    {props.message}
                </CtrlAlert>
            </Snackbar>
        </div>
    );
}
