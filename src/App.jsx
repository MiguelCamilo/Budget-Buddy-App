import { Routes, Route } from 'react-router-dom';

import LoginCard from './components/LoginCard/LoginCard';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Savings from './components/Dashboard/Savings';
import Community from './components/Dashboard/Community';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './context/Protected';
import './assets/App.css';

function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route
					path="/dashboard"
					element={
						<Protected>
							<Dashboard />
						</Protected>
					}
				/>
				<Route
					path="/community"
					element={
						<Protected>
							<Community />
						</Protected>
					}
				/>
				<Route
					path="/savings"
					element={
						<Protected>
							<Savings />
						</Protected>
					}
				/>
				<Route exact path="/" element={<LoginCard />} />
				<Route exact path="/register" element={<Register />} />
			</Routes>
		</AuthContextProvider>
	);
}

export default App;
