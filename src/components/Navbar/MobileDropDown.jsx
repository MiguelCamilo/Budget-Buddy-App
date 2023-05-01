import { Dropdown } from "flowbite-react";
import { FiLogOut } from "react-icons/fi";
import { HiChartPie } from "react-icons/hi";
import { MdSavings, MdForum } from "react-icons/md";
import { toast } from "react-toastify";

// google auth
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserAuth } from '../../context/AuthContext';

export default function MobileDropDown() {
	let navigate = useNavigate();
	const { googleSignOut, user } = UserAuth();

	const handleSignOut = async () => {
		try {
			await googleSignOut();
			toast.success('Sign out successful');
			navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<Dropdown label="Menu" color="green" dismissOnClick={true}>
				<Dropdown.Header>
					{user && (
						<span className="text-sm">{user?.displayName}</span>
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
				<Dropdown.Item onClick={handleSignOut}>
					<FiLogOut className="mr-1 text-red-600" />
					<p className="text-red-600">Sign Out</p>
				</Dropdown.Item>
			</Dropdown>
		</>
	);
}
