import  { ComponentType, useState } from "react"
import SendToServer from "../../SendToServer";
import  Chart from "../../Chart";
import { withRouter } from "react-router-dom";
/**
 * @brief the page where you can see the brightness sensor.
 the user is able to
 * request data from the server according to different scales(hours,days...).
 * the chart component will display the data that was sent after the request to
 * the server.
 the send buttons will change their color according to the status
 * of the request(red for error and green for success) every chart gets a
 * condition according to it the color if the dots on the graph will change, for
 * example if the condition is x>50 the dot on the graph will be green if
 * number>50 and red of number<50.
 the chart component will update with the new
 * points instantly.
 @param points is the array of point object that is shared
 * with all the page
 */
const Brightness:ComponentType = ( props:any )=> {
    const [points, pointsSet] = useState([{}]);
    return (
        <div>
            <Chart name="brightness"  cords={points} condition={(y:number)=>{return y>30}}
            setCords={pointsSet}/>
            <SendToServer name="get days" link="brightness" query="/?days="
            cords={points} setCords={pointsSet}></SendToServer>
            <SendToServer name="get hours" link="brightness" query="/?hours="
            cords={points} setCords={pointsSet}></SendToServer>
            <SendToServer name="get weeks" link="brightness" query="/?weeks="
            cords={points} setCords={pointsSet}></SendToServer>
        </div>
    )
}
export default withRouter(Brightness);