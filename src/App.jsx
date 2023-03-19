import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/LoginCard";
import Dashboard from "./components/Dashboard/Dashboard";
import Savings from "./components/Dashboard/Savings";
import Community from "./components/Dashboard/Community";
import "./assets/App.css";

// google auth
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const AuthContext = createContext();

function App() {
	const [user, setUser] = useState(false);
	const [isUser, setIsUser] = useState(true);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/community" element={<Community />} />
				<Route path="/savings" element={<Savings />} />
				<Route exact path="/" element={<LoginCard />} />
			</Routes>
		</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
