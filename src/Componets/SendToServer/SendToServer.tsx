import React, { ComponentType, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { w3cwebsocket as WebSocket } from 'websocket'
import {
    Paper,
    Slider,
    Input,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core';
import { useStyles } from './SendToServer.styles';
// Picker
interface FormItems { slider: number }
const validate = (values: Partial<FormItems>) => {
    const errors: Partial<FormItems> = {};

    // if (!values.firstName) {
    //     errors.firstName = 'Required';
    // }
    // if (!values.lastName) {
    //     errors.lastName = 'Required';
    // }
    // if (!values.email) {
    //     errors.email = 'Required';
    // }
    return errors;
};
interface SendToServerProps { name: string; link: string; query: string;cords:any;setCords:any }
const SendToServer: ComponentType<SendToServerProps> = (props) => {
    enum Colors {
        defult = 0,
        green,
        red,
    }
    const classes = useStyles();
    const [value, setValue] = React.useState<number | string | Array<number | string>>(30);
    const [buttonColor, setButtonColor] = useState(0)

    const onSubmit = async (values: any) => {
        try {
            console.log(values);
            const response = await fetch("http://192.168.1.15:8090/" + props.link + props.query + value);
            const data = await response.json();
            const realy_json = JSON.parse(data)
            console.log(data);
            console.log(Date.parse(realy_json[0].x));
            for (let cord of realy_json) {
                addXY({ x: Date.parse(cord.x), y: cord.y });
            }
            setButtonColor(Colors.green)
        }
        catch (Error) {
            setButtonColor(Colors.red)
        }
        console.log("there was a send to the server ");
    }
    const addXY = async (xy: { x: number; y: number; }) => {
        props.setCords((oldArray:any)=> [...oldArray, xy]);
    };
    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setValue(newValue);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    const buttonClassChange = () => {
        if (buttonColor === 0) return classes.null
        if (buttonColor === 1) return classes.sentButton
        else return classes.errorButton
    }
    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    return (
        <div className={classes.firstDiv}>
            <Form
                onSubmit={onSubmit}
                initialValues={value}
                validate={validate}
                render={({ handleSubmit }) => (

                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 16 }}>
                            <Typography variant="h5">
                                {props.name}
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                    <Slider
                                        value={typeof value === 'number' ? value : 0}
                                        onChange={handleSliderChange}
                                        aria-labelledby="input-slider"
                                    />
                                </Grid>
                                <Grid item>
                                    <Input
                                        className={classes.input}
                                        value={value}
                                        margin="dense"
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        inputProps={{
                                            step: 10,
                                            min: 0,
                                            max: 100,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            {/* <IconButton onClick={() => setButtonColor(!buttonColor)} className={buttonColor ? classes.sentButton : classes.null} type='submit' color="primary"> */}
                            <IconButton
                                className=
                                {(buttonColor === Colors.defult) ? classes.null
                                    : (buttonColor === Colors.green) ? classes.sentButton
                                        : classes.errorButton}
                                type='submit'
                                color="primary">
                                {/* <IconButton onClick={(event) => console.log(event)} type='submit' color="primary"> */}
                                send
                        </IconButton>
                        </Paper>
                    </form>
                )}
            />
        </div>
    );
}
export default SendToServer;