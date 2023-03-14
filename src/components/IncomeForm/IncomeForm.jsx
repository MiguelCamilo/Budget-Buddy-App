import { useState, useEffect } from "react";
import IncomeFormList from "./IncomeFormList";
import BeatLoader from "react-spinners/BeatLoader";
import { ScrollReveal } from "reveal-on-scroll-react";


import { Chart as ChartJS } from "chart.js";
import { ArcElement, Tooltip, Legend, DoughnutController } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

import { incomeTypes } from "../../data/options";

export default function IncomeForm() {
	const [income, setIncome] = useState([]);
	const [date, setDate] = useState("");
	const [amount, setAmount] = useState("");
	const [type, setType] = useState();

	const [chartInstance, setChartInstance] = useState(null);

	const handle_add_income = (e) => {
		e.preventDefault();
		if (!amount) {
			return alert("Please enter an amount for your income");
		}

		const new_income = {
			type: type,
			date: date,
			amount: amount,
		};

		fetch(`https://api-budget-buddy.web.app/income`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(new_income),
		})
			.then((res) => res.json())
			.then(setIncome)
			.catch((err) => {
				console.error(err);
				alert(err.message);
			});

		setDate("");
		setAmount("");
	};

	useEffect(() => {
		fetch(`https://api-budget-buddy.web.app/income`)
			.then((res) => res.json())
			.then(setIncome)
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		if (income.length > 0) {
			if (chartInstance) {
				chartInstance.destroy();
			}
			const ctx = document.getElementById("myDoughnutChart2");
			setChartInstance(
				new ChartJS(ctx, {
					type: "doughnut",
					data: {
						labels: income.map((item) => item.type),
						datasets: [
							{
								label: "Income $",
								data: income.map((item) => item.amount),
								backgroundColor: [
									"#FF6384",
									"#36A2EB",
									"#FFCE56",
									"#1D7A46",
									"#A2423D",
									"#C0B283",
									"#655643",
								],
							},
						],
					},
				})
			);
		}
	}, [income]);

	return (
		<>
			<ScrollReveal.div threshold={0} animation="slide-in-bottom" className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
				<div className="flex items-center justify-between mb-4">
					<div className="flex-shrink-0">
						<h3 className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
							Income
						</h3>
						<h5 className="text-base font-normal text-gray-500">
							Enter you Income
						</h5>
					</div>
				</div>
				<section className="max-w-4xl p-6 pb mx-auto bg-white rounded-md shadow-md ">
					<form onSubmit={handle_add_income} className="">
						<div className="mb-4 flex flex-col gap-6">
							<label className="text-gray-700">Income Type</label>
							<select
								value={type}
								onChange={(e) => setType(e.target.value)}
								required
								className="border border-gray-200 rounded-md p-2 focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring"
							>
								{incomeTypes.map((type) => (
									<option key={type} value={type}>
										{type}
									</option>
								))}
							</select>
							<input
								value={date}
								onChange={(e) => setDate(e.target.value)}
								size="lg"
								type="date"
								className="border border-gray-200 rounded-md p-2 focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring"
							/>
							<label className="text-gray-700">Amount</label>
							<input
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
								type="number"
								size="lg"
								placeholder="Ex:  $100"
								className="border border-gray-200 rounded-md p-2 focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring text-center placeholder:text-center"
							/>
						</div>
						<button
							type="submit"
							className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none drop-shadow-xl"
						>
							+
						</button>
					</form>
					{!income ? (
						<p className="text-center mt-2">
							<BeatLoader
								color="#45cc55"
								size={15}
								speedMultiplier={0.6}
								className="mt-5"
							/>
						</p>
					) : (
						income.map((data) => (
							<IncomeFormList
								key={data._id}
								data={data}
								date={data.date}
								amount={data.amount}
								setIncome={setIncome}
							/>
						))
					)}
				</section>
			</ScrollReveal.div>

			<ScrollReveal.div threshold={0} animation="slide-in-bottom" className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
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
								<div>
									{!income ? (
										<h2>Loading...</h2>
									) : (
										<canvas
											id="myDoughnutChart2"
											key="myDoughnutChart2"
										></canvas>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</ScrollReveal.div>
		</>
	);
}
