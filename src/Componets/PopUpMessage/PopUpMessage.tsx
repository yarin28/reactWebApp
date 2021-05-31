import React, { ComponentType} from "react"
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

interface PopUpMessageProps { severity: "error" | "success" | "info" | "warning" | undefined; message: string; open: any; setOpen: any }
/**
 * @brief this is the alert component, the web app uses it to notify the user
 * about events behind the users ability to see like the server sending errors
 * or approvals or the server rejecting the password of the user because its
 * incorrect. 
 * @param open  get access to the open boolean parameter of the callee, the alert will update on changeling this variable.
 * @pram setOpen change the state if the boolean open parameter of the callee.
 * @param severity the type of alert
 * @param message the message to be displayed
 */
const PopUpMessage: ComponentType<PopUpMessageProps> = (props) => {
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setOpen(false);
    };
    return (
        <>
            <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert  variant="filled" onClose={handleClose} severity={props.severity}>
                    {props.message}
                </Alert>
            </Snackbar>
        </>
    )
}
export default PopUpMessage;