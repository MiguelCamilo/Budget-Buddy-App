

export default function Navbar() {
	return (
		<nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start">
						{/* <button
							id="toggleSidebarMobile"
							aria-expanded="true"
							aria-controls="sidebar"
							className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
						>
							<svg
								id="toggleSidebarMobileHamburger"
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
							<svg
								id="toggleSidebarMobileClose"
								className="w-6 h-6 hidden"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button> */}
                        {/* logo */}
						<a
							href="#"
							className="text-xl font-bold flex items-center lg:ml-2.5"
						>
							<span className="self-center whitespace-nowrap">Budget Buddy</span>
						</a>
					</div>

					<div className="flex items-center">
	
						<div className="hidden lg:flex items-center">
							<div className="-mb-1">
								<a
									className="bg-red-400 p-2 rounded-xl text-white drop-shadow-xl hover:drop-shadow-2xl"
									href="#"
								>
									Log Out
								</a>
							</div>
						</div>
						<a
							href="#"
							className="md:hidden sm:inline-flex ml-5 text-white bg-blue-400 hover:bg-blue-200  font-medium rounded-lg text-sm p-2 text-center items-center mr-3"
						>
							Make this  drop down menu
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import {
// 	Navbar,
// 	MobileNav,
// 	Typography,
// 	Button,
// 	IconButton,
// } from "@material-tailwind/react";

// export default function SideBar() {
// 	const [openNav, setOpenNav] = useState(false);

// 	useEffect(() => {
// 		window.addEventListener(
// 			"resize",
// 			() => window.innerWidth >= 960 && setOpenNav(false)
// 		);
// 	}, []);

// 	const navList = (
// 		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
// 			<Typography
// 				as="li"
// 				variant="small"
// 				color="blue-gray"
// 				className="p-1 font-normal"
// 			>
// 				<a href="#" className="flex items-center">
// 					Pages
// 				</a>
// 			</Typography>
// 			<Typography
// 				as="li"
// 				variant="small"
// 				color="blue-gray"
// 				className="p-1 font-normal"
// 			>
// 				<a href="#" className="flex items-center">
// 					Account
// 				</a>
// 			</Typography>
// 			<Typography
// 				as="li"
// 				variant="small"
// 				color="blue-gray"
// 				className="p-1 font-normal"
// 			>
// 				<a href="#" className="flex items-center">
// 					Blocks
// 				</a>
// 			</Typography>
// 			<Typography
// 				as="li"
// 				variant="small"
// 				color="blue-gray"
// 				className="p-1 font-normal"
// 			>
// 				<a href="#" className="flex items-center">
// 					Docs
// 				</a>
// 			</Typography>
// 		</ul>
// 	);

// 	return (
// 		<Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 drop-shadow-2xl">
// 			<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
// 				<Typography
// 					as="a"
// 					href="/dashboard"
// 					variant="small"
// 					className="mr-4 cursor-pointer py-1.5 font-normal"
// 				>
// 					<button class="px-6 py-2 font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D076FF] rounded-lg hover:bg-[#d69bf6] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 drop-shadow-xl">
// 						Budget Buddy
// 					</button>
// 				</Typography>
// 				<div className="hidden lg:block">{navList}</div>
// 				<Button size="sm" className="hidden lg:inline-block">
// 					<span>Log Out</span>
// 				</Button>
// 				<IconButton
// 					variant="text"
// 					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
// 					ripple={false}
// 					onClick={() => setOpenNav(!openNav)}
// 				>
// 					{openNav ? (
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							className="h-6 w-6"
// 							viewBox="0 0 24 24"
// 							stroke="currentColor"
// 							strokeWidth={2}
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M6 18L18 6M6 6l12 12"
// 							/>
// 						</svg>
// 					) : (
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							className="h-6 w-6"
// 							fill="none"
// 							stroke="currentColor"
// 							strokeWidth={2}
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M4 6h16M4 12h16M4 18h16"
// 							/>
// 						</svg>
// 					)}
// 				</IconButton>
// 			</div>
// 			<MobileNav open={openNav}>
// 				<div className="container mx-auto">
// 					{navList}
// 					<Button size="sm" fullWidth className="mb-2 ">
// 						<span>Log out</span>
// 					</Button>
// 				</div>
// 			</MobileNav>
// 		</Navbar>
// 	);
// }
