import { HiChartPie } from "react-icons/hi"
import { MdSavings, MdForum } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Sidebar() {
	let navigate = useNavigate();

	return (
		<aside
			className="fixed h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
			aria-label="Sidebar"
		>
			<div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
				<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
					<div className="flex-1 px-3 bg-white divide-y-2 space-y-1">
						<ul className="space-y-5 pb-2">
							<li>
								<Link
									to="/dashboard"
									className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
								>
									<HiChartPie className="text-2xl" />
									<span className="ml-3">Dashboard</span>
								</Link>
							</li>
							<li>
								<Link
									to="/savings"
									className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
								>
									<MdSavings className="text-2xl" />
									<span className="ml-3">Savings</span>
								</Link>
							</li>
							<li>
								<Link
									to="/community"
									className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
								>
									<MdForum className="text-2xl " />
									<span className="ml-3 flex-1 whitespace-nowrap">
										Community Forum
									</span>
								</Link>
							</li>
						</ul>
						<div className="space-y-2 pt-2"></div>
					</div>
					<div>
					</div>
				</div>
			</div>
		</aside>
	);
}
