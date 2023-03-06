import SideBar from "../Navbar/SideBar";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import IncomeForm from "../IncomeForm/IncomeForm";
import ExpenseChart from "../ChartJS/ExpenseChart";
import "./dashboard.css";

export default function Dashboard() {
	return (
		<section className="bg-[#F9EFFF] h-screen">
			<SideBar />
		</section>
	);
}
