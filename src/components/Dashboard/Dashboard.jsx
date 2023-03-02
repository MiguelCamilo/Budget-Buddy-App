import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import IncomeForm from "../IncomeForm/IncomeForm";

export default function Dashboard() {
	const [expenses, setExpenses] = useState();

	// useEffect(() => {
	// 	fetch(`http://localhost:3030/expenses`)
	// 		.then((res) => res.json())
	// 		.then(setExpenses)
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		<section className="flex  overflow-hidden bg-[#13e372]">
			<Navbar />
			<main className="h-screen w-screen">
				<div className="pt-6 px-4">
					<div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 content-end">
						{/* expense form */}
						<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
							<div className="mb-4 flex items-center justify-between">
								<div>
								
								</div>
								<div className="flex-shrink-0">

								</div>
							</div>
							<div className="flex flex-col mt-8">
								<div className="overflow-x-auto rounded-lg">
									<div className="align-middle inline-block min-w-full">
										<div className="shadow overflow-hidden sm:rounded-lg">

										</div>
									</div>
								</div>
							</div>
						</div>
						{/* income form */}
						<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
							<div className="mb-4 flex items-center justify-between">
								<div>
								
								</div>
								<div className="flex-shrink-0">

								</div>
							</div>
							<div className="flex flex-col mt-8">
								<div className="overflow-x-auto rounded-lg">
									<div className="align-middle inline-block min-w-full">
										<div className="shadow overflow-hidden sm:rounded-lg">

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

{
	/* expense form */
}
{
	/* <form action="">
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
</form> */
}
