import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/SideBar";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

export default function Savings() {
	return (
		<>
			<div>
				<Navbar />
				<div className="flex bg-white pt-16">
					<Sidebar />
					{/* entire background */}
					<div className="h-full w-full bg-gray-100 relative overflow-y-auto lg:ml-64">
						<div className="pt-6 px-4">
							<div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
								{/* add bar chart */}
								{/* <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
									Hello
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
