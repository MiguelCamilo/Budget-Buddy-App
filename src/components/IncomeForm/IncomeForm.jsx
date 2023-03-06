import { useState, useEffect } from "react";
import IncomeFormList from "./IncomeFormList";
import BeatLoader from "react-spinners/BeatLoader";

export default function IncomeForm() {
	const [income, setIncome] = useState();
	const [date, setDate] = useState("");
	const [amount, setAmount] = useState("");

	const handle_add_income = (e) => {
		e.preventDefault();
		if (!amount) {
			return alert("Please enter an amount for your income");
		}

		const new_income = {
			date: date,
			amount: amount,
		};

		fetch(`http://localhost:3030/income`, {
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
		fetch(`http://localhost:3030/income`)
			.then((res) => res.json())
			.then(setIncome)
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="p-4 lg:w-1/2 md:w-full">
			<h2 className="text-[#3D3A53] dark:text-[#F9EFFF] text-lg title-font font-extrabold ml-1">Income</h2>
			<div className="flex border-2 rounded-lg border-[#3D3A53] dark:border-[#F9EFFF] p-8 sm:flex-row flex-col">
				<div className="flex-grow ">
					<form onSubmit={handle_add_income} className="mb-2">
						<label className="mx-2 text-[#3D3A53] dark:text-[#F9EFFF]">Date</label>
						<input
							value={date}
							onChange={(e) => setDate(e.target.value)}
							type="date"
							placeholder="Date"
							className="rounded-lg  bg-transparent border-2 border-[#3D3A53] dark:border-[#F9EFFF] p-2 text-center"
						/>

						<label className="mx-2 text-[#3D3A53] dark:text-[#F9EFFF]">Amount</label>
						<input
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							type="text"
							placeholder="Amount"
							className="rounded-lg bg-transparent border-2 border-[#3D3A53] dark:border-[#F9EFFF] p-2 text-center"
						/>
						<button
							type="submit"
							className="bg-[#3D3A53] dark:bg-purple-500 hover:bg-purple-400 p-2 mt-5 text-white rounded-xl w-full drop-shadow-2xl"
						>
							Add
						</button>
					</form>
					{!income ? (
						<p className="text-center mt-2">
							<BeatLoader
								color="#b765e6"
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
				</div>
			</div>
		</div>
	);
}
