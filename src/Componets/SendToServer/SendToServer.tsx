import React, { ComponentType, useEffect, useRef } from 'react';
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
import { ContactSupportOutlined } from '@material-ui/icons';
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
interface SendToServerProps { name: string }
const SendToServer: ComponentType<SendToServerProps> = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState<number | string | Array<number | string>>(30);
    const client = useRef<null | WebSocket>(null);
    useEffect(() => {
        client.current = new WebSocket("ws://localhost:8090/setWaterLevel");
        console.log(client);
        //TODO must change it to be a prop the the compuniont will get!!
    }, []);

    const onSubmit = async (values: any) => {
        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);
        if (client.current) {
            client.current.send(JSON.stringify(values));
            console.log("there was a send to the server ");
        }
        window.alert(JSON.stringify(values));
    };
    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setValue(newValue);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

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
                            <IconButton type='submit' color="primary">
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