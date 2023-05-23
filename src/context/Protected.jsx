import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ children }) => {
	const { user } = UserAuth();

	const navigate = useNavigate();

	useEffect(() => {
		if (user === null) {
			navigate("/");
		}
	}, [user, navigate]);

	return <>{children}</>;
};

export default Protected;
