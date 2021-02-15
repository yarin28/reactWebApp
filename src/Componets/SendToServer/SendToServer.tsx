import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import {
    Paper,
    Slider,
    Input,
    Grid,
} from '@material-ui/core';
import { useStyles } from './SendToServer.styles';
// Picker
const onSubmit = async (values: any) => {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values));
};
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

const SendToServer: ComponentType = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState<number | string | Array<number | string>>(30);
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
        <Form
            onSubmit={onSubmit}
            initialValues={{ employed: true, stooge: 'larry' }}
            validate={validate}
            render={({ handleSubmit }) => (

                <form onSubmit={handleSubmit} noValidate>
                    <Paper style={{ padding: 16 }}>
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
                    </Paper>
                </form>
            )}
        />
    );
}
export default SendToServer;