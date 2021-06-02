import React, { ComponentType, useEffect, useMemo, useRef, useState } from "react"
import { w3cwebsocket as WebSocket } from 'websocket'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./StatusInfo.styles"
import { Grid } from "@material-ui/core";
import { Typewriter } from 'react-typewriting-effect'


interface StatusInfoProps {
  ip: string;
  whereToRegister: string;
  BadMaterialUiIcon: any;
  GoodMaterialUiIcon: any;
  description: string;
  isGoodCallback: (n: number) => boolean;
};
/**
 * 
  @param ip: the ip to send the request to. 
  @param whereToRegister: the sensor path.
  @param BadMaterialUiIcon: the icon when the bad areas of the sensor is on display( for eample : the water levle is below 10%).
  @param GoodMaterialUiIcon: the icon when the good areas of the sensor is on display( for eample : the water levle is above 10%) .
  @param description: what the sensor is sensing.
  @param isGoodCallback: the function to determine if the reading from te sensor is a bad one.
 * @returns 
 */
const StatusInfo: ComponentType<StatusInfoProps> = (props) => {
  const classes = useStyles();
  const client = useRef<null | WebSocket>(null);
  const [value, setValue] = useState(0.0);
  const [webSocketError, setWebSocketError] = useState(" ");

  const chooseIcon = () => {
    if (props.isGoodCallback(value)) {
      return <props.GoodMaterialUiIcon
        fontSize="large" className=
        {props.isGoodCallback(value) ? classes.green : classes.red} />;
    }
    return <props.BadMaterialUiIcon fontSize="large"
      className={props.isGoodCallback(value) ? classes.green : classes.red} />;
  }
  useEffect(() => {
    try {
      console.log(props.ip + props.whereToRegister + "/register");
      client.current = new WebSocket(props.ip + props.whereToRegister + "/register");
    }
    catch (e) {
      setWebSocketError("couldn`t connect to the server, please retry enother time");
    }
    // will have to be an prop 
  }, []);
  useEffect(() => {
    if (client.current)
      client.current.onmessage = (message: any) => {
        const dataArray = JSON.parse(message.data);
        console.log(dataArray);
        try {
          setValue(dataArray.y)
        }
        catch (e) {
          console.log("cought the not irtratble shit1")
          setValue(dataArray.y);
        }
      };
  }, []);
  return (
    <div className={classes.root}>
      <Card elevation={3}>
        <Grid>
          <Typography className={classes.insidePaper} variant="h3" >
            {chooseIcon()}
          </Typography>
          <Typography className={classes.insidePaper} variant="h3" >
            {value}
          </Typography>
          <Typography className={classes.insidePaper} variant="h5" >
            <Typewriter
              delay={80}
              string={props.description}
              stopBlinkinOnComplete
              onComplete={()=>{}}
            />
          </Typography>
        </Grid>
      </Card>
    </div>
  );
}
export default StatusInfo;