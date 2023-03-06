import SideBar from "../Navbar/SideBar";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import IncomeForm from "../IncomeForm/IncomeForm";
import "./dashboard.css";

export default function Dashboard() {
	return (
		<section className="flex overflow-hidden bg-[#F9EFFF]">
			<SideBar />
			<div className="flex-grow container px-6 py-10 color-gr rounded-3xl mx-5 my-5 drop-shadow-xl">
				<section className="text-gray-400 dark:bg-[#3D3A53] bg-[#F9EFFF] body-font rounded-2xl">
					<div className="container px-5 py-24 flex justify-center">
						<div className="flex flex-wrap -m-4">
							<ExpenseForm/>
							<IncomeForm />
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
