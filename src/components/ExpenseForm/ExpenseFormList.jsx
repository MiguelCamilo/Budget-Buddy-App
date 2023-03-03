export default function ExpenseFormList({ date, title, amount }) {
	
	const dateObj = new Date(date)
	const month = dateObj.getMonth() + 1
	const year = dateObj.getFullYear()
	const day = dateObj.getDate() + 1

	// delete form
	

	return (
		<div className="flex flex-col md:flex-row justify-between mt-3 ">
			<p>{month}-{day}-{year}</p>
			<p>{title}</p>
			<p>{amount}</p>
		</div>
	);
}

