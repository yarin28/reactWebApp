import React, { ComponentType, useCallback, useState } from "react"
import SendToServer from "../../SendToServer";
import  Chart from "../../Chart";
import { withRouter } from "react-router-dom";
const Temperature:ComponentType = ( props:any )=> {
    const [xyCords, xyCordSet] = useState([{}]);
    return (
        <div>
            <Chart name="temperature"  cords={xyCords} condition={(y:number)=>{return y>80}}
            setCords={xyCordSet}/>
            <SendToServer name="get days" link="temperature" query="/?days="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
            <SendToServer name="get hours" link="temperature" query="/?hours="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
            <SendToServer name="get weeks" link="temperature" query="/?weeks="
            cords={xyCords} setCords={xyCordSet}></SendToServer>
        </div>
    )
}
export default withRouter(Temperature);