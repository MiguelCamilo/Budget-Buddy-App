import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import savings from "/src/assets/images/savings.png";
import MobileDropDown from "./MobileDropDown";

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
	const [isOpen, setIsOpen] = useState(false)

	const { googleSignOut, user } = UserAuth();

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
						<div className="hidden lg:flex items-center">
							<div className="-mb-2">
								<div>
									{/* <FiSettings className="text-2xl hover:text-gray-500 hover:-translate-x-0.5 hover:-translate-y-0.5 duration-300" /> */}
									<button
										id="dropdownUserAvatarButton"
										data-dropdown-toggle="dropdownAvatar"
										className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
										type="button"
									>
										<span className="sr-only">Open user menu</span>
										<img
											onClick={() => setIsOpen(!isOpen)}
											className="w-8 h-8 z-10 rounded-full"
											src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
											alt="user photo"
										/>
									</button>
								</div>
								{isOpen && (
										<div className="absolute top-44 right-0 bottom-0 flex items-center justify-center">
											{/* Dropdown menu */}
											<div
												id="dropdownAvatar"
												className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
											>
												<div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
													<div>Bonnie Green</div>
													<div className="font-medium truncate">
														name@flowbite.com
													</div>
												</div>
												<ul
													className="py-2 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="dropdownUserAvatarButton"
												>
													<li>
														<a
															href="#"
															className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Dashboard
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Settings
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Earnings
														</a>
													</li>
												</ul>
												<div className="py-2">
													<a
														href="#"
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Sign out
													</a>
												</div>
											</div>
										</div>
									)}
							</div>							
						</div>					
						<a className="lg:hidden sm:inline-flex ml-5 text-black hover:bg-gray-100 font-medium rounded-lg text-3xl p-2 text-center items-center mr-3">
							{/* drop down menu */}
							<MobileDropDown />
						</a>
					</div>
				</div>				
			</div>
		</nav>
	);
}
