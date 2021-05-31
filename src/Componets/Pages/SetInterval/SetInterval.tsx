import React, { ComponentType ,useState}from "react"
import { Grid, IconButton, Input, Paper, Slider, Typography } from "@material-ui/core";
import { useStyles } from './SetInterval.styles'
import { Form } from "react-final-form";

interface SetIntervalProps { place :string; ip:string;name: string; query: string; }
/**
 * @brief  sends to the server request to change the interval of the sampling if the sensors.
 * will change the color of the button according to the status of the request.
 * 
 * @param props for the customizing the componetnt to other uses.
 * @returns 
 */
const SetInterval: ComponentType<SetIntervalProps> = (props) => {
    enum Colors {
        defult = 0,
        green,
        red,
    }
    const [value, setValue] = React.useState<number | string | Array<number | string>>(30);
    const [description, setDescription] = useState("");
    const [buttonColor, setButtonColor] = useState(0)
    const classes = useStyles();
    const onSubmit = async(values:any)=>
    {
        const response  = await fetch ("http://"+props.ip+props.place+props.query +value ,
            {
                method: 'POST',
            });
     const data = await response.json();
            // const realy_json = JSON.parse(data);
            console.log(data);
            setDescription("sent " + value + " to the garden");
        }
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
        } else if (value > 86400000) {
            setValue(86400000);
        }
    };
    return (
        <div className={classes.root}>
            <Typography> set the milliseconds of sampling the sensors in the coop </Typography>
            <Form
                onSubmit={onSubmit}
                initialValues={value}
                render={({ handleSubmit }) => (

                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 16 }}>
                            <Typography variant="h5">
                                {props.name}
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                    <Slider
                                        min={0}
                                        step={10}
                                        max={86400000}
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
                                            max: 86400000,
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
                        <Typography>{description}</Typography>
                        </Paper>
                    </form>
                )}
            />
        </div >
    )
}




export default SetInterval;