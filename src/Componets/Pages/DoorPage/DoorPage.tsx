import React, { ComponentType, useEffect, useMemo, useRef, useState } from "react"
import Door from "../../Door";
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { Typography } from "@material-ui/core";
import { useStyles } from './DoorPage.styles'
import StatusInfo from "../../StatusInfo";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ip from "../../../Ip"
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const DoorPage: ComponentType = (props) => {
    const classes = useStyles();
    const isLocked = (n:number) :boolean => {return (n===0);}
    return (
        <div className={classes.container}>
<<<<<<< HEAD
            {/* <StatusInfo ip="192.168.1.27" isGoodCallback={isLocked} BadMaterialUiIcon={LockOpenIcon} GoodMaterialUiIcon={LockIcon} whereToRegister="door/register" description="the status of the door" /> */}
=======
>>>>>>> 5bd09ae3b4743c31a09d8b82403c2028b7b625cf
            <StatusInfo ip="ws://localhost:8090/" isGoodCallback={isLocked} BadMaterialUiIcon={LockOpenIcon} GoodMaterialUiIcon={LockIcon} whereToRegister="door" description="the status of the door" />
            <Typography variant="h5"> this the door control page, </Typography>
            <Typography variant="h5">in here you can send command to, </Typography>
                   <Door 
<<<<<<< HEAD
                ip="localhost:8090"
                // ip="192.168.1.27:8090"
=======
                ip={ ip }
>>>>>>> 5bd09ae3b4743c31a09d8b82403c2028b7b625cf
                place="door"
                query="?set="
                whereToRegister="door" 
                GoodMaterialUiIcon={FormatColorResetIcon}
                BadMaterialUiIcon={LocalDrinkIcon}
                />            
                    
                <Typography>will send the command to the arduino,</Typography>
                <Typography> the arduino will check if possible and return the status</Typography>
                <Typography variant="h6">Useges-</Typography>

                <ol>
                <li> close the door while away from home</li>
                <li>open the door at night</li>
                <li>close the door while guests are visiting</li>
                </ol>
        </div >
    )
}




export default DoorPage;