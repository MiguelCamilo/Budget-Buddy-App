import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/SideBar";

export default function Savings() {
	const [progress, setProgress] = useState(0);
	const [goal,setGoal] = useState(100);
	const [amount, setAmount] = useState("");

	const update_progress = (e) => {
		if ( amount <= 0 ) {
			return alert("Enter an amount greater than 0") 
		}

		e.preventDefault()
		let saved = 0
		let total = saved + Number(amount).toFixed(2)
		setProgress(((total / goal)) * 100)
		setAmount("")
	};

	return (
		<>
			<div>
				<Navbar />
				<div className="flex bg-white pt-16">
					<Sidebar />
					{/* entire background */}
					<div className="h-full w-full bg-gray-100 relative overflow-y-auto lg:ml-64">
						<div className="pt-6 px-4 h-screen">
							<div className="w-full grid grid-cols-1">
								<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4">
									{/* <div className="flex justify-center">
									<img src={savings} alt="" className="w-20 h-20" />
									</div> */}
									{/* add savings goal form */}

									{/* income that adds to savings goal */}
									<form onSubmit={update_progress}>
										<div className="grid grid-cols-1 gap-6 mt-4">
											<div>
												<label className="text-gray-700 " htmlFor="password">
													Savings:
												</label>
												<input
													value={amount}
													onChange={(e) => setAmount(e.target.value)}
													type="number"
													placeholder="$"
													disabled={progress >= 100}
													className="text-center w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring placeholder:text-left"
												/>
											</div>
										</div>
										<div className="flex justify-center mt-6">
											<button
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
											style={{ width: `${progress}%` }}>
											{/* 25% */}
											{progress}%
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
