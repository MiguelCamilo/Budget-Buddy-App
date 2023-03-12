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

export default function MobileDropDown() {
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
			<Dropdown label="Menu" color="green" dismissOnClick={true}>
				<Dropdown.Header>
					{user && user.displayName && (
						<span className="text-sm">{user.displayName}</span>
					)}
				</Dropdown.Header>
				<Link to="/dashboard" className="flex flex-row">
					<Dropdown.Item>
						<HiChartPie className="mr-1 mt-0.5" />
						Dashboard
					</Dropdown.Item>
				</Link>
				<Link to="/savings" className="flex flex-row">
					<Dropdown.Item>
						<MdSavings className="mr-1 mt-0.5" />
						Savings
					</Dropdown.Item>
				</Link>
				<Link to="/community" className="flex flex-row">
					<Dropdown.Item>
						<MdForum className="mr-1 mt-0.5" />
						Forum
					</Dropdown.Item>
				</Link>
				<Dropdown.Divider />
				<Dropdown.Item onClick={() => logout()}>
					<FiLogOut className="mr-1 text-red-600" />
					<p className="text-red-600">Sign Out</p>
				</Dropdown.Item>
			</Dropdown>
		</>
	);
}
