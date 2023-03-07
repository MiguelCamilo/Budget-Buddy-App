import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import data from "../../data/chart";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function IncomeChart() {
	return (

		<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
			<div className="mb-4 flex items-center justify-between">
				<div>
					<h3 className="text-xl font-bold text-gray-900 mb-2">
						Income Chart
					</h3>
					<span className="text-base font-normal text-gray-500">
						View your Income in an easier format
					</span>
				</div>
				<div className="flex-shrink-0">
					<a
						href="#"
						className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
					>
						{/* change this to a modal */}
					</a>
				</div>
			</div>
			<div className="flex flex-col mt-8">
				<div className="overflow-x-auto rounded-lg">
					<div className="align-middle inline-block min-w-full">
						<div className="h-[18rem] w-[18rem]  md:h-[30rem] md:w-[30rem] mx-1/2">
							<Doughnut data={data} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}