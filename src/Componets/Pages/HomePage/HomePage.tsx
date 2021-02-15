import React, { ComponentType, useCallback, useState } from "react"
import { Button, GridList, GridListTile } from "@material-ui/core"
import { useStyles } from "./HomePage.styles"
import Counter from "./Componets/Counter"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { History, LocationState } from "history";
import SendToServer from "../../SendToServer";

const HomePage: ComponentType = (props: any) => {
    console.log(props);
    const classes = useStyles();
    const [num, setNum] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])
    const [value, setValue] = React.useState('recents');
    const { history } = props;

    const handleButtonClick = (pageURL: any) => {
        history.push(pageURL);
    };
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    const add = useCallback(index => () =>
        setNum(num.map((value, current_index) => index === current_index ? value + 1 : value))
        , [num])
    const sub = useCallback(index => () =>
        setNum(num.map((value, current_index) => index === current_index ? value - 1 : value))
        , [num])

    return (
        <div>
            <SendToServer></SendToServer>
            <h1>welcam to the dashboard</h1>
            <h2>the status is great!</h2>
            <div style={{ height: 100000 }}></div>
        </div>
    )
}

export default withRouter(HomePage);

            // {num.map((value, index) => (
            //     <Counter
            //         num={value}
            //         onClickAdd={add(index)}
            //         onClickSub={sub(index)}
            //     />
            // ))}
            // {[
            // ]}
            // <Button>{num}</Button>
            // <Button className={classes.stautses}>graph</Button>
            // <Button className={classes.stautses}>settings</Button>