import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

export default function Community() {
	return (
		<div>
			<Navbar />
			<div className="flex bg-white pt-16 md:pt-14">
				<Sidebar />
				<div className="h-full w-full bg-gray-100 relative lg:ml-64">
					<div className="pt-6 px-4 h-screen overflow-y-scroll">
						<div className="flex justify-center items-center w-full overflow-hidden">
							<div className="flex justify-center bg-white w-[30%] shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4">
                                {/* modal button */}
                                Add Post
                            </div>                        
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
