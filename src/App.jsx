import { useState } from "react";
import LoginCard from "./components/LoginCard/LoginCard";
import SignUpCard from "./components/SignupCard/SignupCard";
import Welcome from "./pages/Welcome";
import Dashboard from "./components/Dashboard/Dashboard";
import "./assets/App.css";

function App() {
	const [user, setUser] = useState();
	const [isUser, setIsUser] = useState(false);

	return (
	<>
		{user ? <Welcome /> : isUser ? <LoginCard /> : <Dashboard />}
	</>
	)
	
}

export default App;
