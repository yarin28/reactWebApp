import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme, { num: number }>({
    test: ({ num }) => ({
        backgroundColor: num > 0 ? "green" : num < 0 ? "red" : "blue",
        width: "fit-content",
        color: "white"

    })
})