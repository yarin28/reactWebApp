import { ComponentType, useMemo } from "react"
import { Scatter } from "react-chartjs-2"
//those are the variables that the chart gets.
interface ChartProps { name: string;cords:any;setCords:any,condition:Function}
/**
 * this is the componet that displays the graph,
 * it renders the points on the graph conditinally
 * according to the callback function.
 * @param props 
 * @returns 
 */
const Chart: ComponentType<ChartProps> = (props) => {
    /**
     * @param context the chart object
     * @returns should it be green or red
     * according to condition of the sensor
     */
    const chooseColorSign = (context: any) => {
        var index = context.dataIndex;
        var value = context.dataset.data[index].y;
        return props.condition(value) ? 'green':'red';

    };
    /**
     * @brief the chart is constructed here.
     * @returns the chart object.
     */
    const chartData = useMemo(() => ({
        labels: 'dataset',
        datasets: [
            {
                label: props.name,
                // the array of x y coordinates 
                data: props.cords,
                borderColor: 'black',
                borderWidth: 2,
                pointBackgroundColor: (context: any) => { return chooseColorSign(context) },
                //this is for the color of the points, it will use the passed function.
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
        <>
            <Scatter data={chartData} />
        </>
    )
}
export default Chart;