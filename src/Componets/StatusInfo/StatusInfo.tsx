import React, { ComponentType, useEffect, useMemo, useRef, useState } from "react"
import { w3cwebsocket as WebSocket } from 'websocket'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./StatusInfo.styles"

interface StatusInfoProps {
  ip: string;
  whereToRegister: string;
  BadMaterialUiIcon: any; 
  GoodMaterialUiIcon: any;
  description: string;
   isGoodCallback: (n: number) => boolean;
};
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

        <Typography  >
          {props.description}
        </Typography>
        <Typography variant="h3" >
          {chooseIcon()}
          {value}
        </Typography>
      </Card>
    </div>
  );
}
export default StatusInfo;