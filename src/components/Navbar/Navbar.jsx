import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { HiChartPie } from "react-icons/hi";

import savings from "/src/assets/images/savings.png";

import { UserAuth } from "../../context/AuthContext";

// using useLocation hook to get the current URL path
export function Header() {
	const location = useLocation();
	// grabs the pathname
	const path = location.pathname;
	let path_name = "";

	if (path === "/dashboard") {
		path_name = "Home";
	} else if (path === "/savings") {
		path_name = "Savings";
	} else if (path === "/community") {
		path_name = "Community";
	}

	return <h1>{path_name}</h1>;
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const { googleSignOut, user } = UserAuth();

	let navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await googleSignOut();
			toast.success("Successfully signed out");
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start">
						{/* logo */}
						<Link
							to="/dashboard"
							className="text-xl font-bold flex items-center lg:ml-2.5"
						>
							<span className="flex flex-wrap self-center whitespace-nowrap font-black text-[#46b563] italic tracking-tighter hover:-translate-x-0.5 hover:-translate-y-0.5 duration-300">
								Budget Buddy
								<img src={savings} alt="" className="w-8 h-8" />
							</span>
						</Link>
					</div>

					<div className="font-black text-base">
						<Header />
					</div>

					<div className="flex items-center">
						<div className="flex items-center">
							
								<div>
									<button
										id="dropdownUserAvatarButton"
										data-dropdown-toggle="dropdownAvatar"
										className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-green-300 dark:focus:ring-gray-600"
										type="button"
									>
										<span className="sr-only">Open user menu</span>
										<img
											onClick={() => setIsOpen(!isOpen)}
											className="w-8 h-8 z-10 rounded-full"
											src={`${
												user
													? `${user?.photoUrl}`
													: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
											}`}
											alt="user photo"
										/>
									</button>
								</div>
								{isOpen && (
									<div className="absolute top-40 right-5 bottom-0 flex items-center justify-center">
										{/* Dropdown menu */}
										<div
											id="dropdownAvatar"
											className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
										>
											<div className="px-4 py-3 text-sm text-gray-900 dark:text-white cursor-default">
												{user && <p>{user?.displayName}</p>}												
											</div>
											<ul
												className="py-2 text-sm text-gray-700 dark:text-gray-200"
												aria-labelledby="dropdownUserAvatarButton"
											>
												<li>
													<Link
														to="/dashboard"
														className="flex flex-row px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>														
														Dashboard
													</Link>
												</li>
												<li>
													<Link
														to="/savings"
														className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														Savings
													</Link>
												</li>
												<li>
													<Link
														to="/community"
														className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														Community Forum
													</Link>
												</li>
											</ul>
											<div className="">
												<button
													onClick={handleSignOut}
													className="w-full text-left px-4 py-2 font-semibold text-sm text-red-600 hover:bg-red-50"
												>
													Sign out
												</button>
											</div>
										</div>
									</div>
								)}
							
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
