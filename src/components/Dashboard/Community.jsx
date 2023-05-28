import { useState, useEffect } from "react";
import { Label, TextInput, Textarea } from "flowbite-react";
import { toast } from "react-toastify";
import { ScrollReveal } from "reveal-on-scroll-react";
import BeatLoader from "react-spinners/BeatLoader";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import CommunityCard from "./CommunityCard/CommunityCard";

export default function Community() {
	const [title, setTitle] = useState("");
	const [info, setInfo] = useState("");
	const [post, setPost] = useState();
	const timestamp = new Date()

	const handle_add_post = (e) => {
		e.preventDefault();

		const post = { title, info, timestamp };
		fetch(`https://api-budget-buddy.web.app/forum`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		})
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
				toast.success("Post added successfully.");
				setTitle("");
				setInfo("");
			})
			.catch((err) => toast.error(err));
	};

	useEffect(() => {
		fetch(`https://api-budget-buddy.web.app/forum`)
			.then((res) => res.json())
			.then(setPost)
			.catch((err) => toast.error(err));
	}, []);

	return (
		<>
			<div>
				<Navbar />
				<div className="flex bg-white pt-16 md:pt-14">
					<Sidebar />
					<div className="h-full w-full bg-[#ffe6c8] relative lg:ml-64">
						<div className="pt-6 px-4 h-screen overflow-y-scroll">
							<div className="flex justify-center items-center w-full overflow-hidden">
								<div className="flex justify-center bg-white w-full shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4">
									<div className="w-full">
										<h2 className="text-2xl font-bold text-center">
											Add a new post
										</h2>
										<form onSubmit={handle_add_post}>
											<div className="mb-2 block">
												<Label htmlFor="small" value="Title of Post" />
											</div>
											<TextInput
												id="small"
												placeholder="Ex: How to budget?"
												className="capitalize"
												type="text"
												sizing="sm"
												value={title}
												onChange={(e) => setTitle(e.target.value)}
											/>
											<div id="textarea">
												<div className="mb-2 block">
													<Label htmlFor="comment" value="Post" />
												</div>
												<Textarea
													id="comment"
													placeholder="What will this topic be about?"
													required={true}
													rows={4}
													value={info}
													onChange={(e) => setInfo(e.target.value)}
												/>
											</div>
											<div className="flex justify-center mt-4">
												<button
													className="bg-[#FAB76A] w-[30%] hover:bg-[#f8ca95] p-2 rounded-lg text-white font-semibold"
													type="submit"
												>
													+ Start a New Topic
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
							{/* map through post */}

							{!post ? (
								<p className="text-center mt-2">
									<BeatLoader
										color="#FAB76A"
										size={15}
										speedMultiplier={0.6}
										className="mt-5"
									/>
								</p>
							) : (
								post.map((data) => (
									<ScrollReveal.div threshold={0} key={data._id}>
										<CommunityCard
											data={data}
											title={data.title}
											info={data.info}
											timestamp={data.timestamp}
										/>
									</ScrollReveal.div>
								))
							)}
						</div>
					</div>
				</div>
			</div>        
		</>
	);
}
