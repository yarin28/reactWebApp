import { ComponentType } from "react"
import { Grid} from "@material-ui/core"
import { useStyles } from "./Dashboard.styles"
import StatusInfo from '../StatusInfo'
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';

/**
 * @brief the dash board for the sensors, will display every sensor and the latest reading from it.
 * by using websockets the server can update the client with no real effort
 * every sensor display can be modified to serve the needs of the sensor, for example every sensor display has
 * a little boolean expression to check if the icon should be red or green.
 * 
 */
const Dashboard: ComponentType = () => {
    const classes = useStyles()

    const isNight = (n: number | Float32Array) => { return n > 50 };
    const isClosed = (n: number | Float32Array) => { return n === 0 };
    const isHumidityHealthy = (n: number | Float32Array) => { return (n > 10 && n < 80) };
    const isTemperature = (n: number | Float32Array) => { return (n > 10 && n < 30) };
    const isWater = (n: number | Float32Array) => { return (n>10) };
    return (
        <div className={classes.container}>
            <Grid  className={classes.mContainer}>
                <Grid item >
                    <StatusInfo
                        isGoodCallback={isNight}
                        ip={ "ws://"+"192.168.1.27:8090"+"/" }
                        whereToRegister="brightness"
                        GoodMaterialUiIcon={SettingsBrightnessIcon}
                        BadMaterialUiIcon={NightsStayIcon}
                        description="this is the level of brightness" />

                </Grid>
                <Grid item >
                    <StatusInfo
                        isGoodCallback={isClosed}
                        ip={ "ws://"+"192.168.1.27:8090"+"/" }
                        whereToRegister="door"
                        BadMaterialUiIcon={LockOpenIcon}
                        GoodMaterialUiIcon={LockIcon}
                        description="door status" />

                </Grid>
                <Grid item >
                    <StatusInfo
                        isGoodCallback={isWater}
                        ip={ "ws://"+"192.168.1.27:8090"+"/" }
                        whereToRegister="pump"
                        BadMaterialUiIcon={LocalDrinkIcon}
                        GoodMaterialUiIcon={LocalDrinkIcon}
                        description="water level inside the drinking container" />

                </Grid>
                <Grid item >
                    <StatusInfo

                        isGoodCallback={isTemperature}
                        ip={ "ws://"+"192.168.1.27:8090"+"/" }
                        whereToRegister="temperature"
                        GoodMaterialUiIcon={FormatColorResetIcon}
                        BadMaterialUiIcon={LocalDrinkIcon}
                        description="this is the temperature in the coop" />
                </Grid>
                <Grid item >
                    <StatusInfo
                        isGoodCallback={isHumidityHealthy}
                        ip={ "ws://"+"192.168.1.27:8090"+"/" }
                        whereToRegister="humidity"
                        GoodMaterialUiIcon={WhatshotIcon}
                        BadMaterialUiIcon={AcUnitIcon}
                        description="this is the humidity in the coop" />
                </Grid>
            </Grid>



        </div>
    )
}
export default Dashboard;