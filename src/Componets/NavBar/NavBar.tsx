import React, { ComponentType,} from "react"
import { useStyles } from "./NavBar.styles"
import { AppBar, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography,  useTheme } from "@material-ui/core"
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
import Brightness7Icon from '@material-ui/icons/Brightness7';
import {useHistory} from "react-router-dom";
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import Chicken from '../../Chicken.svg'
import Food from '../../Food.svg'
import Temp from '../../temp.svg'
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import OpacityIcon from '@material-ui/icons/Opacity';

/**
 * @brief the nav bar for the web app, with in it is possible to navigate to all
 * the pages in the app.
 * 
 * the nav bar containes a list of all the paths that the user can take.
 * every path has its own icon and name.
 */
const NavBar: ComponentType = () => {
    console.log('rendered the NavBar');
    const history = useHistory();
    console.log(history);
    const classes = useStyles();
    const theme = useTheme();
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
                        Chicken Coop - {history.location.pathname}
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
                    <ListItem button onClick={() => history.push("/brightness")}>
                        <ListItemIcon  >
                            <Brightness7Icon color="secondary"></Brightness7Icon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="Brightness" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon  >
                            <MailIcon color="secondary"></MailIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="info" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/humidity")}>
                        <ListItemIcon >
                            <TimelineIcon color="secondary" ></TimelineIcon>
                        </ListItemIcon>
                        <ListItemText color="secondary" primaryTypographyProps={{ color: "secondary" }} primary="humidity" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/humidity")}>
                        <ListItemIcon >
                            <HomeSharpIcon color="secondary"></HomeSharpIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="home status" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/dashboard")}>
                        <ListItemIcon >
                            <DashboardSharpIcon color="secondary"></DashboardSharpIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="dashBoard" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/about")}>
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
                    <ListItem button onClick={() => history.push("/live_stream")}>
                        <ListItemIcon >
                            <LiveTvSharpIcon color="secondary"></LiveTvSharpIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="livestream" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/temperature")}>
                        <img src={Temp} className={classes.svg} alt="temperature" />
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="temperature" />
                        {/* <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="Water" /> */}
                    </ListItem>
                    <ListItem button onClick={() => history.push("/chart")}>
                        <ListItemIcon >
                            <LocalDrinkIcon color="secondary"></LocalDrinkIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="Water" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/pump")}>
                        <ListItemIcon >
                            <OpacityIcon color="secondary"></OpacityIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="Water pump" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/motor")}>
                        <ListItemIcon >
                            <FlipCameraAndroidIcon color="secondary" ></FlipCameraAndroidIcon>
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: "secondary" }} primary="Motor" />
                    </ListItem>
                </List>
            </Drawer>

        </div >
    );
}; 

export default NavBar;