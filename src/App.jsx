import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/LoginCard";
import SignUpCard from "./components/SignupCard/SignupCard";
// import Welcome from "./routes/Welcome";
import Dashboard from "./components/Dashboard/Dashboard";
import "./assets/App.css";

export const AuthContext = createContext(null);

function App() {
	const [user, setUser] = useState();

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<div className="flex items-center justify-center h-screen w-screen bg-[#e0ffee]">
					{/* card container */}
					<div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
						<Routes>
							<Route path="/login" element={<LoginCard />} />
							<Route path="/signup" element={<SignUpCard />} />
							{/* remember to change back to Welcome */}
							<Route path="/" element={<Dashboard />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
