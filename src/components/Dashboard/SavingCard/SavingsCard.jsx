import { useState } from "react";

export default function SavingsCard({ data, title, new_goal, setSavings }) {
	const [progress, setProgress] = useState(0);
	const [goal, setGoal] = useState(new_goal);
	const [amount, setAmount] = useState("");

    const { _id } = data; // this will be used when we create  delete req

	const update_progress = (e) => {
		e.preventDefault();

		if (amount <= 0) {
			return alert("Enter an amount greater than 0");
		}

		const total = Number(amount).toFixed(2); // converting the string amount to a number since toFixed returns a string
		const newProgress = (Number(total) / goal) * 100;
		const updatedProgress = progress + newProgress;

		setProgress(updatedProgress > 100 ? 100 : updatedProgress);
		setAmount("");
	};

    // FIX THIS!!!
    // function UpdateGoal() {
    //     return <h1>{goal - progress}</h1>
    // }

	return (
		<>
			<div className="w-full grid grid-cols-1 mt-10">
				<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4">
					{/* <div className="flex justify-center">
									<img src={savings} alt="" className="w-20 h-20" />
									</div> */}
					{/* add savings goal form */}

					{/* income that adds to savings goal */}
					<form onSubmit={update_progress}>
						<div className="grid grid-cols-1 gap-6 mt-4">
							<div>
								<label className="text-gray-700 font-bold">{title}</label>
                                <div className="flex justify-between">
                                <p className="text-gray-500 text-sm">Your savings goal is: ${new_goal}</p>
                                {/* <p><UpdateGoal/></p> */}
                                </div>
								<input
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									type="number"
									placeholder="$"
									className="text-center w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring placeholder:text-left"
								/>
							</div>
						</div>
						<div className="flex justify-center mt-6">
							<button
                                // onClick={UpdateGoal}
								type="submit"
								disabled={progress >= 100}
								className="px-8 w-[80%] py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none drop-shadow-xl"
							>
								+
							</button>
						</div>
					</form>
					{/* progress bar */}
					<div className="w-full bg-neutral-200 mt-5">
						<div
							className="bg-green-300 p-2 text-center text-xs font-medium leading-none text-primary-100"
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
