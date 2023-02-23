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
			<h2 className="mb-5 text-4xl font-bold">Log In</h2>
			<p className="max-w-sm mb-12 font-sans font-light text-gray-600">
				Log into your account to view your expenses
			</p>
			<input
				type="text"
				className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
				placeholder="Email"
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
		</div>
	);
}
