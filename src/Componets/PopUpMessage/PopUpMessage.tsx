import React, { ComponentType, useCallback, useEffect, useRef, useState } from "react"
import { Grid, Slide, SlideProps, Snackbar, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

interface PopUpMessageProps { severity: "error" | "success" | "info" | "warning" | undefined; message: string; open: any; setOpen: any }
const PopUpMessage: ComponentType<PopUpMessageProps> = (props) => {
 const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);
type TransitionProps = Omit<SlideProps, 'direction'>;
function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}
    const handleClick = (Transition: React.ComponentType<TransitionProps>) => {
    setTransition(() => Transition);

        props.setOpen(true);
    };
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