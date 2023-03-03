export default function ExpenseFormList({ date, title, amount }) {
	// const dateObj = new Date();
	// const month = dateObj.getMonth() + 1;
	// const year = dateObj.getFullYear();
	// const day = dateObj.getDate() + 1;

	return (
		<div className="flex selection:flex-row justify-between mt-3 text-purple-400 border-2 border-white p-3 rounded-lg">
			{/* <p>
				{dateObj}
			</p> */}
			<p className="capitalize">{title}</p>
			<p>{`$${amount}`}</p>
		</div>
	);
}
