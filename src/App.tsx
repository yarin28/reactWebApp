import React, { ComponentType, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./Componets/Pages/HomePage"
import './App.css';
import Dashboard from './Componets/Dashboard';
import Chart from './Componets/Chart';
import NavBar from './Componets/NavBar'
import StatusInfo from './Componets/StatusInfo'
import { useStyles } from './App.styles'
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from "./theme"
import Brighness from './Componets/Pages/Brightness'
import Humidity from './Componets/Pages/Humidity'
import Temperture from './Componets/Pages/Temperature'
import SignInSide from './Componets/Login'
import SignUp from './Componets/SignUp'
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import Door from './Componets/Door';
import DoorPage from './Componets/Pages/DoorPage';
import SetInterval from './Componets/Pages/SetInterval';
import Motor from "./Componets/Motor"
import About from "./Componets/About"
import Pump from "./Componets/Pump"


const App: ComponentType = () => {
  const classes = useStyles();
  const [loged,setLoged] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
    {loged ?
      <Router>
        <NavBar />
        <div className={classes.appBarSpacer}></div>
        <Switch>
          <Route path="/" exact>
           <HomePage />
          </Route>
          <Route path="/dash" exact>
            <Dashboard />
          </Route>
          <Route path="/chart" exact>
            {/* <Chart name="brightness" link="brightness" /> */}
          </Route>
          <Route path="/signUp" exact>
          <SignUp setLoged={setLoged}></SignUp>
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route>
          <Route path="/pump" exact>
<Pump name="water"></Pump>
          </Route>
          <Route path="/humidity" exact>
            <Humidity></Humidity>
          </Route>
          <Route path="/temperature" exact>
            <Temperture></Temperture>
          </Route>
          <Route path="/brightness" exact>
            <Brighness></Brighness>
          </Route>
          <Route path="/dashBoard" exact>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/motor" exact>
            <Motor name="door" ></Motor>
          </Route>
          <Route path="/door" exact>
            <DoorPage></DoorPage>
          </Route>
          <Route path="/interval" exact>
      <SetInterval ip="192.168.1.15:8090" place="/interval/" query="?set=" name="interval"></SetInterval>
          </Route>
        </Switch>
      </Router> :
      
      <>
      <Router> 
        <Switch>
          <Route path="/signUp" exact>
          <SignUp setLoged={setLoged} ></SignUp>
          </Route>
          <Route path = "/" excat>
            <SignInSide  setLoged={setLoged}></SignInSide>
          </Route>
        </Switch>
      </Router> 

</>
      
      }
    </ThemeProvider>
  );
}

export default App;
