import { TiDeleteOutline } from "react-icons/ti";

export default function IncomeFormList({ date, amount, setIncome, data }) {
	const { _id } = data;

	const handle_delete_income = () => {
		fetch(`http://localhost:3030/income/${_id}`, {
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
		<div className="flex selection:flex-row justify-between mt-3 text-purple-400 border-2 border-white p-3 rounded-lg">
			<p>{month}-{day}-{year}</p>
			<p>{`$${amount}`}</p>

			<button onClick={handle_delete_income} className="text-red-800 text-2xl">
				<TiDeleteOutline className="hover:text-red-500" />
			</button>
		</div>
	);
}
