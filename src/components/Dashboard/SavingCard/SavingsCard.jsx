import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GiPiggyBank } from "react-icons/gi";
import { toast } from "react-toastify";

export default function SavingsCard({ data, title, new_goal, setSavings }) {
	const { _id } = data; 

	const [progress, setProgress] = useState(() => {
		return Number(localStorage.getItem(`progress-${_id}`)) || 0;
	});
	const [goal, setGoal] = useState(new_goal);
	const [amount, setAmount] = useState("");

	const handle_delete_expense = () => {
		fetch(`https://api-budget-buddy.web.app/savings/${_id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setSavings(data)
				toast.error("Savings Goal Deleted!", {
					icon: "❌"
				})
			})
			.catch((err) => alert(err.message));
	};


	// this updates the progress bar num and width
	const update_progress = (e) => {
		e.preventDefault();

		if (amount === 0) {
			return toast.error("Enter an amount greater than zero.");
		}

		const total = Number(amount).toFixed(2); // converting the string amount to a number since toFixed returns a string
		const newProgress = (Number(total) / goal) * 100;
		const updatedProgress = progress + newProgress;

		setProgress(updatedProgress > 100 ? 100 : updatedProgress);
		setAmount("");
	};

	useEffect(() => {
		// saving the progress in local storage
		localStorage.setItem(`progress-${_id}`, progress);
	}, [progress, _id]); // progress is stored by the id it's assigned on the backend

	return (
		<>
			<div className="w-full grid grid-cols-1 mt-10">
				<div className="bg-white rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4">
					<label className="text-gray-700 font-bold capitalize">{title}</label>

					<div className="flex justify-between">
						<p className="text-gray-500 text-sm">
							Your savings goal is: ${new_goal.toLocaleString()} 
							{/* FIX THIS and you have {new_goal - new_amount} */}
						</p>
						<button onClick={handle_delete_expense}>
							<RiDeleteBin5Line className="flex justify-end text-2xl text-white bg-red-500 p-1 rounded-sm hover:drop-shadow-2xl hover:-translate-x-0.5 hover:-translate-y-0.5 duration-300" />
						</button>
					</div>
					<form onSubmit={update_progress}>
						<div className="grid grid-cols-1 gap-6 mt-4">
							<div>
								<div className="flex justify-end"></div>
								<input
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									type="number"
									placeholder="Enter how much you're looking to save."
									className="text-center w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring placeholder:text-center"
								/>
							</div>
						</div>
						<div className="flex justify-center mt-6">
							<button
								type="submit"
								disabled={progress >= 100}
								className="flex justify-center marker:px-8 w-[10%] py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#00D884] rounded-md hover:bg-green-400 focus:outline-none drop-shadow-xl"
							>
								<GiPiggyBank />
							</button>
						</div>
					</form>
					{/* progress bar */}
					<div className="w-full bg-neutral-200 mt-5">
						<div
							className="bg-[#00D884] p-2 text-center text-xs font-medium leading-none text-primary-100"
							style={{ width: `${progress}%` }}
						>
							{/* 25% */}
							{Math.floor(progress.toFixed(2))}%
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
