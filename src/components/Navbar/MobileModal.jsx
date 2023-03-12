import { Dropdown } from "flowbite-react";
import { FiLogOut } from "react-icons/fi";
import { HiChartPie } from "react-icons/hi";
import { MdSavings, MdForum } from "react-icons/md";

// google auth
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../App";

export default function MobileModal() {
	let navigate = useNavigate();
	const user = auth.currentUser;

	const logout = async () => {
		try {
			await signOut(auth);
			toast.success("Successfully Logged Out");
			navigate("/");
		} catch (err) {
			toast.error(err);
		}
	};

	return (
		<>
			<Dropdown label="Menu" color="green">
				<Dropdown.Header>
					{user && user.displayName && (
						<span className="text-sm">{user.displayName}</span>
					)}
				</Dropdown.Header>
				<Dropdown.Item>
					<Link to="/dashboard" className="flex flex-row">
						<HiChartPie className="mr-1 mt-0.5" />
						Dashboard
					</Link>
				</Dropdown.Item>
				<Dropdown.Item>
					<Link to="/savings" className="flex flex-row">
						<MdSavings className="mr-1 mt-0.5" />
						Savings
					</Link>
				</Dropdown.Item>
				<Dropdown.Item>
					<Link to="/community" className="flex flex-row">
						<MdForum className="mr-1 mt-0.5" />
						Forum
					</Link>
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item onClick={() => logout()}>
					<FiLogOut className="mr-1 text-red-600" />
					<p className="text-red-600">Sign Out</p>
				</Dropdown.Item>
			</Dropdown>
		</>
	);
}
