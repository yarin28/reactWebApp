import React, { ComponentType, useCallback, useState } from "react"
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
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [description, setDescription] = useState("open or close the door");
    const handleCheck = async () => {
        setChecked((prev) => !prev);
        let boolToTxt: string = "";
        try {
            console.log(checked);
            //there is someting i dont understand, it will not update in time
            if (!checked) boolToTxt = "open";
            else boolToTxt = "close";
            const response = await fetch("http://" + props.ip + "/" + props.place + "/" + props.query + boolToTxt, 
            {
                method: 'POST',
            });
            const data = await response.json();
            const realy_json = JSON.parse(data);
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
                    <IconButton color="primary" aria-label="control the door" component="span" onClick={handleCheck} className={checked ? classes.green : classes.red}  >
                        <MeetingRoomIcon></MeetingRoomIcon>
                    </IconButton>
                </Grid>
                <Grid item>Open</Grid>
            </Grid>
        </div>
    )
}
export default Door;