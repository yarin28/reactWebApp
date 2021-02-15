import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
    Typography,
    Paper,
    Link,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
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
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ employed: true, stooge: 'larry' }}
            validate={validate}
            render={({ handleSubmit }) => (

                <form onSubmit={handleSubmit} noValidate>
                    <Paper style={{ padding: 16 }}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="firstName"
                                    component={TextField}
                                    type="text"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="lastName"
                                    component={TextField}
                                    type="text"
                                    label="Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="email"
                                    fullWidth
                                    required
                                    component={TextField}
                                    type="email"
                                    label="Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    label="Employed"
                                    control={
                                        <Field
                                            name="employed"
                                            component={Checkbox}
                                            type="checkbox"
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Best Stooge</FormLabel>
                                    <RadioGroup row>
                                        <FormControlLabel
                                            label="Larry"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="larry"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Moe"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="moe"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Curly"
                                            control={
                                                <Field
                                                    name="stooge"
                                                    component={Radio}
                                                    type="radio"
                                                    value="curly"
                                                />
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Sauces</FormLabel>
                                    <FormGroup row>
                                        <FormControlLabel
                                            label="Ketchup"
                                            control={
                                                <Field
                                                    name="sauces"
                                                    component={Checkbox}
                                                    type="checkbox"
                                                    value="ketchup"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Mustard"
                                            control={
                                                <Field
                                                    name="sauces"
                                                    component={Checkbox}
                                                    type="checkbox"
                                                    value="mustard"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Salsa"
                                            control={
                                                <Field
                                                    name="sauces"
                                                    component={Checkbox}
                                                    type="checkbox"
                                                    value="salsa"
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Guacamole 🥑"
                                            control={
                                                <Field
                                                    name="sauces"
                                                    component={Checkbox}
                                                    type="checkbox"
                                                    value="guacamole"
                                                />
                                            }
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    name="notes"
                                    component={TextField}
                                    multiline
                                    label="Notes"
                                />
                            </Grid>
                            <Grid item style={{ marginTop: 16 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Submit
                  </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            )}
        />
    );
}
export default SendToServer;