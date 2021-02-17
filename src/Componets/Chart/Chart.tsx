
import React, { ComponentType, useEffect, useMemo, useRef, useState } from "react"
import { Scatter } from "react-chartjs-2"
import { Button } from "@material-ui/core";
import { w3cwebsocket as WebSocket } from 'websocket'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
const Chart: ComponentType = () => {

    const [xyCords, xyCordSet] = useState([{
        x: -10,
        y: 0
    }, {
        x: 0,
        y: 10
    }, {
        x: 10,
        y: 5
    }]);

    const client = useRef<null | WebSocket>(null);
    useEffect(() => {
        client.current = new WebSocket("ws://localhost:8090/ws");
    }, []);
    useEffect(() => {
        if (client.current)
            client.current.onmessage = (message: any) => {
                const obj = JSON.parse(message.data);
                console.log(obj);
                xyCordSet([...xyCords, { x: obj[1].x, y: obj[1].y }]);
            };
    }, [xyCords]);
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
        xyCordSet(oldArray => [...oldArray, xy]);
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
                data: xyCords,
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
    }), [xyCords])
    return (
        <div>
            <Scatter data={chartData} />
            <Button onClick={() => add10XY()}>test</Button>
        </div >
    )
}




export default Chart;