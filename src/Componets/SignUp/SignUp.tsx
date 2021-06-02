import  { ComponentType,  useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Copyright from '../Copyright'
import { AirlineSeatLegroomReduced } from '@material-ui/icons';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import ip from "../../Ip"
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
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
    alert: {
        width:'100%'
    },
}));

interface SignUpProps { setLoged: any }
const SignUp: ComponentType<SignUpProps> = (props) => {
  const history = useHistory();
  const [ cantLogIn,setCantLogIn ] = useState(false);
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

        const url: string = "http://"+ip+"/login/sign_up/" + "?"
            + "username=" + username + "&password=" + password;
            try{
        const response = await fetch(url, 
        {
            method: 'POST',
        });
        const data = await response.json();
        if(data==true)
        {
        props.setLoged(true);
        history.push("/dashboard");
        }
        else{
        setCantLogIn(true);
        props.setLoged(true);}
}
catch (e){
        setCantLogIn(true);
        props.setLoged(true);}
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
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
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

                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>

            </Grid>

            <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
 <Snackbar open={cantLogIn} autoHideDuration={6000} className={classes.alert} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error">
            wrong usename/password
        </Alert>
      </Snackbar>
</>
    );
}
export default SignUp;