import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/SideBar";
import SavingsCard from "./SavingCard/SavingsCard";
import BeatLoader from "react-spinners/BeatLoader";

export default function Savings() {
	const [savings, setSavings] = useState();
	const [title, setTitle] = useState("");
	const [goal, setGoal] = useState("");

	const handle_add_savings = (e) => {
		if (goal <= 0 || title.length <= 0) {
			return alert("Please enter a goal and title.")
		}

		e.preventDefault();

		const new_savings = { title, goal };

		fetch(`https://api-budget-buddy.web.app/savings`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(new_savings),
		})
			.then((res) => res.json())
			.then(setSavings)
			.catch((err) => {
				console.error(err);
				alert(err.message);
			});
		setTitle("");
		setGoal("");
	};

	useEffect(() => {
		fetch(`https://api-budget-buddy.web.app/savings`)
			.then((res) => res.json())
			.then(setSavings)
			.catch((err) => alert(err.message));
	}, []);

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
									<h3 className="flex justify-center text-lg font-bold">Let's Create a Saving's Goal!</h3>
									<form onSubmit={handle_add_savings}>
										<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
											<div>
												<label className="text-gray-700">Title</label>
												<input
													value={title}
													onChange={(e) => setTitle(e.target.value)}
													type="text"
													className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring"
												/>
											</div>
											<div>
												<label className="text-gray-700 " htmlFor="password">
													Amount
												</label>
												<input
													value={goal}
													onChange={(e) => setGoal(e.target.value)}
													type="number"
													className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring"
												/>
											</div>
										</div>
										<div className="flex justify-center mt-6">
											<button
												type="submit"
												className="px-8 w-[80%] py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none drop-shadow-xl"
											>
												+
											</button>
										</div>
									</form>
								</div>
								{!savings ? (
									<p className="text-center mt-2">
										{/* loading anim */}
										<BeatLoader
											color="#45cc55"
											size={15}
											speedMultiplier={0.6}
											className="mt-5"
										/>
									</p>
								) : (
									savings.map((saving) => (
										<div key={saving._id}>
											<SavingsCard
												data={saving}
												title={saving.title}
												new_goal={saving.goal}
												setSavings={setSavings}
											/>
										</div>
									))
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
