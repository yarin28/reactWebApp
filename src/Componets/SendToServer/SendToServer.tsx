
import React, { ComponentType, useCallback, useState } from "react"
// import { useForm } from "react-hook-form/dist/useForm";
import { useStyles } from "./SendToServer.styles"
import { useForm, FormProvider } from "react-hook-form";
import ErrorMessage from "./ErrorMessages";
import { Button, IconButton, Slider, Typography } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import FormInput from "../../controls/input";
const SendToServer: ComponentType = () => {
    const methods = useForm();
    const {
        register,
        handleSubmit,
        errors,
        setError,
        // clearError,
        formState: { isSubmitting }
    } = methods;
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
    const classes = useStyles();
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const [values, setValues] = useState({ username: '', age: null });
    const [sliderval, setsliderval] = React.useState<number | string | Array<number | string>>(30);

    const handleslidervalChange = (event: any, newValue: number | number[]) => {
        console.log("inside handleslidervalChange ");
        setsliderval(newValue);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("inside handleInputChange ");
        setsliderval(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (sliderval < 0) {
            setsliderval(0);
        } else if (sliderval > 100) {
            setsliderval(100);
        }
    };
    const myChangeHandler = (event: { target: { name: any; value: any; }; }) => {
        const nam = event.target.name;
        const val = event.target.value;
        // setValues({ [nam]: val });
    }

    const SubmitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert("You are submitting " + values.username);
    }
    return (
        <>


            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}>
                SUBMIT
            </Button>

            <FormProvider {...methods}>

                <form id="sendData" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Hello {values.username}</h1>
                    <p>Enter your name:</p>
                    <input name="temp"
                        type='text'
                        ref={register({ required: true })}
                        onChange={myChangeHandler}
                    />
                    <ErrorMessage error={errors.firstName} />
                    <Typography id="input-sliderval" gutterBottom>
                        set level
                </Typography>
                    <Slider
                        value={typeof sliderval === 'number' ? sliderval : 0}
                        onChange={handleslidervalChange}
                        aria-labelledby="input-sliderval"
                        className={classes.slider}
                    />
                    <FormInput
                        type='number'
                        name="sliderNum"
                        lablel="sliderNum"
                        ref={register({ required: true })}
                        className={classes.input}
                        value={sliderval}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-sliderval',
                        }}
                    />
                    <IconButton type='submit' color="primary">
                        {/* ref={register({ required: true })}> */}
                        <SendIcon />
                    </IconButton>
                    <FormInput name="name" label="Name" />
                </form>
            </FormProvider>

        </>

    );
}

export default SendToServer;