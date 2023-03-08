import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/SideBar";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

export default function Savings() {
	const [progress, setProgress] = useState(0);
	const [type, setType] = useState();
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");

	return (
		<>
			<div>
				<Navbar />
				<div className="flex bg-white pt-16">
					<Sidebar />
					{/* entire background */}
					<div className="h-full w-full bg-gray-100 relative overflow-y-auto lg:ml-64">
						<div className="pt-6 px-4 h-screen">
							<div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
								{/* add bar chart */}
								<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4">
									<form>
										<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
											<div>
												<label className="text-gray-700 " htmlFor="username">
													Add Income
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
												<label className="text-gray-700">Title</label>
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
											<button
												type="submit"
												className="px-8 w-[80%] py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none drop-shadow-xl"
											>
												+
											</button>
										</div>
									</form>
									{/* progress bar */}
									<div className="w-full bg-neutral-200 mt-5">
										<div
											className="bg-green-300 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
											// style={{width: `${progress}%`}}
											style={{ width: "25%" }}
										>
											25%
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

