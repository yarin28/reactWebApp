import React, { ComponentType, useCallback, useState } from "react"
import SendToServer from "../../SendToServer";
import  Chart from "../../Chart";
import { withRouter } from "react-router-dom";
const Brightness:ComponentType = ( props:any )=> {
    const [xyCords, xyCordSet] = useState([{}]);
    return (
        <div>
            <Chart name="brightness" link="brightness" cords={xyCords}
            setCords={xyCordSet}/>
            <SendToServer name="get days" link="brightness" query="/?days="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
            <SendToServer name="get hours" link="brightness" query="/?hours="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
            <SendToServer name="get weeks" link="brightness" query="/?weeks="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
        </div>
    )
}
export default withRouter(Brightness);