import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import data from "../../data/chart"

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart () {

    return (
        <div className='flex'>
            <Doughnut 
                data={data}
            />
        </div>
    )
}