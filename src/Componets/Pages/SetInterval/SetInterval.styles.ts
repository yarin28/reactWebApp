
import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: 500,
    },
    stautses: {
        height: "30%",
    },
    input: {
        width: 60,
    },
    slider: {
        width: "50%",
    },
    firstDiv: {
        width: "50%",
        height: "50%",
    },
    sentButton: {
        color: "green"
    },
    errorButton: {
        color: "red"
    },
    null: {},
  }),
);