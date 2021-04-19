import React, { ComponentType, useCallback, useState } from "react"
import SendToServer from "../../SendToServer";
import  Chart from "../../Chart";
import { withRouter } from "react-router-dom";
const Humidity:ComponentType = ( props:any )=> {
    const [xyCords, xyCordSet] = useState([{}]);
    return (
        <div>
            <Chart name="humidity" link="humidity" cords={xyCords}
            setCords={xyCordSet}/>
            <SendToServer name="get days" link="humidity" query="/?days="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
            <SendToServer name="get hours" link="humidity" query="/?hours="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
            <SendToServer name="get weeks" link="humidity" query="/?weeks="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
        </div>
    )
}
export default withRouter(Humidity);