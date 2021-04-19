import { createStyles, makeStyles, Theme } from "@material-ui/core";

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
    '& svg': {
      fontSize: 100
    }
    },
    green:{
    color:"green",
    '& svg': {
      fontSize: 100
    }
    },
 svg: {
    '& svg': {
      fontSize: 100
    }
  }
  }),
);