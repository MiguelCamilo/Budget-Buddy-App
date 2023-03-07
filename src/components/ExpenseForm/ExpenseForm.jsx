import { useState, useEffect } from "react";
import {
	Card,
	Input,
	Select,
	Typography,
	Option,
} from "@material-tailwind/react";
import ExpenseFormList from "../ExpenseForm/ExpenseFormList";
import BeatLoader from "react-spinners/BeatLoader";
import ExpenseChart from "../ChartJS/ExpenseChart";

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
		<div className="mt-10 bg-[#3D3A53] p-2 md:p-6 rounded-xl">
			<Card
				color="transparent"
				shadow={true}
				className="border border-gray-800 p-5 drop-shadow-2xl shadow-gray-900"
			>
				<Typography variant="h4" className="text-white">
					Expenses
				</Typography>
				<Typography color="gray" className="mt-1 font-normal text-white">
					Enter you expenes.
				</Typography>
				<form
					onSubmit={handle_add_expense}
					className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
				>
					<div className="mb-4 flex flex-col gap-6">
						<Select
							value={type}
							onChange={(e) => setType(e.target.value)}
							label="Type of Expense"
						>
							<Option>Food</Option>
							<Option>Clothes</Option>
						</Select>
						<Input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							size="lg"
							type="text"
							label="Title"
						/>
						<Input
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							type="number"
							size="lg"
							label="Amount"
						/>
					</div>
					<button type="submit" className="mt-6 bg-[#D076FF] text-white text-sm font-semibold uppercase w-full p-3 rounded-lg drop-shadow-md hover:drop-shadow-lg">
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
			</Card>
		</div>
	);
}
