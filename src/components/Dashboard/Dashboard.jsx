import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseChart from "../ChartJS/ExpenseChart";
import IncomeForm from "../IncomeForm/IncomeForm";
import IncomeChart from "../ChartJS/IncomeChart";
import MiddleBarChart from "../ChartJS/MiddleBarChart";
import "./dashboard.css";

export default function Dashboard() {
	return (

		<>
  {/* component */}
  {/* This is an example component */}
  <div>
	<Navbar/>
    <div className="flex overflow-hidden bg-white pt-16">
		<Sidebar/>
      <div
        id="main-content"
        className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
      >
        <main>
          <div className="pt-6 px-4">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
				{/* expense form */}
				<ExpenseForm/>
				<ExpenseChart/>
            </div>
			{/* add middle bar charts */}
			<MiddleBarChart/>
            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
				{/* income form */}
				<IncomeForm/>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
				<IncomeChart/>
              </div>
            </div>
          </div>
        </main>
		
		{/* change this footer to a component and add my social media links */}

        <footer className="bg-white flex items-center justify-center shadow rounded-lg p-4  xl:p-8 my-6 mx-4">
          <div className="flex sm:justify-center space-x-6">
            {/* add linked in icon and github icon and dev portfolio link */}
          </div>
        </footer>
      </div>
    </div>
  </div>
</>

	);
}
