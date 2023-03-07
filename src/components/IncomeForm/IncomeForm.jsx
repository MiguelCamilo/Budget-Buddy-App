// import { useState, useEffect } from "react";
// import IncomeFormList from "./IncomeFormList";
// import BeatLoader from "react-spinners/BeatLoader";
// import {
// 	Card,
// 	Input,
// 	Typography,
// 	Select,
// 	Option,
// } from "@material-tailwind/react";

// export default function IncomeForm() {
// 	const [income, setIncome] = useState();
// 	const [date, setDate] = useState("");
// 	const [amount, setAmount] = useState("");
// 	const [type, setType] = useState();

// 	const handle_add_income = (e) => {
// 		e.preventDefault();
// 		if (!amount) {
// 			return alert("Please enter an amount for your income");
// 		}

// 		const new_income = {
// 			date: date,
// 			amount: amount,
// 		};

// 		fetch(`http://localhost:3030/income`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(new_income),
// 		})
// 			.then((res) => res.json())
// 			.then(setIncome)
// 			.catch((err) => {
// 				console.error(err);
// 				alert(err.message);
// 			});

// 		setDate("");
// 		setAmount("");
// 	};

// 	useEffect(() => {
// 		fetch(`http://localhost:3030/income`)
// 			.then((res) => res.json())
// 			.then(setIncome)
// 			.catch((err) => console.error(err));
// 	}, []);

// 	return (
// 		<div className="mt-10 ml-0 bg-[#3D3A53] p-2 md:p-6 rounded-xl">
// 			<Card
// 				color="transparent"
// 				shadow={true}
// 				className=" border border-gray-800 p-5 drop-shadow-2xl shadow-gray-900"
// 			>
// 				<Typography variant="h4" className="text-white">
// 					Income
// 				</Typography>
// 				<Typography color="gray" className="mt-1 font-normal text-white">
// 					Enter you income.
// 				</Typography>
// 				<form
// 					onSubmit={handle_add_income}
// 					className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
// 				>
// 					<div className="mb-4 flex flex-col gap-6">
// 						<Select
// 							value={type}
// 							onChange={(e) => setType(e.target.value)}
// 							label="Type of Income"
// 						>
// 							<Option>Work</Option>
// 							<Option>Other</Option>
// 						</Select>
// 						<Input
// 							value={date}
// 							onChange={(e) => setDate(e.target.value)}
// 							size="lg"
// 							type="date"
// 						/>
// 						<Input
// 							value={amount}
// 							onChange={(e) => setAmount(e.target.value)}
// 							type="number"
// 							size="lg"
// 							label="Amount"
// 						/>
// 					</div>
// 					<button
// 						type="submit"
// 						className="mt-6 bg-[#D076FF] text-white text-sm font-semibold uppercase w-full p-3 rounded-lg drop-shadow-md hover:drop-shadow-lg"
// 					>
// 						Add
// 					</button>
// 				</form>
// 				{!income ? (
// 					<p className="text-center mt-2">
// 						<BeatLoader
// 							color="#b765e6"
// 							size={15}
// 							speedMultiplier={0.6}
// 							className="mt-5"
// 						/>
// 					</p>
// 				) : (
// 					income.map((data) => (
// 						<IncomeFormList
// 							key={data._id}
// 							data={data}
// 							date={data.date}
// 							amount={data.amount}
// 							setIncome={setIncome}
// 						/>
// 					))
// 				)}
// 			</Card>
// 		</div>
// 	);
// }
