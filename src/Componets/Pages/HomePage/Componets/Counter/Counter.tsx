import React, { ComponentType } from "react"
import { Button, Typography } from "@material-ui/core"
import { useStyles } from "./Counter.styles"

interface CounterProps {
    num: number;
    onClickSub: () => void
    onClickAdd: () => void

}

const Counter: ComponentType<CounterProps> = ({ num, onClickAdd, onClickSub }) => {
    const classes = useStyles({ num })
    return (
        <div>
            <Button onClick={onClickAdd}>add</Button>
            <Typography className={classes.test}>{num}</Typography>
            <Button onClick={onClickSub}>sub</Button>
        </div>
    )
}

export default Counter