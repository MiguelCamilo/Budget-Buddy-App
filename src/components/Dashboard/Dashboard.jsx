import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import IncomeForm from "../IncomeForm/IncomeForm";

export default function Dashboard() {
	return (
		<>
			<div>
				<Navbar />
				<div className="flex bg-white pt-16 md:pt-14">
					<Sidebar />
					<div className="h-full w-full bg-[#F0FBF3] relative overflow-y-auto lg:ml-64">
						<div className="pt-6 px-4">
							<div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
								<ExpenseForm />
							</div>							
							<div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
								<IncomeForm />
							</div>
						</div>
						{/* change this footer to a component and add my social media links */}
						<footer className="bg-white flex items-center justify-center shadow rounded-lg p-4  xl:p-8 my-6 mx-4">
							<div className="flex sm:justify-center space-x-10">
								<a target="_blank" href="https://github.com/MiguelCamilo">
									<FaGithubSquare className="text-2xl hover:text-gray-700" />
								</a>
								<a
									target="_blank"
									href="https://www.linkedin.com/in/miguel-camilo/"
								>
									<FaLinkedin className="text-2xl hover:text-gray-700" />
								</a>
								<a
									target="_blank"
									href="https://bocacode.com/candidates/software-engineer/miguel-camilo"
								>
									<BsLink45Deg className="text-2xl hover:text-gray-700" />
								</a>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
}
