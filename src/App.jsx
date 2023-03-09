import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginCard from "./components/LoginCard/LoginCard";
import Welcome from "./pages/Welcome";
import Dashboard from "./components/Dashboard/Dashboard";
import Savings from "./components/Dashboard/Savings";
import Community from "./components/Dashboard/Community";
import "./assets/App.css";

const AuthContext = createContext(null);

function App() {
	const [user, setUser] = useState();
	const [isUser, setIsUser] = useState(false);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
						<Routes>
							<Route
								path="/dashboard"
								element={user ? <LoginCard /> : <Dashboard />}
							/>
							<Route path="/community" element={<Community />} />
							<Route path="/savings" element={<Savings />} />
							<Route path="/login" element={<LoginCard />} />
							<Route exact path="/" element={<LoginCard />} />
						</Routes>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
