import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ScrollReveal } from "reveal-on-scroll-react";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/SideBar";
import SavingsCard from "./SavingCard/SavingsCard";
import BeatLoader from "react-spinners/BeatLoader";

export default function Savings() {
	const [savings, setSavings] = useState();
	const [title, setTitle] = useState("");
	const [goal, setGoal] = useState("");

	const handle_add_savings = (e) => {
		e.preventDefault();

		if (goal <= 0 || title.length <= 0) {
			return toast.error("Please enter a Title and Amount.");
		}

		const new_savings = { title, goal };

		fetch(`https://api-budget-buddy.web.app/savings`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(new_savings),
		})
			.then((res) => {
				if(!res.ok) {
					throw new Error("Post Requeset Failed")
				}
				return res.json()
			})
			.then((data) => {
				setSavings(data)
				toast.success("New Saving's Goal Added!", {
					icon: "🤑"
				})
			})
			.catch((err) => {
				toast.error(`${err.message}`)
				alert(err.message);
			});
		setTitle(""); 
		setGoal("");
	};

	useEffect(() => {
		// setTimeout(() => {
			fetch(`https://api-budget-buddy.web.app/savings`)
				.then((res) => res.json())
				.then(setSavings)
				.catch((err) => alert(err.message));
		// }, 800);
	}, []);

	return (
		<>
			<div>
				<Navbar />
				<div className="flex bg-white pt-16 md:pt-14">
					<Sidebar />
					{/* entire background */}
					<div className="h-full w-full bg-[#F0FBF3] relative lg:ml-64">
						<div className="pt-6 px-4 h-screen overflow-y-scroll">
							<div className="w-full overflow-hidden">
								<div className="bg-white rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4 shadow-2xl">
									<h3 className="flex justify-center text-lg font-bold">
										Let's Create a Saving's Goal!
									</h3>
									<form onSubmit={handle_add_savings}>
										<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
											<div>
												<label className="text-gray-700">Title</label>
												<input
													value={title}
													onChange={(e) => setTitle(e.target.value)}
													type="text"
													placeholder="Ex:  New Car"
													className="block w-full px-4 py-2 mt-2 text-center text-[#073E38] bg-white border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring"
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
													placeholder="Ex:  $100"
													className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:ring-opacity-40 dark:focus:border-green-500 focus:outline-none focus:ring placeholder:text-center text-center"
												/>
											</div>
										</div>
										<div className="flex justify-center mt-6">
											<button
												type="submit"
												className="px-8 w-[80%] py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#00D884] rounded-md hover:bg-green-500 focus:outline-none drop-shadow-xl"
											>
												Create
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
									savings.map((item) => (
										<ScrollReveal.div threshold={0} animation="slide-in-bottom" >
											<SavingsCard
											key={item._id}
											data={item}
											title={item.title}
											new_goal={item.goal}
											setSavings={setSavings}
										/>
										</ScrollReveal.div>
										
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
