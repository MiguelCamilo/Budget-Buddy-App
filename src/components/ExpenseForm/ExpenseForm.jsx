import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import ExpenseFormList from "../ExpenseForm/ExpenseFormList";
import BeatLoader from "react-spinners/BeatLoader";

import { Chart as ChartJS } from "chart.js";
import { ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

import { expenseTypes } from "../../data/options";

export default function ExpenseForm() {
	const [expenses, setExpenses] = useState([]);
	const [type, setType] = useState();
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [chartInstance, setChartInstance] = useState(null);

	const handle_add_expense = (e) => {
		e.preventDefault();

		if (!title && !amount && !date) {
			return toast.error("Expense's must be filled in.");
		}

		const new_expense = { type, title, amount };

		fetch(`https://api-budget-buddy.web.app/expenses`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(new_expense),
		})
			.then((res) => res.json())
			.then(setExpenses)
			.catch((err) => {
				console.error(err);
				alert(err.message);
			});
		setTitle("");
		setAmount("");
	};
	

	useEffect(() => {
			fetch(`https://api-budget-buddy.web.app/expenses`)
				.then((res) => res.json())
				.then(setExpenses)
				.catch((err) => alert(err));
	}, []);


	//! expense chart useEffect
	useEffect(() => {
		if (expenses.length > 0) {
			if (chartInstance) {
				chartInstance.destroy();
			}
			const ctx = document.getElementById("myDoughnutChart");
			setChartInstance(
				new ChartJS(ctx, {
					type: "doughnut",
					data: {
						labels: expenses.map((item) => item.type),
						datasets: [
							{
								label: "Expenses $",
								data: expenses.map((item) => item.amount),
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
	}, [expenses]);


	return (
		<>
		<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
			<div className="flex items-center justify-between mb-4">
				<div className="flex-shrink-1">
					<span className="text-2xl sm:text-3xl leading-none font-black  text-gray-900">
						Expenses
					</span>
					<h3 className="text-base font-normal text-gray-500">
						Track your expenses easily by entering them in the form below
					</h3>
				</div>
			</div>
			<section className="max-w-4xl p-6 pb mx-auto bg-white rounded-md shadow-md ">
				{/* form */}
				<form onSubmit={handle_add_expense}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
						<div>
							<label className="text-gray-700 " htmlFor="username">
								Expense Type
							</label>
							<select
								value={type}
								required
								onChange={(e) => setType(e.target.value)}
								type="select"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-red-500 focus:ring-red-500 focus:ring-opacity-40 dark:focus:border-red-500 focus:outline-none focus:ring"
							>
							{expenseTypes.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}	
							</select>
						</div>
						<div>
							<label className="text-gray-700">Title</label>
							<input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								type="text"
								placeholder="Ex:  Food"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-red-500 focus:ring-red-500 focus:ring-opacity-40 dark:focus:border-red-500 focus:outline-none focus:ring"
							/>
						</div>
						<div>
							<label className="text-gray-700 " htmlFor="password">
								Amount
							</label>
							<input
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
								type="number"
								placeholder="Ex:  $20"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-red-500 focus:ring-red-500 focus:ring-opacity-40 dark:focus:border-red-500 focus:outline-none focus:ring"
							/>
						</div>
					</div>
					<div className="flex justify-center mt-6">
						<button
							type="submit"
							className="px-8 w-[80%] py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none drop-shadow-xl"
						>
							+
						</button>
					</div>
				</form>
				{!expenses ? (
					<p className="text-center mt-2">
						{/* loading anim */}
						<BeatLoader
							color="#d63636"
							size={15}
							speedMultiplier={0.6}
							className="mt-5"
						/>
					</p>
				) : (
					expenses.map((expense) => (
						<div key={expense._id}>
							<ExpenseFormList
								data={expense}
								title={expense.title}
								amount={expense.amount}
								setExpenses={setExpenses}
							/>
						</div>
					))
				)}
			</section>
		</div>

		{/* expense chart */}
		<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
		<div className="mb-4 flex items-center justify-between">
				<div>
					<h3 className="text-xl font-bold text-gray-900 mb-2">
						Expense Chart
					</h3>
					<span className="text-base font-normal text-gray-500">
						View your Expenses in an easier format
					</span>
				</div>
				<div className="flex-shrink-0">
					{/* modal */}
				</div>
			</div>
			<div className="flex flex-col mt-8">
				<div className="overflow-x-auto rounded-lg">
					<div className="align-middle inline-block min-w-full">
						<div className="h-[20rem] w-[20rem]  md:h-[23rem] md:w-[23rem] mx-1/2">
							<div>
								{!expenses 
                                    ? <h1>Loading...</h1>
                                    : <canvas id="myDoughnutChart" key="myDoughnutChart"></canvas>
                                }
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</>
	);
}
