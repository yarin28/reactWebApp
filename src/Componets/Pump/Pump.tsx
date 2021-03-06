

import React, { ComponentType, useState } from 'react';
import { Form} from 'react-final-form';
import {
    Paper,
    Slider,
    Input,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core';
import { useStyles } from '../Motor/Motor.styles';
import PopUpMessage from '../PopUpMessage';
import { ip } from '../../Ip'
// Picker
interface FormItems { slider: number }
const validate = (values: Partial<FormItems>) => {
    const errors: Partial<FormItems> = {};

    return errors;
};
interface PumpProps { name: string }
/**
 * 
 * @brief the pump component is reliable on sending commands to the water pump.
 * the user can send the command and the component will notify the user via alert about the command status.
 * @returns 
 */
const Pump: ComponentType<PumpProps> = (props) => {
    const sliderLimit = 1000;
    enum Colors {
        defult = 0,
        green,
        red,
    }
    const classes = useStyles();
    const [value, setValue] = React.useState<number | string | Array<number | string>>(sliderLimit);
    const [buttonColor, setButtonColor] = useState(0)

    const [openError, setOpenError] = React.useState(false);
    const [openSuccsess, setOpenSuccsess] = React.useState(false);
    const [openServerError, setOpenServerError] = React.useState(false);
    const onSubmit = async (values: any) => {
        try {
            console.log(values);
            const response = await fetch("http://"+ip+":8090/pump/?milliseconds=" + value);
            const data = await response.json();
            console.log(response);
            //there is an error 
            if (response.status==406) {
                setButtonColor(Colors.red);
                setOpenError(true);}
                //the server accepted the request
            else if (response.status===201) {
                setButtonColor(Colors.green);
                setOpenSuccsess(true);
            }
            //there was an error with the delivery of the command(network)
            else {
                setButtonColor(Colors.red)
                setOpenServerError(true);
            }
        }
        catch (e) {
            if(e.message==='Timeout'){
            setOpenServerError(true);
            }
            setButtonColor(Colors.red)
            setOpenServerError(true);
        }
    }
    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setValue(newValue);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    //for the slider
    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > sliderLimit) {
            setValue(sliderLimit);
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
                            <Grid container spacing={2} alignItems="stretch" >
                                <Grid item xs>
                                    <Slider
                                        min={0}
                                        step={10}
                                        max={sliderLimit}
                                        value={typeof value === 'number' ? value : 0}
                                        onChange={handleSliderChange}
                                        aria-labelledby="input-slider"
                                    />
                                </Grid>
                                <Grid item  >
                                    <Input
                                        className={classes.input}
                                        value={value}
                                        margin="dense"
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        inputProps={{
                                            step: 10,
                                            min: 0,
                                            max: { sliderLimit },
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <IconButton
                                className=
                                {(buttonColor === Colors.defult) ? classes.null
                                    : (buttonColor === Colors.green) ? classes.sentButton
                                        : classes.errorButton}
                                type='submit'
                                color="primary">
                                send
                        </IconButton>
                        </Paper>
                    </form>
                )}
            />
            {/* the alerts that the web app can raise */}
            <PopUpMessage severity="success" message="the send was recived by the server" open={openSuccsess} setOpen={setOpenSuccsess}></PopUpMessage>
            <PopUpMessage severity="error" message="there is a problem with arduino, please try again later" open={openError} setOpen={setOpenError}></PopUpMessage>
            <PopUpMessage severity="error" message="the server could not be reached" open={openServerError} setOpen={setOpenServerError}></PopUpMessage>
        </div>
    );
}
export default Pump;
