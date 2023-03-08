import { useState, useEffect } from "react";
import IncomeFormList from "./IncomeFormList";
import BeatLoader from "react-spinners/BeatLoader";

export default function IncomeForm() {
	const [income, setIncome] = useState();
	const [date, setDate] = useState("");
	const [amount, setAmount] = useState("");
	const [type, setType] = useState();

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

	return (
		<div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
			<div className="flex items-center justify-between mb-4">
				<div className="flex-shrink-0">
					<h3 className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
						Income
					</h3>
					<h5 className="text-base font-normal text-gray-500">
						Enter you Income
					</h5>
				</div>
				<a
					href="#"
					className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
				>
					{/* change this to a modal */}Modal
				</a>
			</div>
			<section className="max-w-4xl p-6 pb mx-auto bg-white rounded-md shadow-md ">
				<form onSubmit={handle_add_income} className="">
					<div className="mb-4 flex flex-col gap-6">
						<select
							value={type}
							onChange={(e) => setType(e.target.value)}
							label="Type of Income"
							className="border border-gray-200 rounded-md p-2 focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring"
						>
							<option>Work</option>
							<option>Other</option>
						</select>
						<input
							value={date}
							onChange={(e) => setDate(e.target.value)}
							size="lg"
							type="date"
							className="border border-gray-200 rounded-md p-2 focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring"
						/>
						<input
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							type="number"
							size="lg"
							className="border border-gray-200 rounded-md p-2 focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring"
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
		</div>
	);
}
