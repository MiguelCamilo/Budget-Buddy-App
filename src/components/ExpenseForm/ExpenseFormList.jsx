import { TiDeleteOutline } from "react-icons/ti";

export default function ExpenseFormList({ data, title, amount, setExpenses }) {
	const { _id } = data;

	// delete request here
	const handle_delete_expense = () => {
		fetch(`https://api-budget-buddy.web.app/expenses/${_id}`, {
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
		<div className="flex selection:flex-row justify-between mt-3 text-gray-900 border-2 border-gray-500 p-3 rounded-lg drop-shadow-2xl">
			<p className="capitalize">{title}</p>
			<p>{`$${amount}`}</p>

			<button onClick={handle_delete_expense} className="text-red-500  text-2xl">
				<TiDeleteOutline/>
			</button>
		</div>
	);
}
