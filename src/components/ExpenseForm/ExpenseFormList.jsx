export default function ExpenseFormList({ date, title, amount }) {

	
	return (
		<div className="flex flex-col md:flex-row justify-between mt-3 ">
			<p>{date}</p>
			<p>{title}</p>
			<p>{amount}</p>
		</div>
	);
}

