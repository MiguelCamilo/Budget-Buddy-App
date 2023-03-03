import { useEffect, useState } from "react";
import SideBar from "../Navbar/SideBar";
import ExpenseFormList from "../ExpenseForm/ExpenseFormList";
import "./dashboard.css";

export default function Dashboard() {
	const [expenses, setExpenses] = useState();
	// preventing default
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const handleAddExpense = (e) => {
		e.preventDefault();

		if (!title && !amount && !date) {
			return alert("Expense's must be filled in.");
		}

		const newExpense = {
			date: date,
			title: title,
			amount: amount,
		};

		fetch(`http://localhost:3030/expenses`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newExpense),
		})
			.then((res) => res.json())
			.then(setExpenses)
			.catch((err) => {
				console.error(err);
				alert(err.message);
			});
		setTitle("");
		setAmount("");
		setDate("");
	};

	// const handleAddIncome = () => {
	// 	e.preventDefault()

	// }

	useEffect(() => {
		fetch(`http://localhost:3030/expenses`)
			.then((res) => res.json())
			.then(setExpenses)
			.catch((err) => console.log(err));
	}, []);

	return (
		<section className="flex overflow-hidden bg-[#2e3647]">
			<SideBar />
			{/* form containers */}
			<div className="flex-grow container px-6 py-10 color-gr rounded-3xl mx-5 my-5">
				<section className="text-gray-400 bg-gray-900 body-font rounded-2xl">
					<div className="container px-5 py-24 flex justify-center">
						<div className="flex flex-wrap -m-4">
							<div className="p-4 lg:w-1/2 md:w-full">
								<h2 className="text-white text-lg title-font font-medium ml-1">
									Expenses
								</h2>
								<div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
									<div className="flex-grow ">
										<form onSubmit={handleAddExpense} className="mb-2">
											{/* <label className="mr-2">Date</label>
											<input
												type="date"
												className="rounded-lg bg-transparent border border-black p-1"
											/> */}

											<label className="mx-2">Title</label>
											<input
												value={title}
												onChange={(e) => setTitle(e.target.value)}
												type="text"
												placeholder="Title"
												className="rounded-lg bg-transparent border border-white p-2 text-center"
											/>

											<label className="mx-2">Amount</label>
											<input
												value={amount}
												onChange={(e) => setAmount(e.target.value)}
												type="text"
												placeholder="Amount"
												className="rounded-lg bg-transparent border border-white p-2 text-center"
											/>
											<button
												type="submit"
												className="bg-purple-500 hover:bg-purple-400 p-2 mt-5 text-white rounded-xl w-full"
											>
												Add
											</button>
										</form>
										{!expenses ? (
											<p className="text-center mt-2">Loading...</p>
										) : (
											expenses.map((expense) => (
												<ExpenseFormList
													key={expense._id}
													date={expense.date}
													title={expense.title}
													amount={expense.amount}
												/>
											))
										)}
									</div>
								</div>
							</div>

							<div className="p-4 lg:w-1/2 md:w-full">
								<h2 className="text-white text-lg title-font font-medium ml-1">
									Income
								</h2>
								<div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
									<div className="flex-grow ">
										<form action="" className="mb-2">
											{/* <label className="mr-2">Date</label>
											<input
												type="date"
												className="rounded-lg bg-transparent border border-black p-1"
											/> */}

											<label className="mx-2">Title</label>
											<input
												// value={title}
												// onChange={(e) => setTitle(e.target.value)}
												type="text"
												placeholder="Title"
												className="rounded-lg bg-transparent border border-white p-2 text-center"
											/>

											<label className="mx-2">Amount</label>
											<input
												// value={amount}
												// onChange={(e) => setAmount(e.target.value)}
												type="text"
												placeholder="Amount"
												className="rounded-lg bg-transparent border border-white p-2 text-center"
											/>
										</form>
										{/* {!expenses ? (
											<p className="text-center mt-2">Loading...</p>
										) : (
											expenses.map((expense) => (
												<ExpenseFormList
													key={expense._id}
													date={expense.date}
													title={expense.title}
													amount={expense.amount}
												/>
											))
										)} */}
										<button
											type="submit"
											className="bg-purple-500 hover:bg-purple-400 p-2 mt-5 text-white rounded-xl w-full"
										>
											Add
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
