import { BiMenuAltRight } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

export default function Navbar() {
	return (
		<nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start">
						{/* logo */}
						<a
							href="#"
							className="text-xl font-bold flex items-center lg:ml-2.5"
						>
							<span className="self-center whitespace-nowrap">
								Budget Buddy
							</span>
						</a>
					</div>

					<div className="flex items-center">
						<div className="hidden lg:flex items-center">
							<div className="-mb-2">
								<button>
									{/* add modal stating feature coming soon */}
									<FiSettings className="text-2xl duration-150" />
								</button>
							</div>
						</div>
						<a
							className="md:hidden sm:inline-flex ml-5 text-black hover:bg-gray-100 font-medium rounded-lg text-3xl p-2 text-center items-center mr-3"
						>
							{/* drop down menu */}
							<BiMenuAltRight />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
