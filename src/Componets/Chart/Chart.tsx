import React, { ComponentType, useEffect, useMemo, useRef, useState } from "react"
import { Scatter } from "react-chartjs-2"
import { Button } from "@material-ui/core";
import { w3cwebsocket as WebSocket } from 'websocket'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
interface ChartProps { name: string; link: string ;cords:any;setCords:any}
const Chart: ComponentType<ChartProps> = (props) => {
    const getDays = async (param: string) => {
        const response = await fetch("http://192.168.1.15:8090/" + props.link + param);
        console.log(response);
        const data = await response.json();
        const realy_json = JSON.parse(data)
        console.log(data);
        console.log(Date.parse(realy_json[0].x));
        for (let cord of realy_json) {
            addXY({ x: Date.parse(cord.x), y: cord.y });
        }

    };
    // const client = useRef<null | WebSocket>(null);
    // useEffect(() => {
    //     client.current = new WebSocket("ws://192.168.1.15:8090/" + props.link+ "/register");
    //     // will have to be an prop
    // }, []);
    // useEffect(() => {
    //     if (client.current)
    //         client.current.onmessage = (message: any) => {
    //             const dataArray = JSON.parse(message.data);
    //             console.log(dataArray);
    //             try{
    //             for (let obj of dataArray) {
    //                 console.log(obj);
    //                 props.setCords([...props.cords, { x: obj.x, y: obj.y }]);
    //             }}
    //             catch(e){
    //                 console.log("cought the not irtratble shit1")
    //                 props.setCords([...props.cords, { x: Date.parse(dataArray.x), y: dataArray.y }]);
    //             }
    //         };
    // }, [props.cords]);
    /**
     * Generates a random integer between min and max (inclusive)
     * @param  {number} min
     * @param  {number} max
     * @returns randomly generated integer
     */
    const randomInt = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const chooseColorSign = (context: any) => {
        var index = context.dataIndex;
        var value = context.dataset.data[index].y;
        return value < 0 ? 'red' : 'green';
    };
    const addXY = async (xy: { x: number; y: number; }) => {
        props.setCords((oldArray:any)=> [...oldArray, xy]);
    };
    const add10XY = async () => {
        for (let i = 0; i < 100; i++) {
            console.log(i);
            await delay(500);
            addXY({ x: i, y: randomInt(-100, 100) });
        }
        // addXY({ x: -15, y: -15 })
    };
    const chartData = useMemo(() => ({
        labels: 'dataset',
        datasets: [
            {
                label: 'good boy',
                data: props.cords,
                borderColor: 'white',
                borderWidth: 2,
                pointBackgroundColor: (context: any) => { return chooseColorSign(context) },
                pointBorderColor: (context: any) => { return chooseColorSign(context) },
                pointRadius: 2,
                pointHoverRadius: 2,
                fill: false,
                tension: 0.5,
                showLine: true
            }
        ]
    }), [props.cords])
    return (
        <div>
            <Scatter data={chartData} />
            <Button onClick={() => add10XY()}>test</Button>
            <Button onClick={() => getDays("/?days=10")} >add days data</Button>
        </div >
    )
}




export default Chart;