import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";


export default function Navbar() {

	return (
		<>
			<aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 rounded-r-2xl">
				<a href="#">
					{/* PLACE BUDGET BUDDY LOGO HERE */}
				</a>
				<div className="flex flex-col justify-between flex-1 mt-6">
					<nav className="-mx-3 space-y-6">
						<div className="space-y-3 ">
							<label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
								home dashboard
							</label>
							<a
								className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="#"
							>
								<AiFillHome/>
								<span className="mx-2 text-sm font-medium text-purple-400">Dashboard</span>
							</a>
						
						</div>
						<div className="space-y-3 ">
							<label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
								savings dashboard
							</label>
							
							<a
								className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="#"
							>
								<AiOutlineUser/>
								<span className="mx-2 text-sm font-medium text-purple-400">Savings</span>
							</a>
						</div>
						<div className="space-y-3 ">
							<label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
								community forum
							</label>
							<a
								className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="#"
							>
								<FiMessageSquare/>
								<span className="mx-2 text-sm font-medium text-purple-400">Communit Forum</span>
							</a>
							{/* LOG OUT BUTTON AT THE BOTTOM */}
						</div>
							<p className="text-white text-sm">*add log out button*</p>
					</nav>
				</div>
			</aside>
		</>
	);
}
