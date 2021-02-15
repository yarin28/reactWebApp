import React, { ComponentType } from 'react';
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
import { useStyles } from './App.styles'
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from "./theme"


const App: ComponentType = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
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
            <Chart />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
