import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        // backgroundColor: "DodgerBlue",
        justifyContent: "space-evenly",
    },
    button1: {
        backgroundColor: "green",
        flexGrow: 2,
    },
    button2: {
        backgroundColor: "red",
        flexGrow: 2,
    }
})