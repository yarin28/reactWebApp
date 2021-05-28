
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { sizing } from '@material-ui/system';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(32),
        height: theme.spacing(32),
      },
    },
    red:{
    color:"red",
    fontSize: "100%",
    },
    insidePaper:{
      padding: theme.spacing(1),
    },
    green:{
    color:"green",
    fontSize: "100%",
    },
  }),
);