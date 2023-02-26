import { Link } from "react-router-dom";

export default function Welcome() {
	return (
		<>
			<div className="flex items-center justify-center h-screen w-screen bg-green-50">
				<div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
					<div className="flex flex-col justify-center p-20 md:p-20">
						<h1 className="text-4xl text-center font-bold">Welcome!</h1>
						<p className="max-w-sm font-sans font-light text-center mt-10">
							Login or Sign Up
						</p>

						{/* border */}
						<div className="mt-10 border-b border-2 border-gray-300"></div>

						<Link to="/login" className="font-normal mt-10">
							<div className="flex flex-col space-x-0 space-y-6">
								<button className="flex items-center justify-center py-2 px-4 space-x-3 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-0.5 duration-150 bg-cyan-600 text-white font-normal">
									{/* <img src="/images/facebook.png" alt="" className="w-9" /> */}
									Login
								</button>

								<div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
									<button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-0.5 duration-150 w-full font-normal">
										<img src="/images/google.png" alt="" className="w-9" />
										<span className="font-normal">Google</span>
									</button>
								</div>

								<div className="flex flex-col items-center justify-between my-8 space-y-2 md:space-y-0">
									<p className="text-cyan-800 font-light">
										Dont' have an account?
									</p>
									<Link
										to="/signup"
										className="font-bold text-lg text-cyan-800"
									>
										Sign Up
									</Link>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
