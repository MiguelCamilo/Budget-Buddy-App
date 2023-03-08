import { TiDeleteOutline } from "react-icons/ti";

export default function IncomeFormList({ date, amount, setIncome, data }) {
	const { _id } = data;

	const handle_delete_income = () => {
		fetch(`https://api-budget-buddy.web.app/income/${_id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(setIncome)
			.catch(err => console.error(err));
	};

	const dateObj = new Date();
	const month = dateObj.getMonth() + 1;
	const year = dateObj.getFullYear();
	const day = dateObj.getDate() + 1;

	return (
		<div className="flex selection:flex-row justify-between mt-3 text-gray-900 p-3 rounded-lg border-2 border-gray-500 drop-shadow-xl">
			<p>{month}-{day}-{year}</p>
			<p>{`$${amount}`}</p>

			<button onClick={handle_delete_income} className="text-red-500 text-2xl">
				<TiDeleteOutline />
			</button>
		</div>
	);
}
