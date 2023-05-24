import { useState } from "react";
import { ScrollReveal } from "reveal-on-scroll-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// google auth
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import { UserAuth } from "../../context/AuthContext";
import { auth } from "../../firebase.config";

import "../LoginCard/logincard.css";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { user, setUser } = UserAuth();

	const navigate = useNavigate();

	const handleCreateEmailAndPassword = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return toast.error("Please fill out all required fields");
		}

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			await updateProfile(user, {
				displayName: name,
			});
		} catch (error) {
			console.log(error);
		}
	};

	// checks if user is logged in
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("User: ", currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	// if the user is logged in the redirect
	// and it will run everytime the user state updates
	useEffect(() => {
		if (user != null) {
			navigate("/dashboard");
		}
	}, [user]);

	return (
		<>
			{/* Global Container */}
			<div className="h-full w-full md:w-[50%] fixed z-[1] top-0 overflow-hidden pt-20 bg-white">
				{/* Left Side */}
				<div className="w-full px-6 py-8 md:px-8">
					<div className="flex justify-center mx-auto">
						<ScrollReveal.h1
							delay={0}
							easing="anticipate"
							className="text-[48px] font-black text-center text-[#46b563] italic tracking-tighter"
						>
							Budget Buddy
						</ScrollReveal.h1>
					</div>
					<ScrollReveal.h2
						delay={0.3}
						easing="anticipate"
						className="w-[100%] min-w-[300px] text-gray-500 text-md text-center font-normal italic leading-8"
					>
						Take control of your finances and achieve your financial goals with
						our easy-to-use expense tracking and budgeting tools.
					</ScrollReveal.h2>
					<ScrollReveal.div delay={0.4} easing="anticipate">
						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
							<span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
								Create your account
							</span>
							<span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
						</div>

						<form onSubmit={handleCreateEmailAndPassword}>
							<div className="mt-4">
								<label
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
									htmlFor="LoggingEmailAddress"
								>
									Name
								</label>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									type="text"
								/>
							</div>
							<div className="mt-4">
								<label
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
									htmlFor="LoggingEmailAddress"
								>
									Email Address
								</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									type="email"
								/>
							</div>
							<div className="mt-4">
								<div className="flex justify-between">
									<label
										className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
										htmlFor="loggingPassword"
									>
										Password
									</label>
								</div>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-green-300"
									type="password"
								/>
							</div>
							<div className="mt-6">
								<button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 hover:opacity-90">
									Sign Up
								</button>
							</div>
						</form>

						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
							<Link to="/">
								<span className="text-xs text-center uppercase text-black hover:underline">
									Already have an account: Login
								</span>{" "}
							</Link>
							<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
						</div>
					</ScrollReveal.div>
				</div>
				{/* Right Side */}
				<div className="h-full w-[50%] fixed z-[1] top-0 overflow-hidden right-0">
					<div
						className="w-full h-full gradient-bg hidden md:block bg-cover"
						style={{
							backgroundImage:
								'url("https://images.unsplash.com/photo-1561414926-7f3f921a2e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80")',
						}}
					/>
				</div>
			</div>
		</>
	);
}
