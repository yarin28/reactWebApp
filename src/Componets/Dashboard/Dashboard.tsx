import React, { ComponentType } from "react"
import { Button, Typography } from "@material-ui/core"
import { useStyles } from "./Dashboard.styles"
import StatusInfo from '../StatusInfo'
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Door from '../Door'
const Dashboard: ComponentType = () => {
    const classes = useStyles()
    const Buttons = [];
    const isNight = (n: number | Float32Array) => { return n > 50 };
    const isHumidityHealthy = (n: number | Float32Array) => { return (n > 10 && n < 80) };
    const isTemperature = (n: number | Float32Array) => { return (n > 10 && n < 30) };
    for (let i = 0; i < 20; i++) {
        if (i % 2 !== 1)
            Buttons.push(<Button size="small" className={classes.button1} >{i}</Button>)
        else
            Buttons.push(<Button size="large" className={classes.button2}>{i}</Button>)
    }
    return (
        <div className={classes.container}>
            <StatusInfo
                isGoodCallback={isNight}
                ip="ws://192.168.1.15:8090/"
                whereToRegister="brightness"
                GoodMaterialUiIcon={SettingsBrightnessIcon}
                BadMaterialUiIcon={NightsStayIcon}
                description="this is the level of brightness" />
                <Door 
                ip="192.168.1.15:8090"
                place="door"
                query="?set="
                whereToRegister="temperature"
                GoodMaterialUiIcon={FormatColorResetIcon}
                BadMaterialUiIcon={LocalDrinkIcon}
                />            
                
                
                <StatusInfo

                isGoodCallback={isTemperature}
                ip="ws://192.168.1.15:8090/"
                whereToRegister="temperature"
                GoodMaterialUiIcon={FormatColorResetIcon}
                BadMaterialUiIcon={LocalDrinkIcon}
                description="this is the temperature in the coop" />
            <StatusInfo
                isGoodCallback={isHumidityHealthy}
                ip="ws://192.168.1.15:8090/"
                whereToRegister="humidity"
                GoodMaterialUiIcon={WhatshotIcon}
                BadMaterialUiIcon={AcUnitIcon}
                description="this is the humidity in the coop" />
        </div>
    )
}
export default Dashboard;