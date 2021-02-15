import React, { ComponentType, useCallback, useState } from "react"
import { useStyles } from "./NavBar.styles"
import { AppBar, Button, Divider, Drawer, GridList, GridListTile, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import { Route, useHistory, Switch } from "react-router-dom";
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import Chicken from '../../Chicken.svg'
import Food from '../../Food.svg'

const NavBar: ComponentType = () => {
    console.log('rendered the NavBar');
    const history = useHistory();
    console.log(history);
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const [value, setValue] = React.useState('recents');
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>


            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h3" noWrap>
                        <Switch>
                            <Route path="/" exact>
                                Chicken Coop - Home Page
                        </Route>
                            <Route path="/dash" exact>
                                Chicken Coop - Dashborad
                            </Route>
                            <Route path="/chart" exact>
                                Chicken Coop - Chart
                                </Route>
                        </Switch>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                className={classes.drawer}
            >
                <div  >
                    <IconButton color="secondary" onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon  >
                            <MailIcon color="secondary"></MailIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="info" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon >
                            <TimelineIcon color="secondary" ></TimelineIcon>
                        </ListItemIcon>
                        <ListItemText color="secondary" primaryTypographyProps={{ color: "secondary" }} primary="charts" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon >
                            <HomeSharpIcon color="secondary"></HomeSharpIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="home status" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon >
                            <DashboardSharpIcon color="secondary"></DashboardSharpIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="dashBoard" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon >
                            <InfoSharpIcon color="secondary"></InfoSharpIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="about" />
                    </ListItem>
                    <ListItem button className={classes.drawer} onClick={() => history.push("/chart")}>
                        <img src={Chicken} className={classes.svg} alt="how many chickens" />
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="chicken count" />
                    </ListItem>
                    <ListItem button className={classes.drawer} onClick={() => history.push("/chart")}>
                        <img src={Food} className={classes.svg} alt="how many chickens" />
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="Food" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon >
                            <LiveTvSharpIcon color="secondary"></LiveTvSharpIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="livestream" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon >
                            <LocalDrinkIcon color="secondary"></LocalDrinkIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="Water" />
                    </ListItem>
                </List>
            </Drawer>

        </div >
    );
};

export default NavBar;