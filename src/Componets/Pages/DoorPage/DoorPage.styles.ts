import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

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
})