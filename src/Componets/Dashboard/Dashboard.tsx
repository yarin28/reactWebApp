import React, { ComponentType } from "react"
import { Button, Typography } from "@material-ui/core"
import { useStyles } from "./Dashboard.styles"


const Dashboard: ComponentType = () => {
    const classes = useStyles()
    const Buttons = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 !== 1)
            Buttons.push(<Button size="small" className={classes.button1} >{i}</Button>)
        else
            Buttons.push(<Button size="large" className={classes.button2}>{i}</Button>)
    }
    return (
        <div className={classes.container}>
            {Buttons}
        </div>
    )
}
export default Dashboard;