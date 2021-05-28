import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { theme } from "../../theme";

export const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection:"column",
        flexGrow: 4,
        // backgroundColor: "DodgerBlue",
        justifyContent: "center",
    },
    button1: {
        backgroundColor: "green",
        flexGrow: 2,
    },
    button2: {
        backgroundColor: "red",
        flexGrow: 2,
    },
   largeIcon: {
    width: 60,
    height: 60,
  },
  root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
mContainer:{
    display: "flex",
    flexDirection: "row",
    alignContent:"center",
    justifyContent:"space-around",
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
        flexWrap: "wrap" ,

},
})