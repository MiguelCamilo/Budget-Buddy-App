import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ExpenseFormList from "../ExpenseForm/ExpenseFormList";

export default function Dashboard() {
	const [expenses, setExpenses] = useState();
	// preventing default
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const handleAddExpense = (e) => {
		e.preventDefault()

		const newExpense = {
			date: date,
			title: title,
			amount: amount,
		}
		
		fetch(`http://localhost:3030/expenses`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newExpense)
		})
		.then(res => res.json())
		.then(setExpenses)
		.catch(err => {
			console.error(err)
			alert(err.message)
		})

	}

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
		<section className="flex  overflow-hidden bg-[#13e372]">
			<Navbar />
			<main className="h-screen w-screen">
				<div className="pt-6 px-4">
					<div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 content-end">
						{/* expense form */}
						<form onSubmit={handleAddExpense}>
							<div className="bg-[#f4f5f6] shadow rounded-lg p-4 sm:p-6 xl:p-8">
								<div className="mb-4 flex items-center justify-between">
									<div>
										<h2>Expenses</h2>
									</div>
									<div className="flex-shrink-0">
										{/* form input */}
										<label htmlFor="date">Date</label>
										<input
											type="date"
											className="rounded-md border-2 border-black ml-1 text-center"
											value={date}
											onChange={e => setDate(e.target.value)}
										/>
									</div>
								</div>
								<div className="flex flex-col mt-8">
									<div className="overflow-x-auto rounded-lg">
										<div className="align-middle inline-block min-w-full">
											<div className="shadow overflow-hidden sm:rounded-lg space-x-5 flex justify-center">
												{/* form inputs */}
												<label className="mt-3" htmlFor="title">Title</label>
												<input
													type="text"
													placeholder="Title"
													className="rounded-md border-2 border-black text-center"
													value={title}
													onChange={e => setTitle(e.target.value)}
												/>

												<label className="mt-3" htmlFor="amount">Amount</label>
												<input
													type="text"
													placeholder="Amount"
													className="rounded-md border-2 border-black text-center"
													value={amount}
													onChange={e => setAmount(e.target.value)}
												/>
												<button type="submit" className="bg-[#13e372] p-2 mt-1 rounded-lg hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-xl duration-300 ">Click</button>
											</div>
										</div>
									</div>

									{/* ExpenseFormList comp here */}
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
						</form>

						{/* income form */}
						<div className="bg-[#f4f5f6] shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
							<div className="mb-4 flex items-center justify-between">
								<div></div>
								<div className="flex-shrink-0"></div>
							</div>
							<div className="flex flex-col mt-8">
								<div className="overflow-x-auto rounded-lg">
									<div className="align-middle inline-block min-w-full">
										<div className="shadow overflow-hidden sm:rounded-lg"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* second row */}
					<div className="bg-[#f4f5f6] shadow rounded-lg p-4 sm:p-6 xl:p-8 mt-10">
							<div className="mb-4 flex items-center justify-between">
								<div>Charts</div>
								<div className="flex-shrink-0"></div>
							</div>
							<div className="flex flex-col mt-8">
								<div className="overflow-x-auto rounded-lg">
									<div className="align-middle inline-block min-w-full">
										<div className="shadow overflow-hidden sm:rounded-lg"></div>
									</div>
								</div>
							</div>
						</div>
				</div>
			</main>
		</section>
	);
}
