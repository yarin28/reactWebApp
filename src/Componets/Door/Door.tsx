<<<<<<< HEAD
import React, { ComponentType, useCallback, useRef, useState } from "react"
=======
import React, { ComponentType, useCallback, useEffect, useRef, useState } from "react"
>>>>>>> 358dc7d4691ad823fa18d243816b8a69766f9de7
import { Grid, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { useStyles } from "./Door.styles"
import { METHODS } from "http";
interface DoorProps {
    ip: string;
    place: string
    whereToRegister: string;
    BadMaterialUiIcon: any;
    query: string
    GoodMaterialUiIcon: any;
};
const Door: ComponentType<DoorProps> = (props) => {
  const client = useRef<null | WebSocket>(null);
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [description, setDescription] = useState("open or close the door");
<<<<<<< HEAD
    useRef(async () => {
       const isLocked =  await checkStatus();
        console.log("this is the lock")
        console.log(isLocked);
       if ( isLocked )
            setChecked(true);
            setChecked(false);

    });
    const checkStatus = async () =>{

        const response = await fetch("http://" + props.ip + "/" + props.place + "/" + "last");

        const data = await response.json();
        try {
            const realy_json = JSON.parse(data);
        }
        catch (error) {
            console.log(error);
        }
        if(data.value ===0)
        {
            return true;
        }
            return false
    };
const handleCheck = async () => {
    setChecked((prev) => !prev);
    let boolToTxt: string = "";
    try {
        console.log(checked);
        //there is someting i dont understand, it will not update in time
        if (!checked) boolToTxt = "open";
        else boolToTxt = "close";
        const response = await fetch("http://" + props.ip + "/" + props.place + "/" + props.query + boolToTxt,
=======
  useEffect(() => {
    try {
      client.current = new WebSocket("ws://"+ props.ip+"/" + props.place + "/register");
    }
    catch (e) {
        console.log("cant connect")
    }
    // will have to be an prop 
  }, []);
  useEffect(() => {
    if (client.current)
      client.current.onmessage = (message: any) => {
        const dataArray = JSON.parse(message.data);
        try {
          if(dataArray.y==1)setChecked(true);
          setChecked(true);
        }
        catch (e) {
          console.log("cought the not irtratble shit1")
        }
      };
  }, []);
    const handleCheck = async () => {
        setChecked(!checked);
        let boolToTxt: string = "";
        try {
            console.log(checked);
            //there is someting i dont understand, it will not update in time
            if (!checked) boolToTxt = "open";
             else {boolToTxt = "close";}
            const response = await fetch("http://" + props.ip + "/" + props.place + "/" + props.query + boolToTxt, 
>>>>>>> 358dc7d4691ad823fa18d243816b8a69766f9de7
            {
                method: 'POST',
            });
        const data = await response.json();
        try {
            const realy_json = JSON.parse(data);
        }
        catch (error) {
            console.log(error);
        }
        console.log(data);
        setDescription("sent " + boolToTxt + " to the garden");
    }
    finally {
        if (boolToTxt === "") {
            setDescription("there was an error with the send try another time");
        }
        else {
            setDescription("sent " + boolToTxt + " to the server");
        }
    }
    return checked;
};
return (
    <div>
        <Typography> {description}</Typography>
        <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Close</Grid>
            <Grid item>
                <IconButton color="primary" aria-label="control the door" component="span" onClick={handleCheck} className={!checked ? classes.green : classes.red}  >
                    <MeetingRoomIcon></MeetingRoomIcon>
                </IconButton>
            </Grid>
            <Grid item>Open</Grid>
        </Grid>
    </div>
)
}
export default Door;