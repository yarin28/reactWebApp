
import  { ComponentType, useState } from "react"
import SendToServer from "../../SendToServer";
import  Chart from "../../Chart";
import { withRouter } from "react-router-dom";
/**
 * @brief the page where you can see the water level sensor.
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
  
const Water:ComponentType = ( props:any )=> {
    const [points, setPoints] = useState([{}]);
    return (
        <div>
            <Chart name="water"  cords={points} condition={(y:number)=>{return y>80}}
            setCords={setPoints}/>
            <SendToServer name="get days" link="water" query="/?days="
            cords={points} setCords={setPoints}></SendToServer>
            <SendToServer name="get hours" link="water" query="/?hours="
            cords={points} setCords={setPoints}></SendToServer>
            <SendToServer name="get weeks" link="water" query="/?weeks="
            cords={points} setCords={setPoints}></SendToServer>
        </div>
    )
}
export default withRouter(Water);