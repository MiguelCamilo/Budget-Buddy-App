import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ExpenseFormList from "../ExpenseFormList/ExpenseFormList";
import IncomeForm from "../IncomeForm/IncomeForm";

export default function Dashboard() {
	const [expenses, setExpenses] = useState();

	useEffect(() => {
		fetch(`http://localhost:3030/expenses`)
			.then((res) => res.json())
			.then(setExpenses)
			.catch((err) => console.log(err));
	}, []);

	return (
		<section className="flex bg-[#13e372]">
			<Navbar />
			{/* form container */}
			<div>
				{/* expense form */}
				<form action="">
					<div
						className="flex flex-row pb-52 px-10 mt-5 ml-5 space-y-5 md:space-x-9"
						style={{ border: "1px solid black" }}
					>
						<input
							type="date"
							placeholder="Date"
							className="rounded-lg p-1 mt-4"
						/>

						<label>Expense</label>
						<input
							type="text"
							placeholder="Expense"
							className="rounded-lg p-1"
						/>

						<label>Amount</label>
						<input
							type="text"
							placeholder="Amount"
							className="rounded-lg p-1"
						/>
						{!expenses ? (
							<p>Loading...</p>
						) : (
							expenses.map((expense) => (
								<ExpenseFormList
									key={expense.id}
									date={expense.date}
									title={expense.title}
									amount={expense.amount}
								/>
							))
						)}
					</div>
				</form>
			</div>
		</section>
	);
}
