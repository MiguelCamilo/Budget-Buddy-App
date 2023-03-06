import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";


export default function SideBar() {

	return (
		<>
			<aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-[#322f44] dark:border-gray-700 rounded-r-2xl space-y-10">
			{/* BUDGET BUDDY LOGO */}
			<div className="flex flex-col items-center mt-6 -mx-2">
				<img
					className="object-cover w-24 h-20 mx-2 rounded-full"
					src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
					alt="avatar"
				/>
				<h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
					Miguel Camilo
				</h4>
				<p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
					miguel@email.com
				</p>
			</div>
				<div className="flex flex-col justify-between flex-1 mt-10 ">
					<nav className="-mx-3 space-y-6">
						<div className="space-y-3 ">
							<label className="px-3 text-xs text-gray-900 uppercase dark:text-[#D076FF]">
								home dashboard
							</label>
							<a
								className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="#"
							>
								<AiFillHome/>
								<span className="mx-2 text-sm font-medium text-purple-400 dark:text-[#F9EFFF]">Dashboard</span>
							</a>
						
						</div>
						<div className="space-y-3 ">
							<label className="px-3 text-xs text-gray-900 uppercase dark:text-[#D076FF]">
								savings dashboard
							</label>
							
							<a
								className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="#"
							>
								<AiOutlineUser/>
								<span className="mx-2 text-sm font-medium text-purple-400 dark:text-[#F9EFFF]">Savings</span>
							</a>
						</div>
						<div className="space-y-3 ">
							<label className="px-3 text-xs text-gray-900 uppercase dark:text-[#D076FF]">
								community forum
							</label>
							<a
								className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
								href="#"
							>
								<FiMessageSquare/>
								<span className="mx-2 text-sm font-medium text-purple-400 dark:text-[#F9EFFF]">Forum</span>
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
