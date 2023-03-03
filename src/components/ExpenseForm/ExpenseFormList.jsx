import { TiDeleteOutline } from "react-icons/ti";

export default function ExpenseFormList({ data, title, amount, setExpenses }) {
	// const dateObj = new Date();
	// const month = dateObj.getMonth() + 1;
	// const year = dateObj.getFullYear();
	// const day = dateObj.getDate() + 1;

	const { _id } = data;

	// delete request here
	const handleDeleteExpense = () => {
		fetch(`http://localhost:3030/expenses/${_id}`, {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(setExpenses)
			.catch(err => console.error(err))
	}

	return (
		<div className="flex selection:flex-row justify-between mt-3 text-purple-400 border-2 border-white p-3 rounded-lg">
			{/* <p>
				{dateObj}
			</p> */}
			<p className="capitalize">{title}</p>
			<p>{`$${amount}`}</p>
			<button onClick={handleDeleteExpense} className="text-red-500 text-2xl">
				<TiDeleteOutline />
			</button>
		</div>
	);
}
