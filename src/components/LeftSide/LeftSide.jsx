const arrow = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
		/>
	</svg>
);

export default function LeftSide() {
	return (
		<div className="p-6 md:p-20">
			{/* content */}
			<h2 className="mb-5 text-4xl font-bold text-center">Log In</h2>
			<p className="max-w-sm mb-12 font-sans font-light text-gray-600 text-center ml-10">
				Log into your account to view your expenses
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
			<div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
				<button cursor="pointer">
					<a href="#" className="font-bold text-cyan-800">
						Forgot Password
					</a>
				</button>

				{/* next btn  */}
				<button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-slate-300 hover:bg-opacity-90 hover:shadow-2xl border transition hover:-translate-y-0.5 duration-150">
					<span>{arrow}</span>
				</button>
			</div>

			{/* Border */}
			<div className="mt-16 border-b border-gray-300"></div>

			{/* Bottom Content */}
			<p className="py-6 text-md font-light text-center text-gray-400">Or Login in With</p>

			{/* bottom buttons container */}
			<div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
				<button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-0.5 duration-150 md:w-1/2 bg-blue-600 text-white">
					<img src="/images/facebook.png" alt="" className="w-9"/>
					<span className="font-thin">Facebook</span>
				</button>
			</div>
		</div>
	);
}
