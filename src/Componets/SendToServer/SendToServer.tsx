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
interface SendToServerProps { name: string; link: string }
const SendToServer: ComponentType<SendToServerProps> = (props) => {
    enum Colors {
        defult = 0,
        green,
        red,
    }
    const classes = useStyles();
    const [value, setValue] = React.useState<number | string | Array<number | string>>(30);
    const [buttonColor, setButtonColor] = useState(0)
    const client = useRef<null | WebSocket>(null);
    useEffect(() => {
        client.current = new WebSocket("ws://localhost:8090/" + props.link);
        console.log(client);
        //TODO must change it to be a prop the the compuniont will get!!
    }, []);

    const onSubmit = async (values: any) => {
        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);
        // console.log(values);
        if (client.current) {
            try {
                client.current.send(JSON.stringify(values));
            }
            catch (Error) {
                setButtonColor(2)
            }
            console.log("there was a send to the server ");
        }
        // window.alert(JSON.stringify(values));
    };
    useEffect(() => {
        if (client.current)
            client.current.onmessage = (message: any) => {
                let obj = JSON.parse(message.data);
                console.log(obj);
                if (obj === 200)
                    setButtonColor(1);
                //i should put an arlart insted
            };
    }, [buttonColor]);
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