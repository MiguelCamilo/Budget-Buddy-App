import { useEffect, useState } from "react";
import ExpenseFormList from "../ExpenseForm/ExpenseFormList";
import BeatLoader from "react-spinners/BeatLoader";
import ExpenseChart from "../ChartJS/ExpenseChart";

export default function ExpenseForm() {
	const [expenses, setExpenses] = useState();
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");


	const handle_add_expense = (e) => {
		e.preventDefault();

		if (!title && !amount && !date) {
			return alert("Expense's must be filled in.");
		}

		const new_expense = {
			title: title,
			amount: amount,
		};

		fetch(`http://localhost:3030/expenses`, {
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
		fetch(`http://localhost:3030/expenses`)
			.then((res) => res.json())
			.then(setExpenses)
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="p-4 lg:w-1/2 md:w-full">
			<h2 className="text-[#3D3A53] dark:text-[#F9EFFF] text-lg title-font font-extrabold ml-1">
				Expenses
			</h2>
			<div className="flex border-2 rounded-lg border-[#3D3A53] dark:border-[#F9EFFF] p-8 sm:flex-row flex-col">
				<div className="flex-grow ">
					<form onSubmit={handle_add_expense} className="mb-2">
						<label className="mx-2 text-[#3D3A53] dark:text-[#F9EFFF]">Title</label>
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							type="text"
							placeholder="Title"
							className="rounded-lg text-[#3D3A53] dark:text-[#F9EFFF] bg-transparent border-2 border-[#3D3A53] dark:border-[#F9EFFF] p-2 text-center"
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
					{!expenses ? (
						<p className="text-center mt-2">
							{/* loading anim */}
							<BeatLoader
								color="#b765e6"
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
				</div>
			</div>
		</div>
	);
}
