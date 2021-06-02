import React, { ComponentType, useEffect, useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Route, useHistory, Switch } from "react-router-dom";
import Copyright from '../Copyright'
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useStyles } from './Login.styles';
import ip from "../../Ip"
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
interface LoginProps { setLoged: any }
const Login: ComponentType<LoginProps> = (props) => {
  const [ cantLogIn,setCantLogIn ] = useState(false);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const handleChangeU = (event: any) => {
    setUsername(event.target.value);
  }
  const handleChangeP = (event: any) => {
    setPassword(event.target.value);
  }
  const handleSubmit = async (event: any) => {
    try{
        const url: string = "http://"+ip+":8090/login/login/" + "?"
      + "username=" + username + "&password=" + password;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
        if(data===true)
        {
        props.setLoged(true);
        }
        setCantLogIn(true);
      }
      catch(e){
        setCantLogIn(true)
      }
  }
 const handleErrorClose = (event?: any, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setCantLogIn(false);
  };
  return (
    <>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={handleChangeU}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangeP}
            />
            <Button
              //   type="b"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="/signUp" onClick={() => history.push("/signUp")} variant="body2">
                  sign up
                    </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
 <Snackbar open={cantLogIn} autoHideDuration={6000}  onClose={handleErrorClose}>
        <Alert  variant="filled" onClose={handleErrorClose} severity="error">
            wrong usename or password, please try again
        </Alert>
      </Snackbar>
      </>
  );
}
export default Login;