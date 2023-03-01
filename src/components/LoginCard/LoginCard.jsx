import { Link } from "react-router-dom";

const arrow = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
		/>
	</svg>
);

export default function LoginCard() {
	return (
		<div className="flex items-center justify-center h-screen w-screen bg-[#e0ffee]">
			<div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
			<div className="p-6 md:p-20">
				{/* content */}
				<h2 className="mb-5 text-4xl font-bold text-center">Log In</h2>
				<p className="max-w-sm mb-12 font-sans font-light text-gray-600 text-center ml-10">
					Log in to view your account
				</p>
				<input
					type="text"
					className="w-full p-6 border border-cyan-700 hover:border-cyan-500 rounded-md placeholder:font-sans placeholder:font-light"
					placeholder="Email"
				/>
				<input
					type="text"
					className="w-full p-6 mt-5 border border-cyan-700 hover:border-cyan-500 rounded-md placeholder:font-sans placeholder:font-light"
					placeholder="Password"
				/>

				{/* middle container */}
				<div className="flex flex-col items-center justify-between my-8 space-y-2 md:space-y-0">
					<p className="text-cyan-800 font-light">Dont' have an account?</p>
					<Link to="/signup" className="font-bold text-lg text-cyan-800">
						Sign Up
					</Link>
				</div>

				{/* next btn  */}
				<button className="w-full flex justify-center items-center p-6 space-x-4 font-sans text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-slate-300 hover:bg-opacity-90 hover:shadow-2xl border transition hover:-translate-y-0.5 duration-150">
					<span>{arrow}</span>
				</button>

				{/* Border */}
				<div className="mt-16 border-b border-gray-300"></div>

				{/* Bottom Content */}
				<p className="py-6 text-md font-light text-center text-gray-400">
					Or Login in With
				</p>

				{/* bottom buttons container */}
				<a>
					<div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
						<button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-0.5 duration-150 w-full font-normal">
							<img src="/images/google.png" alt="" className="w-9" />
							<span className="font-normal">Google</span>
						</button>
					</div>
				</a>
			</div>
			<div>
				{/* side image */}
				<img
					src="/images/image.jpg"
					alt="image"
					className="w-[540px] h-full hidden md:block rounded-r-xl"
				/>
			</div>
			</div>
		</div>
	);
}
