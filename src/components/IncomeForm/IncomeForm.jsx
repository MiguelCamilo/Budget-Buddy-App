export default function IncomeForm() {
	return (
		<>
			{/* income form */}
			<form action="">
				<div
					className="flex flex-row p-10 ml-5 space-y-5 md:space-x-9"
					style={{ border: "1px solid black" }}
				>
					<div>
						<label>Date</label>
						<input type="date" placeholder="Date" className="" />
					</div>
					<div>
						<label>Expense</label>
						<input type="text" placeholder="Expense" />
					</div>
					<div>
						<label>Amount</label>
						<input type="text" placeholder="Amount" />
					</div>
				</div>
			</form>
		</>
	);
}
