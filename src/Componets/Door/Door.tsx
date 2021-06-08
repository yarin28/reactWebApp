import  React, { ComponentType, useEffect, useRef, useState } from "react"
import { Grid, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { useStyles } from "./Door.styles"
import PopUpMessage from "../PopUpMessage";

/**
 * 
 */
interface DoorProps {
    ip: string;
    place: string
    whereToRegister: string;
    BadMaterialUiIcon: any;
    query: string
    GoodMaterialUiIcon: any;
};
/**
 * 
 * @param props to customize every door to maj=ke them uniqe.  
 * @returns the door componets allow the user to control the door, open and close it and see the status right now.
 */
const Door: ComponentType<DoorProps> = (props) => {
  const client = useRef<null | WebSocket>(null);
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [errorMessage,setErrorMessage] = useState("the was an errpr")
    const [description, setDescription] = useState("open or close the door");
    const [openServerError, setOpenServerError] = React.useState(false);
  useEffect(() => {
    try {
      client.current = new WebSocket("ws://"+ props.ip+"/" + props.place + "/register");
    }
    catch (e) {
        console.log("cant connect")
    }
    // will have to be an prop 
  }, []);
  /**
   * every time the client receives a message this function will be called to process it.
   * it will take what it needs and will update the status if nessesery.
   */
  useEffect(() => {
    if (client.current)
      client.current.onmessage = (message: any) => {
        const dataArray = JSON.parse(message.data);
        try {
        // the status of the door to be displayed to the server
          if(dataArray.y==1)setChecked(true);
          setChecked(true);
        }
        catch (e) {
            setDescription("there was an error with the server please try again later")
        }
      };
  }, []);
  /**
   * 
   * @returns will send the server the request and awaut the answer, will tell
   * the user what is going on with the request
   */
    const handleSubmit = async () => {
        setChecked(!checked);
        let boolToTxt: string = "";
        try {
            console.log(checked);
            if (!checked) boolToTxt = "open";
             else {boolToTxt = "close";}
            const response = await fetch("http://" + props.ip + "/" + props.place + "/" + props.query + boolToTxt, 
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
    // id dont belive that the function has to return enything.
    return checked;
};
return (
    <div>
        <Typography> {description}</Typography>
        <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Close</Grid>
            <Grid item>
                <IconButton color="primary" aria-label="control the door" component="span" onClick={handleSubmit} className={!checked ? classes.green : classes.red}  >
                    <MeetingRoomIcon></MeetingRoomIcon>
                </IconButton>
            </Grid>
            <Grid item>Open</Grid>
        </Grid>
            <PopUpMessage severity="error" message="the server could not be reached" open={openServerError} setOpen={setOpenServerError}></PopUpMessage>
    </div>
)
}
export default Door;