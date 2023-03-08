import { useState, useEffect } from "react";
import ExpenseFormList from "../ExpenseForm/ExpenseFormList";
import BeatLoader from "react-spinners/BeatLoader";

export default function ExpenseForm() {
    const [expenses, setExpenses] = useState();
	const [type, setType] = useState();
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");

    const handle_add_expense = (e) => {
		e.preventDefault();

		if (!title && !amount && !date) {
			return alert("Expense's must be filled in.");
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
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
			<div className="flex items-center justify-between mb-4">
				<div className="flex-shrink-0">
					<span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
						Expenses
					</span>
					<h3 className="text-base font-normal text-gray-500">
						Enter your Expenses
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
							    onChange={(e) => setType(e.target.value)}
								type="select"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-red-500 focus:ring-red-500 focus:ring-opacity-40 dark:focus:border-red-500 focus:outline-none focus:ring"
							>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="food">Food</option>
                                <option value="other">Other</option>
                            </select>
						</div>
						<div>
							<label className="text-gray-700">
								Title
							</label>
							<input
								value={title}
                                onChange={(e) => setTitle(e.target.value)}
								type="text"
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
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-red-500 focus:ring-red-500 focus:ring-opacity-40 dark:focus:border-red-500 focus:outline-none focus:ring"
							/>
						</div>
					</div>
					<div className="flex justify-center mt-6">
						<button type="submit" className="px-8 w-[80%] py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none drop-shadow-xl">
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
	);
}

