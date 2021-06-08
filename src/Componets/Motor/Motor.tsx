
import React, { ComponentType,useState } from 'react';
import { Form } from 'react-final-form';
import {
    Paper,
    Slider,
    Input,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core';
import { useStyles } from './Motor.styles';
import PopUpMessage from '../PopUpMessage';
import ip from "../../Ip"
// Picker
interface FormItems { slider: number }
const validate = (values: Partial<FormItems>) => {
    const errors: Partial<FormItems> = {};
    return errors;
};

interface MotorProps { name: string }

/**
 * 
 * @brief the motor controller, will be able to send the motor steps and the
 * motor will execute the given steps.
 * @return it will aleart the user about the status of the  request to the server.
 */
const Motor: ComponentType<MotorProps> = (props) => {
    const sliderLimit = 10000;
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
            const response = await fetch("http://"+ip+":8090/motor/?steps=" + value);
            const data = await response.json();
            console.log(response);
             // the response was not correct / there was an error inside the server
            if (response.status==406) {
                setButtonColor(Colors.red);
                setOpenError(true);}
                // the response was correct and accepted by the server
            else if (response.status===201) {
                setButtonColor(Colors.green);
                setOpenSuccsess(true);
            }
            else {
                setButtonColor(Colors.red)
                setOpenServerError(true);
            }
        }
        catch (e) {
            if(e.message==='Timeout'){
            setOpenServerError(true);
            }
            setOpenServerError(true);
            setButtonColor(Colors.red)
        }
    }
    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setValue(newValue);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
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
            {/* those are the messages alerts that the user will be able to get */}
            <PopUpMessage severity="success" message="the send was recived by the server" open={openSuccsess} setOpen={setOpenSuccsess}></PopUpMessage>
            <PopUpMessage severity="error" message="there is a problem with arduino, please try again later" open={openError} setOpen={setOpenError}></PopUpMessage>
            <PopUpMessage severity="error" message="the server could not be reached" open={openServerError} setOpen={setOpenServerError}></PopUpMessage>
        </div>
    );
}
export default Motor;
