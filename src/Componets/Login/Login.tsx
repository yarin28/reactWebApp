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
const chickenPhotos = ["https://i.pinimg.com/originals/01/93/f5/0193f589c7c3bc84d00fd0899b004706.jpg",
"https://betterchickencommitment.com/static/c4c65646cd882eb3b25feba0144c9113/a54c6/white-chicken-cutout-2.png",
"https://cdn.sanity.io/images/92ui5egz/~production/1f0e40ffac1592c3c9978cff9e5ec0d0b4901f23-1920x1080.jpg?w=1920&h=1080&auto=format",
"https://a4nh.cgiar.org/files/2017/10/Chicken-in-Timor-Leste-Johanna-Wong.jpg",
"https://assets.farmsanctuary.org/content/uploads/2020/05/27060521/2018_08-07_FSNY_Georgia_Hardstark_hen_DSC_1000_CREDIT_Farm_Sanctuary-scaled.jpg",
"https://a-z-animals.com/media/2019/11/Chicken-rooster-in-grass.jpg",
"https://www.backwoodshome.com/bhm/wp-content/uploads/2015/12/chicken-3727097_1920.jpg",
"https://www.adcogov.org/sites/default/files/chicken%201%20-%20getty.jpg"]
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: 'url('+chickenPhotos[Math.floor(Math.random()*chickenPhotos.length)]+')',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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
        const url: string = "http://192.168.1.15:8090/login/login/" + "?"
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